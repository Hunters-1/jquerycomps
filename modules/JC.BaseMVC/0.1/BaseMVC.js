;(function(define, _win) { 'use strict'; define( [ 'JC.common' ], function(){
    window.BaseMVC = JC.BaseMVC = BaseMVC;
    function BaseMVC( _selector ){
        throw new Error( "JC.BaseMVC is an abstract class, can't initialize!" );

        if( BaseMVC.getInstance( _selector ) ) return BaseMVC.getInstance( _selector );
        BaseMVC.getInstance( _selector, this );

        this._model = new BaseMVC.Model( _selector );
        this._view = new BaseMVC.View( this._model );

        this._init( );
    }
    
    BaseMVC.prototype = {
        _init:
            function(){
                var _p = this;

                $( [ _p._view, _p._model ] ).on('BindEvent', function( _evt, _evtName, _cb ){
                    _p.on( _evtName, _cb );
                });

                $([ _p._view, _p._model ] ).on('TriggerEvent', function( _evt, _evtName ){
                    var _data = JC.f.sliceArgs( arguments ).slice( 2 );
                    _p.trigger( _evtName, _data );
                });

                _p._beforeInit();
                _p._initHanlderEvent();

                _p._model.init();
                _p._view && _p._view.init();

                _p._inited();

                return _p;
            }    
        , _beforeInit:
            function(){
            }
        , _initHanlderEvent:
            function(){
            }
        , _inited:
            function(){
            }
        , selector: function(){ return this._model.selector(); }
        , on: function( _evtName, _cb ){ $(this).on(_evtName, _cb ); return this;}
        , trigger: function( _evtName, _data ){ $(this).trigger( _evtName, _data ); return this;}
    }
    BaseMVC.getInstance =
        function( _selector, _staticClass, _classInstance ){
            typeof _selector == 'string' 
                && !/</.test( _selector ) 
                && ( _selector = $(_selector) )
                ;

            if( !(_selector && _selector.length ) || ( typeof _selector == 'string' ) ) return null;

            _staticClass.Model._instanceName = _staticClass.Model._instanceName || 'CommonIns';

            typeof _classInstance != 'undefined' 
                && _selector.data( _staticClass.Model._instanceName, _classInstance );

            return _selector.data( _staticClass.Model._instanceName);
        };
    BaseMVC.autoInit = true;
    BaseMVC.build =
        function( _outClass, _srcClass ){
            _srcClass = _srcClass || BaseMVC;
            typeof _srcClass == 'string' && ( _srcClass = BaseMVC );

            BaseMVC.buildModel( _outClass );
            BaseMVC.buildView( _outClass );

            BaseMVC.buildClass( _srcClass, _outClass );
            _srcClass.Model && BaseMVC.buildClass( _srcClass.Model, _outClass.Model );
            _srcClass.View && BaseMVC.buildClass( _srcClass.View, _outClass.View );
        };
    BaseMVC.buildClass = 
        function( _inClass, _outClass ){
            if( !( _inClass && _outClass ) ) return;
            var _k
                , _fStr, _tmp
                ;

            if( _outClass ){
                for( _k in _inClass ){ 
                    if( !_outClass[_k] ){
                        //ignore static function
                        if( _inClass[_k].constructor == Function ){
                        }else{//clone static property
                            _outClass[_k] = _inClass[_k];
                        }
                    }
                }

                for( _k in _inClass.prototype ) 
                    !_outClass.prototype[_k] && ( _outClass.prototype[_k] = _inClass.prototype[_k] );
            }
        };
    BaseMVC.buildModel =
        function( _outClass ){
            !_outClass.Model && ( 
                        _outClass.Model = function( _selector ){ this._selector = _selector; }
                        , _outClass.Model._instanceName = 'CommonIns'
                    );
        }
    BaseMVC.buildView =
        function( _outClass ){
            !_outClass.View && ( _outClass.View = function( _model ){ this._model = _model; } );
        }
    BaseMVC.buildModel( BaseMVC );
    BaseMVC.buildView( BaseMVC );
    BaseMVC.Model._instanceName = 'BaseMVCIns';
    JC.f.extendObject( BaseMVC.Model.prototype, {
        init:
            function(){
                return this;
            }
        , on:
            function(){
                $( this ).trigger( 'BindEvent', JC.f.sliceArgs( arguments ) );
                return this;
            }
        , trigger:
            function( _evtName, _args ){
                _args = _args || [];
                _args.unshift( _evtName );
                $( this ).trigger( 'TriggerEvent', _args );
                return this;
            }
        , selector: 
            function( _setter ){ 
                typeof _setter != 'undefined' && ( this._selector = _setter );
                return this._selector; 
            }
        , intProp:
            function( _selector, _key ){
                if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }
                var _r = 0;
                _selector 
                    && _selector.is( '[' + _key + ']' ) 
                    && ( _r = parseInt( _selector.attr( _key ).trim(), 10 ) || _r );
                return _r;
            }
        , floatProp:
            function( _selector, _key ){
                if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }
                var _r = 0;
                _selector 
                    && _selector.is( '[' + _key + ']' ) 
                    && ( _r = parseFloat( _selector.attr( _key ).trim() ) || _r );
                return _r;
            }
        , stringProp:
            function( _selector, _key ){
                if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }
                var _r = ( this.attrProp( _selector, _key ) || '' ).toLowerCase();
                return _r;
            }
        , attrProp:
            function( _selector, _key ){
                if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }
                var _r = '';
                _selector
                    && _selector.is( '[' + _key + ']' ) 
                    && ( _r = _selector.attr( _key ).trim() );
                return _r;
            }
        , boolProp:
            function( _selector, _key, _defalut ){
                if( typeof _key == 'boolean' ){
                    _defalut = _key;
                    _key = _selector;
                    _selector = this.selector();
                }else if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }
                var _r = undefined;
                _selector
                    && _selector.is( '[' + _key + ']' ) 
                    && ( _r = JC.f.parseBool( _selector.attr( _key ).trim() ) );
                return _r;
            }
        , callbackProp:
            function( _selector, _key ){
                if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }
                var _r, _tmp;
                _selector 
                    && _selector.is( '[' + _key + ']' )
                    && ( _tmp = window[ _selector.attr( _key ) ] )
                    && ( _r = _tmp )
                    ;
                return _r;
            }
        , windowProp:
            function(){
                return this.callbackProp.apply( this, JC.f.sliceArgs( arguments ) );
            }
        , selectorProp:
            function( _selector, _key ){
                var _r;
                if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }

                _selector
                    && _selector.is( '[' + _key + ']' ) 
                    && ( _r = JC.f.parentSelector( _selector, _selector.attr( _key ) ) );

                return _r;
            }
        , scriptTplProp:
            function( _selector, _key ){
                var _r = '', _tmp;
                if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }

                _selector
                    && _selector.is( '[' + _key + ']' ) 
                    && ( _tmp = JC.f.parentSelector( _selector, _selector.attr( _key ) ) )
                    && _tmp.length 
                    && ( _r = JC.f.scriptContent( _tmp ) );

                return _r;
            }
        , jsonProp:
            function( _selector, _key ){
                var _r;
                if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }

                _selector
                    && _selector.is( '[' + _key + ']' ) 
                    && ( _r = eval( '(' + _selector.attr( _key ) + ')' ) );

                return _r;
            }
        , is:
            function( _selector, _key ){
                if( typeof _key == 'undefined' ){
                    _key = _selector;
                    _selector = this.selector();
                }else{
                    _selector && ( _selector = $( _selector ) );
                }

                return _selector && _selector.is( _key );
            }
    });
    
    JC.f.extendObject( BaseMVC.View.prototype, {
        init:
            function() {
                return this;
            }
        , selector:
            function(){
                return this._model.selector();
            }
        /**
         * 使用 jquery on 为 controler 绑定事件
         */
        , on:
            function(){
                $( this ).trigger( 'BindEvent', JC.f.sliceArgs( arguments ) );
                return this;
            }
        /**
         * 使用 jquery trigger 触发 controler 绑定事件
         */
        , trigger:
            function( _evtName, _args ){
                _args = _args || [];
                _args.unshift( _evtName );
                $( this ).trigger( 'TriggerEvent', _args );
                return this;
            }
    });

    return JC.BaseMVC;
});}( typeof define === 'function' && define.amd ? define : 
        function ( _name, _require, _cb ) { 
            typeof _name == 'function' && ( _cb = _name );
            typeof _require == 'function' && ( _cb = _require ); 
            _cb && _cb(); 
        }
        , window
    )
);
