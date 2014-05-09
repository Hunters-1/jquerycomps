//TODO: 初始化改为响应式, 需要考虑查询初始化
 ;(function(define, _win) { 'use strict'; define( [ 'JC.BaseMVC', 'JC.Panel' ], function(){
/**
 * 组件用途简述
 *
 *  <p><b>require</b>:
 *      <a href="widnow.jQuery.html">jQuery</a>
 *      , <a href='JC.BaseMVC.html'>JC.BaseMVC</a>
 *  </p>
 *
 *  <p><a href='https://github.com/openjavascript/jquerycomps' target='_blank'>JC Project Site</a>
 *      | <a href='http://jc2.openjavascript.org/docs_api/classes/Bizs.MultiselectPanel.html' target='_blank'>API docs</a>
 *      | <a href='../../modules/Bizs.MultiselectPanel/0.1/_demo' target='_blank'>demo link</a></p>
 *  
 *  <h2>页面只要引用本脚本, 默认会自动处理 div class="js_bizMultiselectPanel" </h2>
 *
 *  <h2>可用的 HTML attribute</h2>
 *
 *  <dl>
 *      <dt></dt>
 *      <dd><dd>
 *  </dl> 
 *
 * @namespace   window.Bizs
 * @class       MultiselectPanel
 * @extends     JC.BaseMVC
 * @constructor
 * @param   {selector|string}   _selector   
 * @version dev 0.1 2014-05-09
 * @author  qiushaowei <suches@btbtd.org> | 75 Team
 * @example
        <h2>Bizs.MultiselectPanel 示例</h2>
 */
    var _jdoc = $( document ), _jwin = $( window );

    Bizs.MultiselectPanel = MultiselectPanel;

    function MultiselectPanel( _selector ){
        _selector && ( _selector = $( _selector ) );

        if( JC.BaseMVC.getInstance( _selector, MultiselectPanel ) ) 
            return JC.BaseMVC.getInstance( _selector, MultiselectPanel );

        JC.BaseMVC.getInstance( _selector, MultiselectPanel, this );

        this._model = new MultiselectPanel.Model( _selector );
        this._view = new MultiselectPanel.View( this._model );

        this._init();

        JC.log( MultiselectPanel.Model._instanceName, 'all inited', new Date().getTime() );
    }
    /**
     * 初始化可识别的 MultiselectPanel 实例
     * @method  init
     * @param   {selector}      _selector
     * @static
     * @return  {Array of MultiselectPanelInstance}
     */
    MultiselectPanel.init =
        function( _selector ){
            var _r = [];
            _selector = $( _selector || document );

            if( _selector.length ){
                if( _selector.hasClass( 'js_bizMultiselectPanel' )  ){
                    _r.push( new MultiselectPanel( _selector ) );
                }else{
                    _selector.find( 'input.js_bizMultiselectPanel, span.js_bizMultiselectPanel' ).each( function(){
                        _r.push( new MultiselectPanel( this ) );
                    });
                }
            }
            return _r;
        };

    JC.BaseMVC.build( MultiselectPanel );

    JC.f.extendObject( MultiselectPanel.prototype, {
        _beforeInit:
            function(){
                //JC.log( 'MultiselectPanel _beforeInit', new Date().getTime() );
            }

        , _initHanlderEvent:
            function(){
                var _p = this;

                _p.on( 'inited', function(){
                    _p.trigger( 'init_top' );
                });

                var _panel = new JC.Panel( _p._model.panel() );
                    _p._model.panelIns( _panel );

                    _panel.on( 'close', function( _evt, _panel ){ _panel.hide(); return false; });

                    _panel.on( 'hide', function(){
                        _p.trigger( 'updateStatus' );
                    });

                    _panel.on( 'beforeshow', function(){
                        JC.hideAllPanel();
                    });

                if( _p._model.popupHideButton() ){
                    _panel.offsetTop( -_p.selector().prop( 'offsetHeight' ) - 1 );
                }

                _p.selector().on( 'click', function( _evt ){
                    _panel.show( _p.selector() );
                });

                _p.on( 'init_top', function( _evt ){
                    _p._model.initTop();
                });

                _p.on( 'updateTop', function( _evt, _data, _d ){
                    _p._view.buildTop( _data );
                });

                _p.on( 'updateChild', function( _evt, _id, _data, _d ){
                    _p._view.buildChild( _id, _data );
                    var _pCk = _p._model.getCkItem( _id );
                    _p._view.topCk( _id, _pCk.prop( 'checked' ) );
                });

                _panel.layout().delegate( '.' + _p._model.openClass(), 'click', function( _evt ){
                    var _sp = $( this ), _id = _sp.data('id');
                    _sp.addClass( _p._model.closeClass() ).removeClass( _p._model.openClass() );
                    _p._view.showChild( _id );
                    if( !_p._model.getChildBox( _id ).data( 'inited' ) ){
                        _p._model.getChildBox( _id ).data( 'inited', true );
                        _p._model.initChild( _id );
                    }
                });

                _panel.layout().delegate( '.' + _p._model.closeClass(), 'click', function( _evt ){
                    var _sp = $( this ), _id = _sp.data('id');
                    _sp.addClass( _p._model.openClass() ).removeClass( _p._model.closeClass() );
                    _p._view.hideChild( _id );
                });

                _panel.layout().delegate( 'input.js_bmspTopCk', 'change', function( _evt ){
                    var _sp = $( this ), _id = _sp.val();
                    _p._view.topCk( _id, _sp.prop( 'checked' ) );
                });

                _panel.layout().delegate( 'input.js_bmspChildCk', 'change', function( _evt ){
                    var _sp = $( this ), _id = _sp.val(), _parentid = _sp.data( 'parentid' );
                    _p._view.childCk( _parentid, _id );
                });

                _p.on( 'updateStatus', function( _evt ){
                    var _cked = _panel.find( 'input.js_bmspCkItem:checked' );
                    if( _cked.length ){
                        _p.selector().val( JC.f.printf( _p._model.hasItemText(), _cked.length ) );
                    }else{
                        _p.selector().val( _p._model.noItemText() );
                    }
                });

            }

        , _inited:
            function(){
                //JC.log( 'MultiselectPanel _inited', new Date().getTime() );
                this.trigger( 'inited' );
            }
    });

    MultiselectPanel.Model._instanceName = 'JCMultiselectPanel';
    JC.f.extendObject( MultiselectPanel.Model.prototype, {
        init:
            function(){
                //JC.log( 'MultiselectPanel.Model.init:', new Date().getTime() );
            }

        , url: function(){ return this.attrProp( 'bmspUrl' ); }
        , childUrl: function(){ return this.attrProp( 'bmspChildUrl' ); }
        , popupHideButton: function(){ return this.boolProp( 'bmspPopupHideButton'); }
        , panel: function(){ return this.selectorProp( 'bmspPanel'); }
        , panelIns: 
            function( _setter ){
                typeof _setter != 'undefined' && ( this._panelIns = _setter );
                return this._panelIns;
            }
        , panelBoxSelector: function(){ return this.selectorProp( 'bmspPanelBoxSelector' ); }
        , topTpl: function(){ return this.scriptTplProp( 'bmspTopTpl' ) }
        , childTpl: function(){ return this.scriptTplProp( 'bmspChildTpl' ) }
        , childBox: function( _selector ){ return _selector.find( '.js_bmspChildBox' ); } 

        , openClass: function(){ return this.attrProp( 'bmspOpenClass' ); } 
        , closeClass: function(){ return this.attrProp( 'bmspCloseClass' ); } 

        , openSelector: function(){ return this.selectorProp( '.' + this.openClass() ); } 
        , closeSelector: function(){ return this.selectorProp( '.' + this.closeClass() ); } 

        , initTop:
            function(){
                var _p = this, _data;
                $.get( _p.url() ).done( function( _d ){
                    _data = $.parseJSON( _d );
                    _data 
                        && !_data.errorno 
                        && _data.data 
                        && _p.trigger( 'updateTop', [ _data.data, _d ] );
                });
            }

        , initChild:
            function( _id ){
                var _p = this, _data;
                $.get( JC.f.printf( _p.childUrl(), _id ) ).done( function( _d ){
                   _data = $.parseJSON( _d );
                    _data 
                        && !_data.errorno 
                        && _data.data 
                        && _p.trigger( 'updateChild', [ _id, _data.data, _d ] );
                });
            }

        , getChildBox: function( _id ){
            return this.panelIns().find( JC.f.printf( '.js_bmspChildBox[data-id={0}]', _id ) );
        }

        , getCkItem: function( _id ){
             return this.panelIns().find( JC.f.printf( 'input.js_bmspCkItem[value={0}]', _id ) );
        }

        , noItemText: function(){ return this.attrProp( 'bmspNoItemText' ); }
        , hasItemText: function(){ return this.attrProp( 'bmspHasItemText' ); }

    });

    JC.f.extendObject( MultiselectPanel.View.prototype, {
        init:
            function(){
                //JC.log( 'MultiselectPanel.View.init:', new Date().getTime() );
            }

        , buildTop:
            function( _data ){
                var _p = this
                    , _box = _p._model.panelBoxSelector()
                    , _tpl = _p._model.topTpl()
                    , _r = []
                    ;
    
                $.each( _data, function( _ix, _item ){
                    _r.push( JC.f.printf( _tpl, _item[0], _item[1] ) );
                });

                _box.html( _r.join('') );
            }

        , buildChild:
            function( _id, _data ){
               var _p = this
                    , _box = _p._model.getChildBox( _id )
                    , _tpl = _p._model.childTpl()
                    , _r = []
                    ;

                $.each( _data, function( _ix, _item ){
                    _r.push( JC.f.printf( _tpl, _item[0], _item[1], _id ) );
                });

                _box.html( _r.join('') );
            }

        , showChild:
            function( _id ){
                this._model.getChildBox( _id ).show();
            }

        , hideChild:
            function( _id ){
                this._model.getChildBox( _id ).hide();
            }

        , topCk:
            function( _id, _checked ){
                var _childBox = this._model.getChildBox( _id );
                _childBox.find( 'input.js_bmspChildCk' ).prop( 'checked', _checked );
            }

        , childCk:
            function( _parentid, _id ){
                var _p = this
                    , _childBox = this._model.getChildBox( _parentid )
                    , _allCk = _p._model.getCkItem( _parentid )
                    ;
                if( _childBox.find( 'input.js_bmspChildCk:not(:checked)' ).length ){
                    _allCk.prop( 'checked', false );
                }else{
                    _allCk.prop( 'checked', true );
                }
            }
    });

    _jdoc.ready( function(){
        _jdoc.delegate( 'input.js_bizMultiselectPanel', 'click focus', function( _evt ){
            var _sp = $( this ), _ins;
            if( !JC.BaseMVC.getInstance( _sp, Bizs.MultiselectPanel ) ){
                _ins = new Bizs.MultiselectPanel( _sp );
                _ins._model.panelIns().show( _sp );
            }
        });
    });

    return Bizs.MultiselectPanel;
});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb ) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);
