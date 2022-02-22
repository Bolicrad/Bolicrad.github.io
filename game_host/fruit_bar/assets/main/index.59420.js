window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  DataStructure: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cc0c3uN89dJcrstgvF6fs3K", "DataStructure");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Combination = exports.Coord = exports.Coordinate = void 0;
    var Enum_1 = require("./Enum");
    var Coordinate = function() {
      function Coordinate(x, y) {
        void 0 === x && (x = 0);
        void 0 === y && (y = 0);
        this.x = x;
        this.y = y;
      }
      Coordinate.prototype.set = function(x, y) {
        if ("number" === typeof x) {
          this.x = x;
          this.y = y;
        } else {
          this.x = x.x;
          this.y = x.y;
        }
      };
      Coordinate.prototype.copy = function() {
        return new Coordinate(this.x, this.y);
      };
      Coordinate.prototype.compare = function(x, y) {
        return "number" === typeof x ? this.x === x && this.y === y : this.x === x.x && this.y === x.y;
      };
      Coordinate.prototype.isAdjacent = function(coord) {
        return this.x === coord.x && (this.y === coord.y + 1 || this.y === coord.y - 1) || this.y === coord.y && (this.x === coord.x + 1 || this.x === coord.x - 1);
      };
      Coordinate.prototype.toString = function() {
        return "(x:" + this.x + ", y:" + this.y + ")";
      };
      return Coordinate;
    }();
    exports.Coordinate = Coordinate;
    function Coord(x, y) {
      void 0 === x && (x = 0);
      void 0 === y && (y = 0);
      return new Coordinate(x, y);
    }
    exports.Coord = Coord;
    var Combination = function() {
      function Combination(coords) {
        this.coords = coords;
        this.updateType();
      }
      Combination.prototype.updateType = function() {
        var up = 0;
        var down = 0;
        var left = 0;
        var right = 0;
        var keyCoord = this.commonCoord ? this.commonCoord : this.coords[0];
        for (var i = 0; i < this.coords.length; i++) {
          if (this.coords[i].compare(keyCoord)) continue;
          this.coords[i].x === keyCoord.x ? this.coords[i].y > keyCoord.y ? up++ : down++ : this.coords[i].x < keyCoord.x ? left++ : right++;
        }
        0 === up && 0 === down ? this.type = Enum_1.CombinationType.Horizontal : 0 === left && 0 === right ? this.type = Enum_1.CombinationType.Vertical : up > 0 && down > 0 && left > 0 && right > 0 ? this.type = Enum_1.CombinationType.Cross : up > 0 && 0 === down && 0 === left && right > 0 || up > 0 && 0 === down && left > 0 && 0 === right || 0 === up && down > 0 && 0 === left && right > 0 || 0 === up && down > 0 && left > 0 && 0 === right ? this.type = Enum_1.CombinationType.LShape : (0 === up && down > 0 && left > 0 && right > 0 || up > 0 && 0 === down && left > 0 && right > 0 || up > 0 && down > 0 && 0 === left && right > 0 || up > 0 && down > 0 && left > 0 && 0 === right) && (this.type = Enum_1.CombinationType.TShape);
      };
      Combination.prototype.include = function(coords) {
        for (var i = 0; i < this.coords.length; i++) for (var j = 0; j < coords.length; j++) if (this.coords[i].compare(coords[j])) return coords[j];
        return null;
      };
      Combination.prototype.merge = function(coords, commonCoord) {
        for (var i = 0; i < coords.length; i++) coords[i].compare(commonCoord) || this.coords.push(coords[i]);
        this.commonCoord = commonCoord;
        this.updateType();
      };
      return Combination;
    }();
    exports.Combination = Combination;
    cc._RF.pop();
  }, {
    "./Enum": "Enum"
  } ],
  Enum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4e63cMeMBDboH8AODFOh+b", "Enum");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CombinationType = exports.MoveDirection = exports.TileEvent = exports.TileType = void 0;
    var TileType;
    (function(TileType) {
      TileType[TileType["Apple"] = 1] = "Apple";
      TileType[TileType["Banana"] = 2] = "Banana";
      TileType[TileType["Berry"] = 3] = "Berry";
      TileType[TileType["Carrot"] = 4] = "Carrot";
      TileType[TileType["Orange"] = 5] = "Orange";
      TileType[TileType["Pear"] = 6] = "Pear";
    })(TileType = exports.TileType || (exports.TileType = {}));
    var TileEvent;
    (function(TileEvent) {
      TileEvent["TouchStart"] = "tile_touchstart";
      TileEvent["TouchEnd"] = "tile_touchend";
      TileEvent["TouchCancel"] = "tile_touchcancel";
    })(TileEvent = exports.TileEvent || (exports.TileEvent = {}));
    var MoveDirection;
    (function(MoveDirection) {
      MoveDirection[MoveDirection["Up"] = 1] = "Up";
      MoveDirection[MoveDirection["Down"] = 2] = "Down";
      MoveDirection[MoveDirection["Left"] = 3] = "Left";
      MoveDirection[MoveDirection["Right"] = 4] = "Right";
    })(MoveDirection = exports.MoveDirection || (exports.MoveDirection = {}));
    var CombinationType;
    (function(CombinationType) {
      CombinationType[CombinationType["Horizontal"] = 1] = "Horizontal";
      CombinationType[CombinationType["Vertical"] = 2] = "Vertical";
      CombinationType[CombinationType["Cross"] = 3] = "Cross";
      CombinationType[CombinationType["TShape"] = 4] = "TShape";
      CombinationType[CombinationType["LShape"] = 5] = "LShape";
    })(CombinationType = exports.CombinationType || (exports.CombinationType = {}));
    cc._RF.pop();
  }, {} ],
  FBONodeComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb9c50Ei9pLZ7VHI48eh1kq", "FBONodeComponent");
    "use strict";
    var UpdateMode = cc.Enum({
      ONCE: 0,
      ALWAYS: 1
    });
    var FBONodeComponent = cc.Class({
      extends: cc.Component,
      properties: {
        preview: {
          default: true,
          editorOnly: true,
          notify: false,
          tooltip: "\u662f\u5426\u5728\u5728\u7f16\u8f91\u5668\u4e2d\u9884\u89c8"
        },
        _flipY: true,
        flipY: {
          get: function get() {
            return this._flipY;
          },
          set: function set(val) {
            this._flipY = val;
            this.node.scaleY *= -1;
          },
          tooltip: "\u662f\u5426\u9700\u8981\u7ffb\u8f6c\u7eb9\u7406"
        },
        group: {
          default: "fbo",
          tooltip: "FBO \u8282\u70b9\u4e13\u7528\u7684\u5206\u7ec4\u540d\u79f0"
        },
        _updateMode: UpdateMode.ALWAYS,
        updateMode: {
          type: UpdateMode,
          get: function get() {
            return this._updateMode;
          },
          set: function set(val) {
            this._updateMode = val;
          },
          tooltip: "\u66f4\u65b0\u6a21\u5f0f\uff0c\u9ed8\u8ba4\u5b9e\u65f6\u66f4\u65b0"
        },
        _backgroundColor: cc.color(0, 0, 0, 0),
        backgroundColor: {
          get: function get() {
            return this._backgroundColor;
          },
          set: function set(value) {
            this._backgroundColor.set(value);
            this._fboCamera.backgroundColor = value;
          },
          tooltip: "\u6444\u50cf\u673a\u7528\u4e8e\u6e05\u9664\u5c4f\u5e55\u7684\u80cc\u666f\u8272"
        }
      },
      _initData: function _initData() {
        this._isPaused = false;
      },
      _initFBORenderTexture: function _initFBORenderTexture() {
        this._renderTexture || (this._renderTexture = new cc.RenderTexture());
      },
      _initFBOSprite: function _initFBOSprite() {
        this._fboSprite = this.node.getComponent(cc.Sprite);
        this._fboSprite || (this._fboSprite = this.node.addComponent(cc.Sprite));
        if (!this._fboSprite.spriteFrame) {
          var fboSpriteFrame = new cc.SpriteFrame();
          this._fboSprite.spriteFrame = fboSpriteFrame;
        }
        this.node.scaleY = this.flipY ? -1 : 1;
      },
      _initFBOCamera: function _initFBOCamera() {
        this._fboCamera = this.node.getComponent(cc.Camera);
        this._fboCamera || (this._fboCamera = this.node.addComponent(cc.Camera));
        this._fboCamera.depth = 0;
        this._fboCamera.clearFlags = cc.Camera.ClearFlags.COLOR;
        this._fboCamera.backgroundColor = this.backgroundColor;
        this._fboCamera.targetTexture = this._renderTexture;
        this._fboCamera.enabled = false;
      },
      onLoad: function onLoad() {
        this.node.group = this.group;
      },
      start: function start() {
        this._initData();
        this._initFBORenderTexture();
        this._initFBOSprite();
        this._initFBOCamera();
        this.updateFBO();
      },
      _updateRenderTextureSize: function _updateRenderTextureSize(width, height) {
        if (!this._renderTexture) return;
        if (window.jsb) {
          this._renderTexture.destroy();
          this._renderTexture = new cc.RenderTexture();
          this._renderTexture.initWithSize(width, height, cc.gfx.RB_FMT_S8);
        } else this._renderTexture.updateSize(width, height);
      },
      update: function update() {
        false;
        if (this._isPaused) return;
        this.updateMode == UpdateMode.ALWAYS && this.updateFBO();
      },
      updateFBO: function updateFBO() {
        false;
        this._fboCamera.enabled = true;
        this._fboCamera.render(this.target);
        this._fboSprite.spriteFrame.setTexture(this._renderTexture);
        this._fboCamera.enabled = false;
      },
      pause: function pause() {
        this._isPaused = true;
      },
      resume: function resume() {
        this._isPaused = false;
      }
    });
    cc._RF.pop();
  }, {} ],
  FBONodeTargetComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ebf13MKw2pNWZFXXVkQ7L4A", "FBONodeTargetComponent");
    "use strict";
    var FBONodeTargetComponent = cc.Class({
      extends: require("./FBONodeComponent.js"),
      editor: false,
      properties: {
        _target: null,
        target: {
          type: cc.Node,
          get: function get() {
            return this._target;
          },
          set: function set(val) {
            this._target = val;
            this.updateTarget();
          },
          tooltip: "FBO \u76ee\u6807\u8282\u70b9"
        },
        _syncAngle: false,
        syncAngle: {
          get: function get() {
            return this._syncAngle;
          },
          set: function set(val) {
            this._syncAngle = val;
          },
          tooltip: "\u662f\u5426\u9700\u8981\u52a8\u6001\u76d1\u6d4b\u76ee\u6807\u65cb\u8f6c\u89d2\u5ea6"
        },
        _syncScale: false,
        syncScale: {
          get: function get() {
            return this._syncScale;
          },
          set: function set(val) {
            this._syncScale = val;
          },
          tooltip: "\u662f\u5426\u9700\u8981\u52a8\u6001\u76d1\u6d4b\u76ee\u6807\u7f29\u653e\u5927\u5c0f"
        },
        _syncSize: false,
        syncSize: {
          get: function get() {
            return this._syncSize;
          },
          set: function set(val) {
            this._syncSize = val;
          },
          tooltip: "\u662f\u5426\u9700\u8981\u52a8\u6001\u76d1\u6d4b\u76ee\u6807\u5927\u5c0f"
        },
        _syncAnchor: false,
        syncAnchor: {
          get: function get() {
            return this._syncAnchor;
          },
          set: function set(val) {
            this._syncAnchor = val;
          },
          tooltip: "\u662f\u5426\u9700\u8981\u52a8\u6001\u76d1\u6d4b\u76ee\u6807\u951a\u70b9"
        },
        _offsetX: 0,
        offsetX: {
          type: cc.Float,
          get: function get() {
            return this._offsetX;
          },
          set: function set(val) {
            this._offsetX = val;
            this.updateTarget();
          },
          tooltip: "FBO \u6e32\u67d3\u533a\u57df X\u8f74\u65b9\u5411\u504f\u79fb\u91cf"
        },
        _offsetY: 0,
        offsetY: {
          type: cc.Float,
          get: function get() {
            return this._offsetY;
          },
          set: function set(val) {
            this._offsetY = val;
            this.updateTarget();
          }
        },
        _inflateW: 0,
        inflateW: {
          type: cc.Float,
          get: function get() {
            return this._inflateW;
          },
          set: function set(val) {
            this._inflateW = val;
            this.updateTarget();
          },
          tooltip: "FBO \u6e32\u67d3\u533a\u57df \u5bbd\u5ea6\u6269\u5c55\u8303\u56f4"
        },
        _inflateH: 0,
        inflateH: {
          type: cc.Float,
          get: function get() {
            return this._inflateH;
          },
          set: function set(val) {
            this._inflateH = val;
            this.updateTarget();
          },
          tooltip: "FBO \u6e32\u67d3\u533a\u57df \u9ad8\u5ea6\u6269\u5c55\u8303\u56f4"
        }
      },
      _initFBORenderTexture: function _initFBORenderTexture() {
        this._super();
        this.target && this._renderTexture.initWithSize(this.target.width + this.inflateW, this.target.height + this.inflateH, cc.gfx.RB_FMT_S8);
      },
      _initFBOCamera: function _initFBOCamera() {
        this._super();
        this._fboCamera.cullingMask = 0;
        this._fboCamera.cullingMask |= ~(1 << this.node.groupIndex);
        this._fboCamera.alignWithScreen = false;
        this.target && (this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2);
      },
      updateFBO: function updateFBO() {
        if (!this.target) return;
        var oldPosition = this.node.position;
        if (this.syncAngle && this._targetAngleOld != this.target.angle) {
          this._targetAngleOld = this.target.angle;
          this.node.angle = this.target.angle = 0;
        }
        if (this.syncScale) {
          this._targetScaleXOld != this.target.scaleX && (this._targetScaleXOld = this.target.scaleX);
          this._targetScaleYOld != this.target.scaleY && (this._targetScaleYOld = this.target.scaleY);
          this.node.scaleX = this.target.scaleX = 1;
          this.node.scaleY = this.target.scaleY = 1;
        }
        if (this.syncAnchor) {
          this._targetAnchorXOld != this.target.anchorX && (this._targetAnchorXOld = this.target.anchorX);
          this._targetAnchorYOld != this.target.anchorY && (this._targetAnchorYOld = this.target.anchorY);
          this.node.anchorX = this.target.anchorX = .5;
          this.node.anchorY = this.target.anchorY = .5;
        }
        if (this.syncSize && (this._targetWidthOld != this.target.width || this._targetHeightOld != this.target.height)) {
          this._targetWidthOld = this.target.width;
          this._targetHeightOld = this.target.height;
          this.node.width = this.target.width + this.inflateW;
          this.node.height = this.target.height + this.inflateH;
          this._updateRenderTextureSize(this.target.width + this.inflateW, this.target.height + this.inflateH);
          if (this._fboCamera) {
            this._fboCamera.targetTexture = this._renderTexture;
            this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
          }
        }
        this.node.position = cc.v3(this.target.position.x - this.offsetX, this.target.position.y - this.offsetY, 1);
        this.target.group = this.group;
        this._super();
        this.target.group = this._targetGroupOld;
        this.syncAngle && (this.node.angle = this.target.angle = this._targetAngleOld);
        if (this.syncAnchor) {
          this.node.anchorX = this.target.anchorX = this._targetAnchorXOld;
          this.node.anchorY = this.target.anchorY = this._targetAnchorYOld;
          this.flipY && (this.node.anchorY = 1 - this.node.anchorY);
        }
        if (this.syncScale) {
          this.node.scaleX = this.target.scaleX = this._targetScaleXOld;
          this.node.scaleY = this.target.scaleY = this._targetScaleYOld;
          this.node.scaleY *= this.flipY ? -1 : 1;
        }
        this.node.position = cc.v3(oldPosition.x, oldPosition.y, 1);
      },
      _resetTarget: function _resetTarget() {
        this.node.group = "default";
        this.node.width = 100;
        this.node.height = 100;
        this._renderTexture && this._renderTexture.initWithSize(this.node.width, this.node.height, cc.gfx.RB_FMT_S8);
        if (this._fboCamera) {
          this._fboCamera.targetTexture = this._renderTexture;
          !this.target || (this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2);
        }
        if (this._fboSprite) {
          var fboSpriteFrame = new cc.SpriteFrame();
          this._fboSprite.spriteFrame = fboSpriteFrame;
        }
      },
      updateTarget: function updateTarget() {
        if (!this.target) {
          this._resetTarget();
          return;
        }
        this.node.width = this.target.width + this.inflateW;
        this.node.height = this.target.height + this.inflateH;
        this._renderTexture && this._renderTexture.initWithSize(this.target.width + this.inflateW, this.target.height + this.inflateH, cc.gfx.RB_FMT_S8);
        if (this._fboCamera) {
          this._fboCamera.targetTexture = this._renderTexture;
          this._fboCamera.orthoSize = (this.target.height + this.inflateH) / 2;
        }
        this._targetGroupOld = this.target.group;
        this._targetAngleOld = 0;
        this._targetScaleXOld = 0;
        this._targetScaleYOld = 0;
        this._targetWidthOld = 0;
        this._targetHeightOld = 0;
        this._targetAnchorXOld = 0;
        this._targetAnchorYOld = 0;
      },
      __preload: function __preload() {
        var Flags;
        false;
      },
      onLoad: function onLoad() {
        this._super();
        this.node.group = "default";
        this.updateTarget();
      }
    });
    cc._RF.pop();
  }, {
    "./FBONodeComponent.js": "FBONodeComponent"
  } ],
  GameConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8a94cVPaxHQYalMmd86SK5", "GameConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConfig = function() {
      function GameConfig() {}
      GameConfig.row = 8;
      GameConfig.col = 8;
      GameConfig.size = 84;
      GameConfig.spacing = 5;
      GameConfig.padding = 5;
      GameConfig.types = [ 1, 2, 3, 4, 5, 6 ];
      return GameConfig;
    }();
    exports.default = GameConfig;
    cc._RF.pop();
  }, {} ],
  GameEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1d9doa69BKprPc+lo+b/h6", "GameEvent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GameEvent = void 0;
    var GameEvent = function() {
      function GameEvent() {}
      GameEvent.on = function(event, callback, object) {
        this.events[event] || (this.events[event] = []);
        this.events[event].push({
          callback: callback,
          object: object
        });
      };
      GameEvent.emit = function(event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        if (!this.events[event]) return;
        for (var i = 0; i < this.events[event].length; i++) this.events[event][i].callback.apply(this.events[event][i].object, args);
      };
      GameEvent.off = function(event, callback, object) {
        if (!this.events[event]) return;
        for (var i = 0; i < this.events[event].length; i++) if (this.events[event][i].callback === callback && (!object || this.events[event][i].object === object)) {
          this.events[event].splice(i, 1);
          i--;
        }
      };
      GameEvent.remove = function(event) {
        this.events[event] && delete this.events[event];
      };
      GameEvent.events = {};
      return GameEvent;
    }();
    exports.GameEvent = GameEvent;
    cc._RF.pop();
  }, {} ],
  GameUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "024380EoPFEV7+GsM+x5FUx", "GameUtil");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../type/Enum");
    var GameConfig_1 = require("../../data/GameConfig");
    var DataStructure_1 = require("../type/DataStructure");
    var GameUtil = function() {
      function GameUtil() {}
      GameUtil.getRandomType = function(exclude) {
        void 0 === exclude && (exclude = []);
        var types = GameConfig_1.default.types.concat();
        for (var i = 0; i < exclude.length; i++) types.splice(types.indexOf(exclude[i]), 1);
        return types[Math.floor(types.length * Math.random())];
      };
      GameUtil.getSlidDirection = function(startPos, endPos) {
        var offsetX = endPos.x - startPos.x;
        var offsetY = endPos.y - startPos.y;
        return Math.abs(offsetX) < Math.abs(offsetY) ? offsetY > 0 ? Enum_1.MoveDirection.Up : Enum_1.MoveDirection.Down : offsetX > 0 ? Enum_1.MoveDirection.Right : Enum_1.MoveDirection.Left;
      };
      GameUtil.getCoordByDirection = function(coord, direction) {
        switch (direction) {
         case Enum_1.MoveDirection.Up:
          return coord.y === GameConfig_1.default.row - 1 ? null : DataStructure_1.Coord(coord.x, coord.y + 1);

         case Enum_1.MoveDirection.Down:
          return 0 === coord.y ? null : DataStructure_1.Coord(coord.x, coord.y - 1);

         case Enum_1.MoveDirection.Left:
          return 0 === coord.x ? null : DataStructure_1.Coord(coord.x - 1, coord.y);

         case Enum_1.MoveDirection.Right:
          return coord.x === GameConfig_1.default.col - 1 ? null : DataStructure_1.Coord(coord.x + 1, coord.y);
        }
      };
      GameUtil.getCombinations = function(typeMap) {
        var combinations = [];
        for (var r = 0; r < GameConfig_1.default.row; r++) {
          var count = 0;
          var type = null;
          for (var c = 0; c < GameConfig_1.default.col; c++) if (0 === c) {
            count = 1;
            type = typeMap[c][r];
          } else if (typeMap[c][r] && typeMap[c][r] === type) {
            count++;
            if (c === GameConfig_1.default.col - 1 && count >= 3) {
              var coords = [];
              for (var i = 0; i < count; i++) coords.push(DataStructure_1.Coord(c - i, r));
              combinations.push(new DataStructure_1.Combination(coords));
            }
          } else {
            if (count >= 3) {
              var coords = [];
              for (var i = 0; i < count; i++) coords.push(DataStructure_1.Coord(c - 1 - i, r));
              combinations.push(new DataStructure_1.Combination(coords));
            }
            count = 1;
            type = typeMap[c][r];
          }
        }
        for (var c = 0; c < GameConfig_1.default.col; c++) {
          var count = 0;
          var type = null;
          for (var r = 0; r < GameConfig_1.default.row; r++) if (0 === r) {
            count = 1;
            type = typeMap[c][r];
          } else if (typeMap[c][r] && typeMap[c][r] === type) {
            count++;
            if (r === GameConfig_1.default.row - 1 && count >= 3) {
              var coords = [];
              for (var i = 0; i < count; i++) coords.push(DataStructure_1.Coord(c, r - i));
              var hasMerge = false;
              for (var i = 0; i < combinations.length; i++) {
                var common = combinations[i].include(coords);
                if (common) {
                  combinations[i].merge(coords, common);
                  hasMerge = true;
                  break;
                }
              }
              hasMerge || combinations.push(new DataStructure_1.Combination(coords));
            }
          } else {
            if (count >= 3) {
              var coords = [];
              for (var i = 0; i < count; i++) coords.push(DataStructure_1.Coord(c, r - 1 - i));
              var hasMerge = false;
              for (var i = 0; i < combinations.length; i++) {
                var common = combinations[i].include(coords);
                if (common) {
                  combinations[i].merge(coords, common);
                  hasMerge = true;
                  break;
                }
              }
              hasMerge || combinations.push(new DataStructure_1.Combination(coords));
            }
            count = 1;
            type = typeMap[c][r];
          }
        }
        return combinations;
      };
      GameUtil.getInitTypeMap = function() {
        var typeMap = [];
        for (var c = 0; c < GameConfig_1.default.col; c++) {
          var colSet = [];
          for (var r = 0; r < GameConfig_1.default.row; r++) {
            var excludeTypes = [];
            var rowType = null;
            c > 1 && typeMap[c - 1][r] === typeMap[c - 2][r] && (rowType = typeMap[c - 1][r]);
            rowType && excludeTypes.push(rowType);
            var colType = null;
            r > 1 && colSet[r - 1] === colSet[r - 2] && (colType = colSet[r - 1]);
            colType && excludeTypes.push(colType);
            colSet.push(GameUtil.getRandomType(excludeTypes));
          }
          typeMap.push(colSet);
        }
        return typeMap;
      };
      GameUtil.hasValidCombo = function(map) {
        for (var r = 0; r < GameConfig_1.default.row; r++) for (var c = 0; c < GameConfig_1.default.col; c++) {
          if (c + 3 <= GameConfig_1.default.col - 1) {
            if (map[c][r] === map[c + 1][r] && map[c][r] === map[c + 3][r]) return true;
            if (map[c][r] === map[c + 2][r] && map[c][r] === map[c + 3][r]) return true;
          }
          if (map[c][r] === map[c + 1][r]) {
            if (r - 1 >= 0 && map[c][r] === map[c + 2][r - 1]) return true;
            if (r + 1 <= GameConfig_1.default.row - 1 && map[c][r] === map[c + 2][r + 1]) return true;
          }
          if (map[c][r] === map[c + 2][r]) {
            if (r - 1 >= 0 && map[c][r] === map[c + 1][r - 1]) return true;
            if (r + 1 <= GameConfig_1.default.row - 1 && map[c][r] === map[c + 1][r + 1]) return true;
          }
          if (r - 1 >= 0 && map[c][r] === map[c + 1][r - 1] && map[c + 1][r - 1] === map[c + 2][r - 1]) return true;
          if (r + 1 <= GameConfig_1.default.row - 1 && map[c][r] === map[c + 1][r + 1] && map[c + 1][r + 1] === map[c + 2][r + 1]) return true;
          if (r + 3 <= GameConfig_1.default.row - 1) {
            if (map[c][r] === map[c][r + 1] && map[c][r] === map[c][r + 3]) return true;
            if (map[c][r] === map[c][r + 2] && map[c][r] === map[c][r + 3]) return true;
          }
          if (map[c][r] === map[c][r + 1]) {
            if (c - 1 >= 0 && map[c][r] === map[c - 1][r + 2]) return true;
            if (c + 1 <= GameConfig_1.default.col - 1 && map[c][r] === map[c + 1][r + 2]) return true;
          }
          if (map[c][r] === map[c][r + 2]) {
            if (c - 1 >= 0 && map[c][r] === map[c - 1][r + 1]) return true;
            if (c + 1 <= GameConfig_1.default.col - 1 && map[c][r] === map[c + 1][r + 1]) return true;
          }
          if (c - 1 >= 0 && map[c][r] === map[c - 1][r + 1] && map[c - 1][r + 1] === map[c - 1][r + 2]) return true;
          if (c + 1 <= GameConfig_1.default.col - 1 && map[c][r] === map[c + 1][r + 1] && map[c + 1][r + 1] === map[c + 1][r + 2]) return true;
        }
        return false;
      };
      GameUtil.fixed = function(n) {
        return Math.round(10 * n) / 10;
      };
      return GameUtil;
    }();
    exports.default = GameUtil;
    cc._RF.pop();
  }, {
    "../../data/GameConfig": "GameConfig",
    "../type/DataStructure": "DataStructure",
    "../type/Enum": "Enum"
  } ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7efc9NGbHhLcLMVa1j+jR14", "Game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MapManager_1 = require("./manager/MapManager");
    var OrientationManager_1 = require("./manager/OrientationManager");
    var TileManager_1 = require("./manager/TileManager");
    var Enum_1 = require("./type/Enum");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.groups = null;
        _this.StartButton = null;
        _this.dir = Enum_1.MoveDirection.Down;
        return _this;
      }
      Game.prototype.start = function() {};
      Game.prototype.loadGame = function() {
        for (var i = 0; i < this.groups.children.length; i++) this.groups.children[i].getComponent("SVGComponent") && this.groups.children[i].getComponent("SVGComponent").drawAll();
        MapManager_1.default.init();
        TileManager_1.default.init();
      };
      Game.prototype.openDeviceOrientation = function() {
        var _this = this;
        if ("function" === typeof DeviceOrientationEvent.requestPermission) {
          console.log("yes");
          DeviceOrientationEvent.requestPermission().then(function(permissionState) {
            console.log(permissionState);
            "granted" === permissionState && window.addEventListener("deviceorientation", OrientationManager_1.default.GetHandler());
            _this.loadGame();
          }).catch(console.error);
        } else {
          console.log("no");
          window.addEventListener("deviceorientation", OrientationManager_1.default.GetHandler());
          this.loadGame();
        }
        this.StartButton.node.active = false;
      };
      Game.prototype.onDestroy = function() {
        window.removeEventListener("deviceorientation", OrientationManager_1.default.GetHandler());
        cc.sys.garbageCollect();
      };
      __decorate([ property(cc.Node) ], Game.prototype, "groups", void 0);
      __decorate([ property(cc.Button) ], Game.prototype, "StartButton", void 0);
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./manager/MapManager": "MapManager",
    "./manager/OrientationManager": "OrientationManager",
    "./manager/TileManager": "TileManager",
    "./type/Enum": "Enum"
  } ],
  MapManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "84e14a/gWtK0I/hoFP17lpg", "MapManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameConfig_1 = require("../../data/GameConfig");
    var MapManager = function() {
      function MapManager() {}
      MapManager.getPos = function(x, y) {
        return "number" === typeof x ? this._posMap[x][y] : this._posMap[x.x][x.y];
      };
      MapManager.init = function() {
        this.generatePosMap();
      };
      MapManager.generatePosMap = function() {
        this._posMap = [];
        this.width = 2 * GameConfig_1.default.padding + GameConfig_1.default.size * GameConfig_1.default.col + GameConfig_1.default.spacing * (GameConfig_1.default.col - 1);
        this.height = 2 * GameConfig_1.default.padding + GameConfig_1.default.size * GameConfig_1.default.row + GameConfig_1.default.spacing * (GameConfig_1.default.row - 1);
        this.beginX = -this.width / 2 + GameConfig_1.default.padding + GameConfig_1.default.size / 2;
        this.beginY = -this.height / 2 + GameConfig_1.default.padding + GameConfig_1.default.size / 2;
        for (var c = 0; c < GameConfig_1.default.col; c++) {
          var colSet = [];
          var x = this.beginX + c * (GameConfig_1.default.size + GameConfig_1.default.spacing);
          for (var r = 0; r < GameConfig_1.default.row; r++) {
            var y = this.beginY + r * (GameConfig_1.default.size + GameConfig_1.default.spacing);
            colSet.push(cc.v2(x, y));
          }
          this._posMap.push(colSet);
        }
      };
      MapManager._posMap = null;
      MapManager.width = null;
      MapManager.height = null;
      MapManager.beginX = null;
      MapManager.beginY = null;
      return MapManager;
    }();
    exports.default = MapManager;
    cc._RF.pop();
  }, {
    "../../data/GameConfig": "GameConfig"
  } ],
  OrientationManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "35c49SMTQVHo4ZJHrJSqJh9", "OrientationManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../type/Enum");
    var GameUtil_1 = require("../util/GameUtil");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var OrientationManager = function(_super) {
      __extends(OrientationManager, _super);
      function OrientationManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.handler = null;
        _this.lastLon = null;
        _this.lastLat = null;
        _this.orientation = Enum_1.MoveDirection.Down;
        return _this;
      }
      OrientationManager_1 = OrientationManager;
      OrientationManager.prototype.onLoad = function() {
        OrientationManager_1.instance = this;
        OrientationManager_1.instance.handler = this.UpdateOrientationData.bind(this);
      };
      OrientationManager.prototype.UpdateOrientationData = function(event) {
        var lon = 0;
        var lat = 0;
        if (cc.sys.isBrowser) {
          if (cc.sys.os == cc.sys.OS_IOS) {
            lon = event.alpha + event.gamma;
            event.beta > 0 && (lat = event.beta - 90);
          } else {
            lon = event.alpha + event.gamma + 30;
            lat = event.gamma > 90 ? 90 - event.beta : event.beta - 90;
          }
          lon %= 360;
          lon < 0 && (lon += 360);
          lon = GameUtil_1.default.fixed(lon);
          lat = GameUtil_1.default.fixed(lat);
          null == this.lastLon && (this.lastLon = lon);
          var deltaLon = lon - this.lastLon;
          deltaLon > 180 && (deltaLon -= 360);
          deltaLon < -180 && (deltaLon += 360);
          this.lastLon = lon;
          null == this.lastLat && (this.lastLat = lat);
          var deltaLat = lat - this.lastLat;
          deltaLat > 180 && (deltaLat -= 360);
          deltaLat < -180 && (deltaLat += 360);
          this.lastLat = lat;
          console.log("lon:" + lon + ",lat:" + lat + ",deltaLon:" + deltaLon + ",deltaLat:" + deltaLat);
        }
      };
      OrientationManager.GetDir = function() {
        return this.instance.orientation;
      };
      OrientationManager.GetHandler = function() {
        return this.instance.handler;
      };
      var OrientationManager_1;
      OrientationManager.instance = null;
      OrientationManager = OrientationManager_1 = __decorate([ ccclass ], OrientationManager);
      return OrientationManager;
    }(cc.Component);
    exports.default = OrientationManager;
    cc._RF.pop();
  }, {
    "../type/Enum": "Enum",
    "../util/GameUtil": "GameUtil"
  } ],
  PoolManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75da6f819hFi5G1isxgp8U7", "PoolManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Tile_1 = require("../component/Tile");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PoolManager = function(_super) {
      __extends(PoolManager, _super);
      function PoolManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tilePrefab = null;
        _this.tilePool = new cc.NodePool(Tile_1.default);
        return _this;
      }
      PoolManager_1 = PoolManager;
      PoolManager.prototype.onLoad = function() {
        PoolManager_1.instance = this;
      };
      PoolManager.get = function() {
        return this.instance.tilePool.size() > 0 ? this.instance.tilePool.get() : cc.instantiate(this.instance.tilePrefab);
      };
      PoolManager.put = function(node) {
        cc.Tween.stopAllByTarget(node);
        this.instance.tilePool.size() < 30 ? this.instance.tilePool.put(node) : node.destroy();
      };
      var PoolManager_1;
      PoolManager.instance = null;
      __decorate([ property(cc.Prefab) ], PoolManager.prototype, "tilePrefab", void 0);
      PoolManager = PoolManager_1 = __decorate([ ccclass ], PoolManager);
      return PoolManager;
    }(cc.Component);
    exports.default = PoolManager;
    cc._RF.pop();
  }, {
    "../component/Tile": "Tile"
  } ],
  ResManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bdc86A0hZBNjYmg3wnxiIhK", "ResManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../type/Enum");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ResManager = function(_super) {
      __extends(ResManager, _super);
      function ResManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Apple = null;
        _this.Banana = null;
        _this.Berry = null;
        _this.Carrot = null;
        _this.Orange = null;
        _this.Pear = null;
        return _this;
      }
      ResManager_1 = ResManager;
      ResManager.prototype.onLoad = function() {
        ResManager_1.instance = this;
      };
      ResManager.getTileSpriteFrame = function(tileType) {
        switch (tileType) {
         case Enum_1.TileType.Apple:
          return this.instance.Apple;

         case Enum_1.TileType.Banana:
          return this.instance.Banana;

         case Enum_1.TileType.Berry:
          return this.instance.Berry;

         case Enum_1.TileType.Carrot:
          return this.instance.Carrot;

         case Enum_1.TileType.Orange:
          return this.instance.Orange;

         case Enum_1.TileType.Pear:
          return this.instance.Pear;
        }
      };
      var ResManager_1;
      ResManager.instance = null;
      __decorate([ property(cc.Node) ], ResManager.prototype, "Apple", void 0);
      __decorate([ property(cc.Node) ], ResManager.prototype, "Banana", void 0);
      __decorate([ property(cc.Node) ], ResManager.prototype, "Berry", void 0);
      __decorate([ property(cc.Node) ], ResManager.prototype, "Carrot", void 0);
      __decorate([ property(cc.Node) ], ResManager.prototype, "Orange", void 0);
      __decorate([ property(cc.Node) ], ResManager.prototype, "Pear", void 0);
      ResManager = ResManager_1 = __decorate([ ccclass ], ResManager);
      return ResManager;
    }(cc.Component);
    exports.default = ResManager;
    cc._RF.pop();
  }, {
    "../type/Enum": "Enum"
  } ],
  SVGComponent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5beff8R+adCiICIJHhKyYOZ", "SVGComponent");
    "use strict";
    var _cc$Class;
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Component = cc.Class((_cc$Class = {
      extends: cc.Component,
      editor: false,
      properties: {
        _svgJSONFile: {
          default: null,
          type: cc.JsonAsset
        },
        svgJSONFile: {
          get: function get() {
            return this._svgJSONFile;
          },
          set: function set(value) {
            this._svgJSONFile = value;
            this.updateSVGObject();
            false;
          },
          type: cc.JsonAsset
        },
        segmentationOn: false,
        _enableTouch: false,
        enableTouch: {
          get: function get() {
            return this._enableTouch;
          },
          set: function set(value) {
            this._enableTouch = value;
          }
        },
        _enablePaintMode: false,
        enablePaintMode: {
          get: function get() {
            return this._enablePaintMode;
          },
          set: function set(value) {
            this._enablePaintMode = value;
          }
        },
        _enableMergeStroke: true,
        enableMergeStroke: {
          get: function get() {
            return this._enableMergeStroke;
          },
          set: function set(value) {
            this._enableMergeStroke = value;
            false;
          }
        },
        _enableFillRuleCheck: true,
        enableFillRuleCheck: {
          get: function get() {
            return this._enableFillRuleCheck;
          },
          set: function set(value) {
            this._enableFillRuleCheck = value;
            false;
          }
        },
        _enableGlobalFillColor: false,
        enableGlobalFillColor: {
          get: function get() {
            return this._enableGlobalFillColor;
          },
          set: function set(value) {
            this._enableGlobalFillColor = value;
            false;
          }
        },
        _globalFillColor: cc.Color.WHITE,
        globalFillColor: {
          get: function get() {
            return this._globalFillColor.clone();
          },
          set: function set(value) {
            if (!this._globalFillColor.equals(value)) {
              this._globalFillColor.set(value);
              false;
            }
          }
        },
        _enableGlobalStrokeColor: false,
        enableGlobalStrokeColor: {
          get: function get() {
            return this._enableGlobalStrokeColor;
          },
          set: function set(value) {
            this._enableGlobalStrokeColor = value;
            false;
          }
        },
        _globalStrokeColor: cc.Color.WHITE,
        globalStrokeColor: {
          get: function get() {
            return this._globalStrokeColor.clone();
          },
          set: function set(value) {
            if (!this._globalStrokeColor.equals(value)) {
              this._globalStrokeColor.set(value);
              false;
            }
          }
        },
        _enableGlobalStrokeWidth: false,
        enableGlobalStrokeWidth: {
          get: function get() {
            return this._enableGlobalStrokeWidth;
          },
          set: function set(value) {
            this._enableGlobalStrokeWidth = value;
            false;
          }
        },
        _globalStrokeWidth: 4,
        globalStrokeWidth: {
          get: function get() {
            return this._globalStrokeWidth;
          },
          set: function set(value) {
            if (this._globalStrokeWidth != value) {
              this._globalStrokeWidth = value;
              false;
            }
          }
        },
        _segments: 10,
        segments: {
          get: function get() {
            return this._segments;
          },
          set: function set(value) {
            this._segments = value;
            this.updateSVGObject();
            false;
          },
          type: cc.Integer
        },
        _flipX: false,
        flipX: {
          get: function get() {
            return this._flipX;
          },
          set: function set(value) {
            this._flipX = value;
            false;
          }
        },
        _flipY: true,
        flipY: {
          get: function get() {
            return this._flipY;
          },
          set: function set(value) {
            this._flipY = value;
            false;
          }
        }
      },
      onLoad: function onLoad() {
        this.graphics = this.node.getComponent(cc.Graphics);
        this.graphics || (this.graphics = this.node.addComponent(cc.Graphics));
        this.resetRender();
        this._commandCount = 0;
        this._strokeCount = 0;
        this._areaCount = 0;
      },
      start: function start() {
        this.updateSVGObject();
        false;
        this.enableTouch && this.node.on(cc.Node.EventType.TOUCH_END, this._touchEndCallback, this);
      },
      onDestroy: function onDestroy() {
        this.resetRender();
        this.node.off(cc.Node.EventType.TOUCH_END);
      },
      loadSVGJson: function loadSVGJson(svgJSONFile, configuration, callback) {
        var lastUpdate = performance.now();
        var self = this;
        cc.resources.load(svgJSONFile, function(err, jsonAsset) {
          if (err) {
            cc.log("err: " + err);
            callback && callback(err);
          } else {
            lastUpdate = performance.now();
            self.svgJSONFile = jsonAsset;
            callback && callback(err, svgJSONFile);
          }
        });
      },
      exportSVGJson: function exportSVGJson(filename) {
        if (!this._svgObject) return;
        download(JSON.stringify(this._svgObject), filename, "application/json");
      },
      getSVGObject: function getSVGObject() {
        return this._svgObject;
      },
      getCommandIndex: function getCommandIndex() {
        return this._commandIndex;
      },
      getCommandCount: function getCommandCount() {
        return this._commandCount;
      },
      getCommandObject: function getCommandObject() {
        return this._svgCommandObject;
      },
      getStrokeIndex: function getStrokeIndex() {
        return this._strokeIndex;
      },
      getStrokeCount: function getStrokeCount() {
        return this._strokeCount;
      },
      getStrokeObject: function getStrokeObject() {
        return this._svgStrokeObject;
      },
      getAreaIndex: function getAreaIndex() {
        return this._areaIndex;
      },
      getAreaCount: function getAreaCount() {
        return this._areaCount;
      },
      getAreaObject: function getAreaObject() {
        return this._svgAreaObject;
      },
      isOneCommandFinished: function isOneCommandFinished() {
        return this._isOneCommandFinished;
      },
      isAllCommandFinished: function isAllCommandFinished() {
        return this._isAllCommandFinished;
      },
      isOneAreaFinished: function isOneAreaFinished() {
        return this._isOneAreaFinished;
      }
    }, _cc$Class["isAllCommandFinished"] = function isAllCommandFinished() {
      return this._isAllAreaFinished;
    }, _cc$Class.resetRender = function resetRender() {
      this.graphics.clear();
      this._commandIndex = 0;
      this._areaIndex = 0;
      this._strokeIndex = 0;
      this._isOneCommandFinished = true;
      this._isAllCommandFinished = false;
      this._isOneAreaFinished = true;
      this._isAllAreaFinished = false;
    }, _cc$Class.reset = function reset() {
      this.resetRender();
      this._commandCount = 0;
      this._strokeCount = 0;
      this._areaCount = 0;
      this.offset = null;
      this._svgCommandObject = null;
      this._svgAreaObject = null;
      this._svgStrokeObject = null;
      this._svgObject = null;
    }, _cc$Class.redrawAll = function redrawAll() {
      this.resetRender();
      this.updateConfiguration();
      this.drawAll();
    }, _cc$Class.drawAll = function drawAll() {
      while (this.draw()) ;
    }, _cc$Class.updateConfiguration = function updateConfiguration() {
      this.configuration = {
        segmentationOn: this.segmentationOn,
        segments: this.segments,
        flipX: null !== this.flipX && this.flipX,
        flipY: null !== this.flipY && this.flipY,
        offset: this.offset ? this.offset : cc.v2(0, 0),
        enableGlobalStrokeWidth: this.enableGlobalStrokeWidth,
        globalStrokeWidth: this.globalStrokeWidth,
        enableGlobalStrokeColor: this.enableGlobalStrokeColor,
        globalStrokeColor: this.globalStrokeColor,
        enableGlobalFillColor: this.enableGlobalFillColor,
        globalFillColor: this.globalFillColor,
        enableFillRuleCheck: this.enableFillRuleCheck,
        enablePaintMode: null !== this.enablePaintMode && this.enablePaintMode,
        enableMergeStroke: null !== this.enableMergeStroke && this.enableMergeStroke
      };
    }, _cc$Class.updateSVGObject = function updateSVGObject() {
      this.reset();
      this.updateConfiguration();
      if (!!!this.svgJSONFile) return;
      this._svgObject = ssr.SVG.Parser.parseJSON(this.svgJSONFile.json, this.configuration);
      this._updateContentSize();
      this._commandCount = this._svgObject.pathCount;
    }, _cc$Class.drawCommand = function drawCommand(commandIndex) {
      this._commandIndex = commandIndex;
      if (!this._svgObject.commandArray[this._commandIndex - 1]) return false;
      this._svgCommandObject = this._svgObject.commandArray[this._commandIndex - 1];
      this.updateRenderProperty();
      for (var i = 0; i < this._svgCommandObject.areaArray.length; i++) {
        var area = this._svgCommandObject.areaArray[i];
        for (var j = 0; j < area.strokeArray.length; j++) {
          var stroke = area.strokeArray[j];
          ssr.SVG.Util.Render.draw(this.graphics, stroke, this.configuration, !!this._svgCommandObject.areaTess2);
        }
      }
      this.graphics.fillColor.a > 0 && !this.enablePaintMode && (this._svgCommandObject.areaTess2 ? ssr.SVG.Util.Render.fillTess2(this.graphics, this._svgCommandObject.areaTess2, this.configuration) : this.graphics.fill());
    }, _cc$Class.drawArea = function drawArea(commandIndex, areaIndex) {
      this._commandIndex = commandIndex;
      this._svgCommandObject = this._svgObject.commandArray[this._commandIndex - 1];
      if (!this._svgCommandObject) return false;
      this.updateRenderProperty();
      this._areaIndex = areaIndex;
      this._svgAreaObject = this._svgCommandObject.areaArray[this._areaIndex - 1];
      if (!this._svgAreaObject) return false;
      for (var i = 0; i < this._svgAreaObject.strokeArray.length; i++) {
        var stroke = this._svgAreaObject.strokeArray[i];
        ssr.SVG.Util.Render.draw(this.graphics, stroke, this.configuration, !!this._svgCommandObject.areaTess2);
      }
      this._areaIndex == this._svgCommandObject.areaCount && this.graphics.fillColor.a > 0 && !this.enablePaintMode && (this._svgCommandObject.areaTess2 ? ssr.SVG.Util.Render.fillTess2(this.graphics, this._svgCommandObject.areaTess2, this.configuration) : this.graphics.fill());
    }, _cc$Class.draw = function draw() {
      if (!this._svgJSONFile) return;
      if (0 == this._commandIndex) {
        this._commandIndex += 1;
        this._svgCommandObject = this._svgObject.commandArray[this._commandIndex - 1];
        this.updateRenderProperty();
        this._areaCount = this._svgCommandObject.areaCount;
      }
      if (0 == this._areaIndex) {
        this._areaIndex += 1;
        this._svgAreaObject = this._svgCommandObject.areaArray[this._areaIndex - 1];
        this._strokeCount = this._svgAreaObject.strokeCount;
      }
      this._strokeIndex += 1;
      if (this._strokeIndex > this._strokeCount) {
        this._areaIndex += 1;
        if (this._areaIndex > this._areaCount) {
          this.graphics.fillColor.a > 0 && !this.enablePaintMode && (this._svgCommandObject.areaTess2 ? ssr.SVG.Util.Render.fillTess2(this.graphics, this._svgCommandObject.areaTess2, this.configuration) : this.graphics.fill());
          this._commandIndex += 1;
          if (this._commandIndex > this._commandCount) return false;
          this._svgCommandObject = this._svgObject.commandArray[this._commandIndex - 1];
          this.updateRenderProperty();
          this._areaCount = this._svgCommandObject.areaCount;
          this._areaIndex = 1;
          this._svgAreaObject = this._svgCommandObject.areaArray[this._areaIndex - 1];
          this._strokeCount = this._svgAreaObject.strokeCount;
          this._strokeIndex = 1;
          this._svgStrokeObject = this._svgAreaObject.strokeArray[this._strokeIndex - 1];
        } else {
          this._svgAreaObject = this._svgCommandObject.areaArray[this._areaIndex - 1];
          this._strokeCount = this._svgAreaObject.strokeCount;
          this._strokeIndex = 1;
          this._svgStrokeObject = this._svgAreaObject.strokeArray[this._strokeIndex - 1];
        }
      } else this._svgStrokeObject = this._svgAreaObject.strokeArray[this._strokeIndex - 1];
      ssr.SVG.Util.Render.draw(this.graphics, this._svgStrokeObject, this.configuration, !!this._svgCommandObject.areaTess2);
      this._svgStrokeObject.isFinished = true;
      if (this._strokeIndex == this._svgAreaObject.strokeCount) {
        this._svgAreaObject.isFinished = true;
        this._areaIndex == this._svgCommandObject.areaCount && (this._svgCommandObject.isFinished = true);
      }
      return true;
    }, _cc$Class.updateRenderProperty = function updateRenderProperty() {
      this.graphics.lineWidth = 0;
      this.enableGlobalStrokeWidth ? this.graphics.lineWidth = this.globalStrokeWidth : null != this._svgCommandObject.strokeWidth && (this.graphics.lineWidth = this._svgCommandObject.strokeWidth);
      this.graphics.strokeColor = cc.color(0, 0, 0, 0);
      this.enableGlobalStrokeColor ? this.graphics.strokeColor = this.globalStrokeColor : null != this._svgCommandObject.strokeColor && (this.graphics.strokeColor = this._svgCommandObject.strokeColor);
      this.graphics.fillColor = cc.color(0, 0, 0, 0);
      if (this.enableGlobalFillColor) this.graphics.fillColor = this.globalFillColor; else {
        if (null != this._svgCommandObject.fillColor) {
          this.graphics.fillColor = this._svgCommandObject.fillColor;
          "#00000000" == this._svgCommandObject.fillColor && (this.graphics.fillColor.a = 0);
        }
        null != this._svgCommandObject.opacity && (this.graphics.fillColor.a = this._svgCommandObject.opacity);
      }
    }, _cc$Class._updateContentSize = function _updateContentSize() {
      var l = 99999, r = 0, t = 0, b = 99999;
      for (var i = 0; i < this._svgObject.commandArray.length; i++) {
        var command = this._svgObject.commandArray[i];
        for (var j = 0; j < command.areaArray.length; j++) {
          var area = command.areaArray[j];
          for (var z = 0; z < area.strokeArray.length; z++) {
            var stroke = area.strokeArray[z].dataArray;
            for (var p = 0; p < stroke.length; p++) {
              var pt = stroke[p];
              pt.x < l && (l = pt.x);
              pt.x > r && (r = pt.x);
              pt.y < b && (b = pt.y);
              pt.y > t && (t = pt.y);
            }
          }
        }
      }
      this.node.width = r - l;
      this.node.height = t - b;
      this.offset = this.configuration.offset = cc.v2(l + this.node.width / 2, b + this.node.height / 2);
    }, _cc$Class.getTouchedAreaArray = function getTouchedAreaArray(pos) {
      pos = this.node.convertToNodeSpaceAR(pos);
      var touchedAreaArray = [];
      for (var i = 0; i < this._svgObject.commandArray.length; i++) {
        var command = this._svgObject.commandArray[i];
        if (command.areaTess2) {
          var areaTess2 = this._pointTransformations(command.areaTess2);
          for (var z = 0; z < areaTess2.length; z += 3) if (ssr.SVG.Util.Common.isPointInPolygon(pos, [ areaTess2[z], areaTess2[z + 1], areaTess2[z + 2] ])) {
            this.graphics.fillColor = command.fillColor;
            for (var k = 0; k < command.areaArray.length; k++) touchedAreaArray.push(command.areaArray[k]);
            break;
          }
        } else for (var j = 0; j < command.areaArray.length; j++) {
          var area = command.areaArray[j];
          ssr.SVG.Util.Common.isPointInPolygon(pos, this._pointTransformations(area.polygonArray)) && touchedAreaArray.push(area);
        }
      }
      return touchedAreaArray;
    }, _cc$Class.fillTouchedArea = function fillTouchedArea(pos) {
      pos = this.node.convertToNodeSpaceAR(pos);
      for (var i = 0; i < this._svgObject.commandArray.length; i++) {
        var command = this._svgObject.commandArray[i];
        if (command.areaTess2) {
          var areaTess2 = this._pointTransformations(command.areaTess2);
          for (var z = 0; z < areaTess2.length; z += 3) if (ssr.SVG.Util.Common.isPointInPolygon(pos, [ areaTess2[z], areaTess2[z + 1], areaTess2[z + 2] ])) {
            this.graphics.fillColor = command.fillColor;
            for (var k = 0; k < command.areaArray.length; k++) command.areaArray[k].painted = true;
            ssr.SVG.Util.Render.paintTess2(this.graphics, command.areaTess2, this.configuration);
            break;
          }
        } else for (var j = 0; j < command.areaArray.length; j++) {
          var area = command.areaArray[j];
          if (!area.isPainted && ssr.SVG.Util.Common.isPointInPolygon(pos, this._pointTransformations(area.polygonArray))) {
            this.graphics.fillColor = command.fillColor;
            for (var k = 0; k < area.strokeArray.length; k++) {
              area.isPainted = true;
              ssr.SVG.Util.Render.paint(this.graphics, area.strokeArray[k], this.configuration);
            }
          }
        }
      }
    }, _cc$Class._touchEndCallback = function _touchEndCallback(event) {
      var touches = event.getTouches();
      var touchLoc = touches[0].getLocation();
      this.fillTouchedArea(touchLoc);
    }, _cc$Class._pointTransformations = function _pointTransformations(pointArray) {
      var flipX = null !== this.configuration.flipX && this.configuration.flipX;
      var flipY = null !== this.configuration.flipY && this.configuration.flipY;
      var offset = this.configuration.offset || cc.v2(0, 0);
      var resultArray = new Array();
      for (var i = 0; i < pointArray.length; i++) resultArray.push({
        x: flipX ? -pointArray[i].x + offset.x : pointArray[i].x - offset.x,
        y: flipY ? -pointArray[i].y + offset.y : pointArray[i].y - offset.y
      });
      return resultArray;
    }, _cc$Class));
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGConst: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed6e11lmHlOdo7X9grVTEo1", "SVGConst");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Const = {
      PATH: 1,
      ELLIPSE: 2,
      POLYLINE: 3,
      POLYGON: 4,
      LINE: 5,
      CIRCLE: 6,
      RECT: 7,
      TEXT: 8,
      PATH_END: 101,
      PATH_MOVE: 102,
      PATH_LINE: 103,
      PATH_CURVE_C: 104,
      PATH_CURVE_S: 105,
      PATH_CURVE_Q: 106,
      PATH_CURVE_T: 107,
      PATH_CURVE_A: 108,
      RENDER_MOVE: 1001,
      RENDER_END: 1002,
      RENDER_LINE: 1003,
      RENDER_POLYLINE: 1004,
      RENDER_CLOSE: 1005
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGDataArea: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3d173K52URLDYpfRSDWZy9w", "SVGDataArea");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Data.Area = function(strokeArray) {
      this.strokeArray = strokeArray;
      this.strokeCount = strokeArray.length;
      this.polygonArray = [];
      this.isFinished = false;
      this.isPainted = false;
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGDataCommand: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a595Sn+pZHD6ZUJjzid5c8", "SVGDataCommand");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Data.Command = function() {
      this.type = 0;
      this.fillColor = null;
      this.strokeColor = null;
      this.strokeWidth = null;
      this.areaArray = [];
      this.areaCount = 0;
      this.strokeCount = 0;
      this.params = null;
      this.isFinished = false;
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGDataRoot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6a4eGIA/VDnYddBAvCR93y", "SVGDataRoot");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Data.Root = function() {
      this.width = 0;
      this.height = 0;
      this.x = 0;
      this.y = 0;
      this.viewBox = cc.rect();
      this.version = "?.?";
      this.commandArray = [];
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGDataStroke: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "855a3LF4VpB467VCgS2leUj", "SVGDataStroke");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Data.Stroke = function(commandType, renderType, instrunction, params, dataArray) {
      this.commandType = commandType;
      this.renderType = renderType;
      this.dataArray = dataArray || [];
      this.instrunction = instrunction;
      this.params = params || {};
      this.isFinished = false;
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGNamespace: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8b20dwlyVKrpLGYHwrowWS", "SVGNamespace");
    "use strict";
    var ssr = ssr || {};
    ssr.SVG = ssr.SVG || {};
    ssr.SVG.Component = ssr.SVG.Component || {};
    ssr.SVG.Const = ssr.SVG.Const || {};
    ssr.SVG.Data = ssr.SVG.Data || {};
    ssr.SVG.Data.Root = ssr.SVG.Data.Root || {};
    ssr.SVG.Data.Command = ssr.SVG.Data.Command || {};
    ssr.SVG.Data.Stroke = ssr.SVG.Data.Stroke || {};
    ssr.SVG.Parser = ssr.SVG.Parser || {};
    ssr.SVG.Util = ssr.SVG.Util || {};
    ssr.SVG.Util.Path = ssr.SVG.Util.Path || {};
    ssr.SVG.Util.Render = ssr.SVG.Util.Render || {};
    ssr.SVG.Util.Polyline = ssr.SVG.Util.Polyline || {};
    ssr.SVG.Util.Common = ssr.SVG.Util.Render || {};
    module.exports = ssr;
    cc._RF.pop();
  }, {} ],
  SVGParser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "761a7pPsqZIs4SSlvLafOZf", "SVGParser");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Parser = function() {};
    ssr.SVG.Parser.parsePath = function(command, configuration) {
      var pathArray = command.params.replace(/\s*([poiuytrwqasdfghjklmnbvcxzPOIUYTREWQASDFGHJKLMNBVCXZ])\s*/g, "\n$1").replace(/,/g, " ").replace(/-/g, " -").replace(/ +/g, " ").replace(/e /g, "e").split("\n");
      var areaArray = [];
      var strokeArray = [];
      var areaStrokeArray = [];
      var lastM = 1;
      var closePathIndexArray = [];
      for (var _i = 1; _i < pathArray.length; _i++) {
        var instruction = pathArray[_i];
        var cmd = instruction.substr(0, 1);
        var terms = instruction.length > 1 ? instruction.substr(1).trim().split(" ") : "";
        if ("m" == cmd || "M" == cmd) {
          var preCount = strokeArray.length;
          ssr.SVG.Util.Path.M(_i, lastM, cmd, terms, configuration, strokeArray);
          lastM = strokeArray.length - (strokeArray.length - preCount - 1);
          _i > 1 && closePathIndexArray.push(lastM - 1);
        } else if ("l" == cmd || "L" == cmd) ssr.SVG.Util.Path.L(_i, cmd, terms, configuration, strokeArray); else if ("h" == cmd || "H" == cmd) ssr.SVG.Util.Path.H(_i, cmd, terms, configuration, strokeArray); else if ("v" == cmd || "V" == cmd) ssr.SVG.Util.Path.V(_i, cmd, terms, configuration, strokeArray); else if ("c" == cmd || "C" == cmd) ssr.SVG.Util.Path.C(_i, cmd, terms, configuration, strokeArray); else if ("s" == cmd || "S" == cmd) ssr.SVG.Util.Path.S(_i, cmd, terms, configuration, strokeArray); else if ("q" == cmd || "Q" == cmd) ssr.SVG.Util.Path.Q(_i, cmd, terms, configuration, strokeArray); else if ("t" == cmd || "T" == cmd) ssr.SVG.Util.Path.T(_i, cmd, terms, configuration, strokeArray); else if ("a" == cmd || "A" == cmd) ssr.SVG.Util.Path.A(_i, cmd, terms, configuration, strokeArray); else if ("z" == cmd || "Z" == cmd) {
          ssr.SVG.Util.Path.Z(_i, lastM, cmd, terms, configuration, strokeArray);
          command.fillColor || (command.fillColor = cc.color(0, 0, 0, 255));
        }
      }
      ssr.SVG.Util.Path.Last(lastM, configuration, strokeArray);
      closePathIndexArray.push(strokeArray.length);
      command.closePathIndexArray = closePathIndexArray;
      var fromIndex = 0;
      var toIndex = 0;
      for (var i = 0; i < closePathIndexArray.length; i++) {
        var _areaStrokeArray = [];
        toIndex = closePathIndexArray[i];
        for (var j = fromIndex; j < toIndex; j++) {
          var stroke = strokeArray[j];
          _areaStrokeArray.push(stroke);
        }
        var areaObject = new ssr.SVG.Data.Area(_areaStrokeArray);
        command.areaArray.push(areaObject);
        command.areaCount += 1;
        command.strokeCount += _areaStrokeArray.length;
        areaObject.polygonArray = ssr.SVG.Util.Path.FlattenStrokeArray(_areaStrokeArray, configuration);
        fromIndex = toIndex;
      }
      ssr.SVG.Parser.checkFillRuleForCommand(command, configuration, strokeArray);
    };
    ssr.SVG.Parser.checkFillRuleForCommand = function(svgCommandObject, configuration, strokeArray) {
      if (configuration.enableFillRuleCheck) {
        if (svgCommandObject.areaCount > 1) {
          svgCommandObject.enableFillRuleCheck = true;
          svgCommandObject.areaTess2 = ssr.SVG.Util.Path.Tessellate(strokeArray, svgCommandObject.fillRule);
        }
      } else svgCommandObject.areaCount > 1 && cc.warn(cc.js.formatStr("multi-strokes found: %s, consider enable fill rule check: %s", svgCommandObject.areaCount, svgCommandObject.params));
    };
    ssr.SVG.Parser.parseLine = function(term, configuration) {
      var strokeArray = [];
      ssr.SVG.Util.Path.Line(term, configuration, strokeArray);
      return strokeArray;
    };
    ssr.SVG.Parser.parseEllipse = function(term, configuration) {
      var strokeArray = [];
      ssr.SVG.Util.Path.Ellipse(term, configuration, strokeArray);
      return strokeArray;
    };
    ssr.SVG.Parser.parseCircle = function(term, configuration) {
      var strokeArray = [];
      ssr.SVG.Util.Path.Circle(term, configuration, strokeArray);
      return strokeArray;
    };
    ssr.SVG.Parser.parseRect = function(term, configuration) {
      var strokeArray = [];
      ssr.SVG.Util.Path.Rect(term, configuration, strokeArray);
      return strokeArray;
    };
    ssr.SVG.Parser.parsePolyline = function(term, configuration) {
      var terms = term.replace(/\s*([poiuytrwqasdfghjklmnbvcxzPOIUYTREWQASDFGHJKLMNBVCXZ])\s*/g, "\n$1").replace(/,/g, " ").replace(/-/g, " -").replace(/ +/g, " ").replace(/e /g, "e").split("\n");
      var strokeArray = [];
      ssr.SVG.Util.Path.Polyline(terms[0], configuration, strokeArray);
      return strokeArray;
    };
    ssr.SVG.Parser.parsePolygon = function(term, configuration) {
      var terms = term.replace(/\s*([poiuytrwqasdfghjklmnbvcxzPOIUYTREWQASDFGHJKLMNBVCXZ])\s*/g, "\n$1").replace(/,/g, " ").replace(/-/g, " -").replace(/ +/g, " ").replace(/e /g, "e").split("\n");
      var strokeArray = [];
      ssr.SVG.Util.Path.Polygon(terms[0], configuration, strokeArray);
      return strokeArray;
    };
    ssr.SVG.Parser.parseCommand = function(root, target, style, commandArray) {
      if (root) {
        root instanceof Array || (root = [ root ]);
        for (var i = 0; i < root.length; i++) {
          var element = root[i];
          if (element["fill"]) {
            style["fillColor"] = ssr.SVG.Util.Common.parseColor(element["fill"]);
            "transparent" == element["fill"] && (style["opacity"] = 0);
          }
          element["stroke"] && (style["strokeColor"] = ssr.SVG.Util.Common.parseColor(element["stroke"]));
          element["stroke-width"] && (style["strokeWidth"] = parseFloat(element["stroke-width"]));
          element["fill-opacity"] && (style["opacity"] = 255 * parseFloat(element["fill-opacity"]));
          element["fill-rule"] && (style["fillRule"] = element["fill-rule"]);
          if (element["style"]) {
            var styleOutput = ssr.SVG.Util.Common.parseStyleProperty(element["style"]);
            styleOutput["fillColor"] && (style.fillColor = styleOutput["fillColor"]);
            styleOutput["strokeColor"] && (style.strokeColor = styleOutput["strokeColor"]);
            styleOutput["strokeWidth"] && (style.strokeWidth = styleOutput["strokeWidth"]);
            styleOutput["fillRule"] && (style.fillRule = styleOutput["fillRule"]);
          }
          if (element[target]) {
            element[target] instanceof Array || (element[target] = [ element[target] ]);
            for (var j = 0; j < element[target].length; j++) {
              var data = element[target][j];
              var command = new ssr.SVG.Data.Command();
              if (data["fill"]) {
                command.fillColor = ssr.SVG.Util.Common.parseColor(data["fill"]);
                "transparent" != data["fill"] && "none" != data["fill"] || (command.opacity = 0);
              }
              data["stroke"] && (command.strokeColor = ssr.SVG.Util.Common.parseColor(data["stroke"]));
              data["stroke-width"] && (command.strokeWidth = parseFloat(data["stroke-width"]));
              data["fill-opacity"] && (command.opacity = 255 * parseFloat(data["fill-opacity"]));
              data["fill-rule"] && (command.fillRule = data["fill-rule"]);
              if (data["style"]) {
                var _styleOutput = ssr.SVG.Util.Common.parseStyleProperty(data["style"]);
                _styleOutput["fillColor"] && (style.fillColor = command.fillColor = _styleOutput["fillColor"]);
                _styleOutput["strokeColor"] && (style.strokeColor = command.strokeColor = _styleOutput["strokeColor"]);
                _styleOutput["strokeWidth"] && (style.strokeWidth = command.strokeWidth = _styleOutput["strokeWidth"]);
                _styleOutput["opacity"] && (style.opacity = command.opacity = _styleOutput["opacity"]);
                _styleOutput["fillRule"] && (style.fillRule = command.fillRule = _styleOutput["fillRule"]);
              }
              command.fillColor || command.strokeColor || command.strokeWidth || !style["fillColor"] || (command.fillColor = style["fillColor"]);
              !command.strokeColor && style["strokeColor"] && (command.strokeColor = style["strokeColor"]);
              !command.strokeWidth && style["strokeWidth"] && (command.strokeWidth = style["strokeWidth"]);
              !command.opacity && style["opacity"] && (command.opacity = style["opacity"]);
              !command.strokeWidth && command.strokeColor && (command.strokeWidth = 1);
              !command.fillRule && style["fillRule"] && (command.fillRule = style["fillRule"]);
              if ("path" == target) {
                command.params = data["d"];
                command.type = ssr.SVG.Const.PATH;
              } else if ("ellipse" == target) {
                command.params = {
                  cx: parseFloat(data["cx"]) || 0,
                  cy: parseFloat(data["cy"]) || 0,
                  rx: parseFloat(data["rx"]),
                  ry: parseFloat(data["ry"])
                };
                command.type = ssr.SVG.Const.ELLIPSE;
              } else if ("rect" == target) {
                command.params = {
                  x: parseFloat(data["x"] || 0),
                  y: parseFloat(data["y"] || 0),
                  width: parseFloat(data["width"]),
                  height: parseFloat(data["height"])
                };
                command.type = ssr.SVG.Const.RECT;
              } else if ("circle" == target) {
                command.params = {
                  cx: parseFloat(data["cx"] || 0),
                  cy: parseFloat(data["cy"] || 0),
                  r: parseFloat(data["r"])
                };
                command.type = ssr.SVG.Const.CIRCLE;
              } else if ("line" == target) {
                command.params = {
                  x1: parseFloat(data["x1"] || 0),
                  y1: parseFloat(data["y1"] || 0),
                  x2: parseFloat(data["x2"] || 0),
                  y2: parseFloat(data["y2"] || 0)
                };
                command.type = ssr.SVG.Const.LINE;
              } else if ("polygon" == target) {
                command.params = data["points"];
                command.type = ssr.SVG.Const.POLYGON;
              } else if ("polyline" == target) {
                command.params = data["points"];
                command.type = ssr.SVG.Const.POLYLINE;
              } else cc.log("Unknown svg shape type: " + target);
              commandArray.push(command);
            }
          }
        }
      }
    };
    ssr.SVG.Parser.recursiveG = function(root, target, style, commandArray) {
      ssr.SVG.Parser.parseCommand(root, target, style, commandArray);
      if (root["g"]) if (root["g"] instanceof Array) for (var i = 0; i < root["g"].length; i++) ssr.SVG.Parser.recursiveG(root["g"][i], target, {}, commandArray); else ssr.SVG.Parser.recursiveG(root["g"], target, style, commandArray);
    };
    ssr.SVG.Parser.parseJSON = function(json, configuration) {
      configuration["segments"] = configuration["segments"] || 10;
      var svgRoot = new ssr.SVG.Data.Root();
      json["svg"]["width"] && (svgRoot.widith = parseFloat(json["svg"]["width"].replace("px", "")));
      json["svg"]["height"] && (svgRoot.height = parseFloat(json["svg"]["height"].replace("px", "")));
      json["svg"]["x"] && (svgRoot.x = parseFloat(json["svg"]["x"].replace("px", "")));
      json["svg"]["y"] && (svgRoot.y = parseFloat(json["svg"]["y"].replace("px", "")));
      json["svg"]["version"] && (svgRoot.version = json["svg"]["version"]);
      if (json["svg"]["viewBox"]) {
        var viewBox = json["svg"]["viewBox"];
        viewBox = viewBox.replace(/,/g, " ").replace(/ +/g, " ").split(" ");
        if (4 == viewBox.length) {
          svgRoot.viewBox.x = parseFloat(viewBox[0]);
          svgRoot.viewBox.y = parseFloat(viewBox[1]);
          svgRoot.viewBox.width = parseFloat(viewBox[2]);
          svgRoot.viewBox.height = parseFloat(viewBox[3]);
        }
      }
      var root = json["svg"];
      ssr.SVG.Parser.recursiveG(root, "ellipse", {}, svgRoot.commandArray);
      ssr.SVG.Parser.recursiveG(root, "line", {}, svgRoot.commandArray);
      ssr.SVG.Parser.recursiveG(root, "rect", {}, svgRoot.commandArray);
      ssr.SVG.Parser.recursiveG(root, "circle", {}, svgRoot.commandArray);
      ssr.SVG.Parser.recursiveG(root, "polyline", {}, svgRoot.commandArray);
      ssr.SVG.Parser.recursiveG(root, "polygon", {}, svgRoot.commandArray);
      ssr.SVG.Parser.recursiveG(root, "path", {}, svgRoot.commandArray);
      for (var i = 0; i < svgRoot.commandArray.length; i++) {
        var command = svgRoot.commandArray[i];
        if (command.type == ssr.SVG.Const.PATH) ssr.SVG.Parser.parsePath(command, configuration); else if (command.type == ssr.SVG.Const.LINE) {
          var areaStrokeArray = ssr.SVG.Parser.parseLine(command.params, configuration);
          var areaObject = new ssr.SVG.Data.Area(areaStrokeArray);
          command.areaArray.push(areaObject);
          command.areaCount += 1;
          command.strokeCount += areaStrokeArray.length;
          areaObject.polygonArray = ssr.SVG.Util.Path.FlattenStrokeArray(areaStrokeArray, configuration);
        } else if (command.type == ssr.SVG.Const.POLYLINE) {
          var _areaStrokeArray2 = ssr.SVG.Parser.parsePolyline(command.params, configuration);
          var _areaObject = new ssr.SVG.Data.Area(_areaStrokeArray2);
          command.areaArray.push(_areaObject);
          command.areaCount += 1;
          command.strokeCount += _areaStrokeArray2.length;
          _areaObject.polygonArray = ssr.SVG.Util.Path.FlattenStrokeArray(_areaStrokeArray2, configuration);
        } else if (command.type == ssr.SVG.Const.POLYGON) {
          var _areaStrokeArray3 = ssr.SVG.Parser.parsePolygon(command.params, configuration);
          var _areaObject2 = new ssr.SVG.Data.Area(_areaStrokeArray3);
          command.areaArray.push(_areaObject2);
          command.areaCount += 1;
          command.strokeCount += _areaStrokeArray3.length;
          _areaObject2.polygonArray = ssr.SVG.Util.Path.FlattenStrokeArray(_areaStrokeArray3, configuration);
          configuration.enableFillRuleCheck && (command.areaTess2 = ssr.SVG.Util.Path.Tessellate(_areaStrokeArray3, command.fillRule));
        } else if (command.type == ssr.SVG.Const.RECT) {
          var _areaStrokeArray4 = ssr.SVG.Parser.parseRect(command.params, configuration);
          var _areaObject3 = new ssr.SVG.Data.Area(_areaStrokeArray4);
          command.areaArray.push(_areaObject3);
          command.areaCount += 1;
          command.strokeCount += _areaStrokeArray4.length;
          _areaObject3.polygonArray = ssr.SVG.Util.Path.FlattenStrokeArray(_areaStrokeArray4, configuration);
        } else if (command.type == ssr.SVG.Const.CIRCLE) {
          var _areaStrokeArray5 = ssr.SVG.Parser.parseCircle(command.params, configuration);
          var _areaObject4 = new ssr.SVG.Data.Area(_areaStrokeArray5);
          command.areaArray.push(_areaObject4);
          command.areaCount += 1;
          command.strokeCount += _areaStrokeArray5.length;
          _areaObject4.polygonArray = ssr.SVG.Util.Path.FlattenStrokeArray(_areaStrokeArray5, configuration);
        } else if (command.type == ssr.SVG.Const.ELLIPSE) {
          var _areaStrokeArray6 = ssr.SVG.Parser.parseEllipse(command.params, configuration);
          var _areaObject5 = new ssr.SVG.Data.Area(_areaStrokeArray6);
          command.areaArray.push(_areaObject5);
          command.areaCount += 1;
          command.strokeCount += _areaStrokeArray6.length;
          _areaObject5.polygonArray = ssr.SVG.Util.Path.FlattenStrokeArray(_areaStrokeArray6, configuration);
        }
      }
      svgRoot.pathCount = svgRoot.commandArray.length;
      return svgRoot;
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGPolylineUtil: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed7b0wLvc5FMIhoZmvztCiO", "SVGPolylineUtil");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Util.Polyline = function() {};
    ssr.SVG.Util.Polyline.FromCubicBezier = function(px, py, cx1, cy1, cx2, cy2, x, y, segments) {
      var outputArray = [];
      var t = 1 / segments;
      for (var i = t; i < 1; i += t) {
        var xx = Math.pow(1 - i, 3) * px + 3 * Math.pow(1 - i, 2) * i * cx1 + 3 * (1 - i) * i * i * cx2 + i * i * i * x;
        var yy = Math.pow(1 - i, 3) * py + 3 * Math.pow(1 - i, 2) * i * cy1 + 3 * (1 - i) * i * i * cy2 + i * i * i * y;
        outputArray.push({
          x: parseFloat(xx.toFixed(3)),
          y: parseFloat(yy.toFixed(3))
        });
      }
      return outputArray;
    };
    ssr.SVG.Util.Polyline.FromQuadBezier = function(px, py, cx1, cy1, x, y, segments) {
      var outputArray = [];
      var t = 1 / segments;
      for (var i = t; i < 1; i += t) {
        var xx = Math.pow(1 - i, 2) * px + 2 * (1 - i) * i * cx1 + i * i * x;
        var yy = Math.pow(1 - i, 2) * py + 2 * (1 - i) * i * cy1 + i * i * y;
        outputArray.push({
          x: parseFloat(xx.toFixed(3)),
          y: parseFloat(yy.toFixed(3))
        });
      }
      return outputArray;
    };
    ssr.SVG.Util.Polyline.FromEllipticArc = function(x1, y1, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x2, y2, segments) {
      var phi = cc.misc.degreesToRadians(xAxisRotation % 360);
      var cosPhi = Math.cos(phi);
      var sinPhi = Math.sin(phi);
      var halfDifX = (x1 - x2) / 2;
      var halfDifY = (y1 - y2) / 2;
      var x1p = cosPhi * halfDifX + sinPhi * halfDifY;
      var y1p = -sinPhi * halfDifX + cosPhi * halfDifY;
      var prx, pry, px1p, py1p, radiiCheck, sign, denominator, numerator, coef, cxp, cyp, halfSumX, halfSumY, cx, cy, ux, uy, vx, vy, angleStart, angleExtent;
      rx = Math.abs(rx);
      ry = Math.abs(ry);
      prx = rx * rx;
      pry = ry * ry;
      px1p = x1p * x1p;
      py1p = y1p * y1p;
      radiiCheck = px1p / prx + py1p / pry;
      if (radiiCheck > 1) {
        rx *= Math.sqrt(radiiCheck);
        ry *= Math.sqrt(radiiCheck);
        prx = rx * rx;
        pry = ry * ry;
      }
      var sign = largeArcFlag === sweepFlag ? -1 : 1;
      var denominator = prx * py1p + pry * px1p;
      var numerator = prx * pry - denominator;
      var coef = numerator < 0 ? 0 : sign * Math.sqrt(numerator / denominator);
      var cxp = coef * (rx * y1p / ry);
      var cyp = coef * (-ry * x1p / rx);
      var halfSumX = (x1 + x2) / 2;
      var halfSumY = (y1 + y2) / 2;
      var cx = cosPhi * cxp - sinPhi * cyp + halfSumX;
      var cy = sinPhi * cxp + cosPhi * cyp + halfSumY;
      var ux = (x1p - cxp) / rx;
      var uy = (y1p - cyp) / ry;
      var vx = (-x1p - cxp) / rx;
      var vy = (-y1p - cyp) / ry;
      sign = uy < 0 ? -1 : 1;
      numerator = ux;
      denominator = Math.sqrt(ux * ux + uy * uy);
      var angleStart = cc.misc.radiansToDegrees(sign * Math.acos(numerator / denominator));
      sign = ux * vy - uy * vx < 0 ? -1 : 1;
      numerator = ux * vx + uy * vy;
      denominator = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
      var angleExtent = cc.misc.radiansToDegrees(sign * Math.acos(numerator / denominator));
      !sweepFlag && angleExtent > 0 ? angleExtent -= 360 : sweepFlag && angleExtent < 0 && (angleExtent += 360);
      angleExtent %= 360;
      angleStart %= 360;
      var outputArray = [];
      var t = 0;
      for (var s = 1; s < segments; s++) {
        t = s / segments;
        var theta = cc.misc.degreesToRadians(angleStart + t * angleExtent);
        var rxc = rx * Math.cos(theta);
        var rys = ry * Math.sin(theta);
        outputArray.push({
          x: cx + cosPhi * rxc - sinPhi * rys,
          y: cy + sinPhi * rxc + cosPhi * rys
        });
      }
      outputArray.push({
        x: parseFloat(x2.toFixed(3)),
        y: parseFloat(y2.toFixed(3))
      });
      return outputArray;
    };
    ssr.SVG.Util.Polyline.FromEllipse = function(cx, cy, rx, ry, segments) {
      var outputArray = [];
      var t = 2 * Math.PI / segments;
      for (var i = t; i < 2 * Math.PI; i += t) {
        var xx = cx - rx * Math.cos(i);
        var yy = cy + ry * Math.sin(i);
        outputArray.push({
          x: parseFloat(xx.toFixed(3)),
          y: parseFloat(yy.toFixed(3))
        });
      }
      return outputArray;
    };
    ssr.SVG.Util.Polyline.FromLine = function(x1, y1, x2, y2, segments) {
      var outputArray = [];
      var t = 1 / segments;
      for (var i = t; i < 1; i += t) {
        var out = cc.v2(0, 0);
        cc.Vec2.lerp(out, cc.v2(x1, y1), {
          x: parseFloat(x2.toFixed(3)),
          y: parseFloat(y2.toFixed(3))
        }, i);
        outputArray.push(out.x, out.y);
      }
      return outputArray;
    };
    ssr.SVG.Util.Polyline.FromCircle = function(cx, cy, r, segments) {
      var outputArray = [];
      var t = 2 * Math.PI / segments;
      var vertices = [];
      for (var i = t; i < 2 * Math.PI; i += t) {
        var xx = r * Math.cos(i) + cx;
        var yy = r * Math.sin(i) + cy;
        outputArray.push({
          x: parseFloat(xx.toFixed(3)),
          y: parseFloat(yy.toFixed(3))
        });
      }
      outputArray.push({
        x: outputArray[0].x,
        y: outputArray[0].y
      });
      return outputArray;
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGUtilCommon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "41343hX4y1HJLSbWYnLlTcv", "SVGUtilCommon");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Util.Common = function() {};
    ssr.SVG.Util.Common.hexToRgb = function(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
      });
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: 255
      } : null;
    };
    ssr.SVG.Util.Common.parseColor = function(colorString) {
      var hex = ssr.SVG.Util.Common.hexToRgb(colorString);
      if (null == hex) {
        var namedColorDict = {
          none: "#00000000",
          transparent: "#00000000",
          black: "#000000FF",
          blue: "#0000FFFF",
          green: "#008000FF",
          aqua: "#00FFFFFF",
          cyan: "#00FFFFFF",
          purple: "#800080FF",
          gray: "#808080FF",
          brown: "#A52A2AFF",
          silver: "#C0C0C0FF",
          red: "#FF0000FF",
          orange: "#FFA500FF",
          pink: "#FFC0CBFF",
          gold: "#FFD700FF",
          yellow: "#FFFF00FF",
          white: "#FFFFFFFF"
        };
        hex = namedColorDict[colorString];
      }
      return hex;
    };
    ssr.SVG.Util.Common.parseStyleProperty = function(style) {
      var styleOutput = {};
      var kvs = style.replace(/ +/g, "").split(";");
      for (var k = 0; k < kvs.length; k++) {
        var kv = kvs[k].replace(/ +/g, "").split(":");
        var key = kv[0];
        var value = kv[1];
        if ("fill" == key) {
          styleOutput["fillColor"] = ssr.SVG.Util.Common.parseColor(value);
          "none" == value && (styleOutput["opacity"] = 0);
        }
        "stroke" == key && (styleOutput["strokeColor"] = ssr.SVG.Util.Common.parseColor(value));
        "stroke-width" == key && (styleOutput["strokeWidth"] = parseFloat(value));
        "fill-opacity" == key && (styleOutput["opacity"] = parseFloat(value));
        "fill-rule" == key && (styleOutput["fillRule"] = value);
      }
      return styleOutput;
    };
    ssr.SVG.Util.Common.isPointInPolygon = function(point, polygon) {
      for (var n = polygon.length, i = 0, j = n - 1, x = point.x, y = point.y, inside = false; i < n; j = i++) {
        var xi = polygon[i].x, yi = polygon[i].y, xj = polygon[j].x, yj = polygon[j].y;
        yi > y ^ yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi && (inside = !inside);
      }
      return inside;
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGUtilPath: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2ca6BD04tK17GTnguxIPoo", "SVGUtilPath");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Util.Path = function() {};
    ssr.SVG.Util.Path._checkDecimalTerms = function(terms) {
      var outputArray = [];
      for (var i = 0; i < terms.length; i++) {
        var decimalArray = terms[i].split(".");
        if (decimalArray.length > 1) {
          outputArray.push(parseFloat((decimalArray[0] ? decimalArray[0] : "0") + "." + decimalArray[1]));
          for (var j = 2; j < decimalArray.length; j++) outputArray.push(parseFloat("0." + decimalArray[j]));
        } else outputArray.push(parseFloat(terms[i]));
      }
      return outputArray;
    };
    ssr.SVG.Util.Path._fuzzyEquals = function fuzzyEquals(param1, param2, variance) {
      if (param1.x - variance <= param2.x && param2.x <= param1.x + variance && param1.y - variance <= param2.y && param2.y <= param1.y + variance) return true;
      return false;
    };
    ssr.SVG.Util.Path.M = function(index, lastM, cmd, terms, configuration, outArray) {
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      var px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
      if (preStroke) if (preStroke.commandType != ssr.SVG.Const.PATH_END) {
        var lastMStrokeobject = outArray[lastM - 1];
        if (preStroke.params.x != lastMStrokeobject.params.x || preStroke.params.y != lastMStrokeobject.params.y) {
          var strokeObject1 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, cmd + "(l)", {
            px: px,
            py: py,
            x: lastMStrokeobject.params.x,
            y: lastMStrokeobject.params.y
          }, [ {
            x: preStroke.params.x,
            y: preStroke.params.y
          } ]);
          outArray.push(strokeObject1);
          var strokeObject2 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_END, ssr.SVG.Const.RENDER_CLOSE, cmd + "(z)", {
            px: px,
            py: py,
            x: lastMStrokeobject.params.x,
            y: lastMStrokeobject.params.y
          }, [ {
            x: preStroke.params.x,
            y: preStroke.params.y
          } ]);
          outArray.push(strokeObject2);
        } else {
          var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_END, ssr.SVG.Const.RENDER_CLOSE, cmd + "(z)", {
            px: px,
            py: py,
            x: lastMStrokeobject.params.x,
            y: lastMStrokeobject.params.y
          }, [ {
            x: preStroke.params.x,
            y: preStroke.params.y
          } ]);
          outArray.push(strokeObject);
        }
      } else preStroke.renderType = ssr.SVG.Const.RENDER_CLOSE;
      terms = ssr.SVG.Util.Path._checkDecimalTerms(terms);
      for (var i = 0; i < terms.length / 2; i++) {
        px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
        var x = parseFloat(terms[2 * i]), y = parseFloat(terms[2 * i + 1]);
        "m" == cmd && (x += px, y += py);
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        if (0 == i) {
          var _strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_MOVE, ssr.SVG.Const.RENDER_MOVE, cmd + " " + terms[2 * i] + " " + terms[2 * i + 1], {
            px: 0,
            py: 0,
            x: x,
            y: y
          }, [ {
            x: x,
            y: y
          } ]);
          outArray.push(_strokeObject);
          preStroke = _strokeObject;
        } else {
          var _strokeObject2 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, cmd + "(l) " + terms[2 * i] + " " + terms[2 * i + 1], {
            px: px,
            py: py,
            x: x,
            y: y
          }, [ {
            x: x,
            y: y
          } ]);
          outArray.push(_strokeObject2);
          preStroke = _strokeObject2;
        }
      }
    };
    ssr.SVG.Util.Path.L = function(index, cmd, terms, configuration, outArray) {
      var px = 0, py = 0;
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      terms = ssr.SVG.Util.Path._checkDecimalTerms(terms);
      for (var i = 0; i < terms.length / 2; i++) {
        px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
        var x = parseFloat(terms[2 * i]), y = parseFloat(terms[2 * i + 1]);
        "l" == cmd && (x += px, y += py);
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        if (configuration.segmentationOn) {
          var segmentArray = ssr.SVG.Util.Polyline.FromLine(px, py, x, y, configuration.segments);
          for (var m = 1; m < segmentArray.length; m++) {
            var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, cmd + "(*) " + segmentArray[m].x + " " + segmentArray[m].y, {
              px: segmentArray[m - 1].x,
              py: segmentArray[m - 1].y,
              x: x,
              y: y
            }, [ {
              x: segmentArray[m].x,
              y: segmentArray[m].y
            } ]);
            outArray.push(strokeObject);
            preStroke = strokeObject;
          }
        } else {
          var _strokeObject3 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, cmd + " " + terms[2 * i] + " " + terms[2 * i + 1], {
            px: px,
            py: py,
            x: x,
            y: y
          }, [ {
            x: x,
            y: y
          } ]);
          outArray.push(_strokeObject3);
          preStroke = _strokeObject3;
        }
      }
    };
    ssr.SVG.Util.Path.H = function(index, cmd, terms, configuration, outArray) {
      var px = 0, py = 0;
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      terms = ssr.SVG.Util.Path._checkDecimalTerms(terms);
      for (var i = 0; i <= terms.length - 1; i++) {
        px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
        var x = parseFloat(terms[i]);
        var y = py;
        "h" == cmd && (x += px);
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        if (configuration.segmentationOn) {
          var segmentArray = ssr.SVG.Util.Polyline.FromLine(px, py, x, y, configuration.segments);
          for (var m = 1; m < segmentArray.length; m++) {
            var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, cmd + " " + x + "(" + m + ")", {
              px: segmentArray[m - 1].x,
              py: segmentArray[m - 1].y,
              x: x,
              y: y
            }, [ {
              x: segmentArray[m].x,
              y: segmentArray[m].y
            } ]);
            outArray.push(strokeObject);
            preStroke = strokeObject;
          }
        } else {
          var _strokeObject4 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, cmd + " " + x, {
            px: px,
            py: py,
            x: x,
            y: y
          }, [ {
            x: x,
            y: y
          } ]);
          outArray.push(_strokeObject4);
          preStroke = _strokeObject4;
        }
      }
    };
    ssr.SVG.Util.Path.V = function(index, cmd, terms, configuration, outArray) {
      var px = 0, py = 0;
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      terms = ssr.SVG.Util.Path._checkDecimalTerms(terms);
      for (var i = 0; i <= terms.length - 1; i++) {
        px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
        var x = px;
        var y = parseFloat(terms[i]);
        "v" == cmd && (y += py);
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        if (configuration.segmentationOn) {
          var segmentArray = ssr.SVG.Util.Polyline.FromLine(px, py, x, y, configuration.segments);
          for (var m = 1; m < segmentArray.length; m++) {
            var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, cmd + " " + y + "(" + m + ")", {
              px: segmentArray[m - 1].x,
              py: segmentArray[m - 1].y,
              x: x,
              y: y
            }, [ {
              x: segmentArray[m].x,
              y: segmentArray[m].y
            } ]);
            outArray.push(strokeObject);
            preStroke = strokeObject;
          }
        } else {
          var _strokeObject5 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, cmd + " " + y, {
            px: px,
            py: py,
            x: x,
            y: y
          }, [ {
            x: x,
            y: y
          } ]);
          outArray.push(_strokeObject5);
          preStroke = _strokeObject5;
        }
      }
    };
    ssr.SVG.Util.Path.C = function(index, cmd, terms, configuration, outArray) {
      var px = 0, py = 0;
      terms = ssr.SVG.Util.Path._checkDecimalTerms(terms);
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      for (var i = 0; i < terms.length / 6; i++) {
        px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
        var cx1 = parseFloat(terms[6 * i]), cy1 = parseFloat(terms[6 * i + 1]);
        var cx2 = parseFloat(terms[6 * i + 2]), cy2 = parseFloat(terms[6 * i + 3]);
        var x = parseFloat(terms[6 * i + 4]), y = parseFloat(terms[6 * i + 5]);
        if ("c" == cmd) {
          cx1 += px, cy1 += py;
          cx2 += px, cy2 += py;
          x += px, y += py;
        }
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        cx1 = parseFloat(cx1.toFixed(3));
        cy1 = parseFloat(cy1.toFixed(3));
        cx2 = parseFloat(cx2.toFixed(3));
        cy2 = parseFloat(cy2.toFixed(3));
        var instruction = cmd + " " + terms[6 * i] + " " + terms[6 * i + 1] + " " + terms[6 * i + 2] + " " + terms[6 * i + 3] + " " + terms[6 * i + 4] + " " + terms[6 * i + 5];
        var params = {
          px: px,
          py: py,
          cx1: cx1,
          cy1: cy1,
          cx2: cx2,
          cy2: cy2,
          x: x,
          y: y
        };
        var segmentArray = ssr.SVG.Util.Polyline.FromCubicBezier(px, py, cx1, cy1, cx2, cy2, x, y, configuration.segments);
        if (configuration.segmentationOn) for (var m = 1; m < segmentArray.length; m++) {
          var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, instruction + "(" + m + ")", params, [ {
            x: segmentArray[m].x,
            y: segmentArray[m].y
          } ]);
          outArray.push(strokeObject);
          preStroke = strokeObject;
        } else {
          var _strokeObject6 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_CURVE_C, ssr.SVG.Const.RENDER_POLYLINE, instruction, params, segmentArray);
          outArray.push(_strokeObject6);
          preStroke = _strokeObject6;
        }
      }
    };
    ssr.SVG.Util.Path.S = function(index, cmd, terms, configuration, outArray) {
      var px = 0, py = 0;
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      terms = ssr.SVG.Util.Path._checkDecimalTerms(terms);
      for (var i = 0; i < terms.length / 4; i++) {
        px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
        var cx2 = parseFloat(terms[4 * i]), cy2 = parseFloat(terms[4 * i + 1]);
        "s" == cmd && (cx2 = px + cx2, cy2 = py + cy2);
        var cx1 = px, cy1 = py;
        if (preStroke.commandType == ssr.SVG.Const.PATH_CURVE_C || preStroke.commandType == ssr.SVG.Const.PATH_CURVE_S) {
          cx1 = 2 * px - preStroke.params.cx2;
          cy1 = 2 * py - preStroke.params.cy2;
        }
        var x = parseFloat(terms[4 * i + 2]), y = parseFloat(terms[4 * i + 3]);
        "s" == cmd && (x += px, y += py);
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        cx1 = parseFloat(cx1.toFixed(3));
        cy1 = parseFloat(cy1.toFixed(3));
        cx2 = parseFloat(cx2.toFixed(3));
        cy2 = parseFloat(cy2.toFixed(3));
        var instruction = cmd + " " + terms[4 * i] + " " + terms[4 * i + 1] + " " + terms[4 * i + 2] + " " + terms[4 * i + 3];
        var params = {
          px: px,
          py: py,
          cx1: cx1,
          cy1: cy1,
          cx2: cx2,
          cy2: cy2,
          x: x,
          y: y
        };
        var segmentArray = ssr.SVG.Util.Polyline.FromCubicBezier(px, py, cx1, cy1, cx2, cy2, x, y, configuration.segments);
        if (configuration.segmentationOn) for (var m = 1; m < segmentArray.length; m++) {
          var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, instruction + "(" + m + ")", params, [ {
            x: segmentArray[m].x,
            y: segmentArray[m].y
          } ]);
          outArray.push(strokeObject);
          preStroke = strokeObject;
        } else {
          var _strokeObject7 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_CURVE_S, ssr.SVG.Const.RENDER_POLYLINE, instruction, params, segmentArray);
          outArray.push(_strokeObject7);
          preStroke = _strokeObject7;
        }
      }
    };
    ssr.SVG.Util.Path.Q = function(index, cmd, terms, configuration, outArray) {
      var px = 0, py = 0;
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      terms = ssr.SVG.Util.Path._checkDecimalTerms(terms);
      for (var i = 0; i < terms.length / 4; i++) {
        px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
        var cx1 = parseFloat(terms[4 * i]), cy1 = parseFloat(terms[4 * i + 1]);
        "q" == cmd && (cx1 += px, cy1 += py);
        var x = parseFloat(terms[4 * i + 2]), y = parseFloat(terms[4 * i + 3]);
        "q" == cmd && (x += px, y += py);
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        cx1 = parseFloat(cx1.toFixed(3));
        cy1 = parseFloat(cy1.toFixed(3));
        var instruction = cmd + " " + terms[4 * i] + " " + terms[4 * i + 1] + " " + terms[4 * i + 2] + " " + terms[4 * i + 3];
        var params = {
          px: px,
          py: py,
          cx1: cx1,
          cy1: cy1,
          x: x,
          y: y
        };
        var segmentArray = ssr.SVG.Util.Polyline.FromQuadBezier(px, py, cx1, cy1, x, y, configuration.segments);
        if (configuration.segmentationOn) for (var m = 0; m < segmentArray.length; m++) {
          var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, instruction + "(" + m + ")", params, [ {
            x: segmentArray[m].x,
            y: segmentArray[m].y
          } ]);
          outArray.push(strokeObject);
          preStroke = strokeObject;
        } else {
          var _strokeObject8 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_CURVE_Q, ssr.SVG.Const.RENDER_POLYLINE, instruction, params, segmentArray);
          outArray.push(_strokeObject8);
          preStroke = _strokeObject8;
        }
      }
    };
    ssr.SVG.Util.Path.T = function(index, cmd, terms, configuration, outArray) {
      var px = 0, py = 0;
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      terms = ssr.SVG.Util.Path._checkDecimalTerms(terms);
      for (var i = 0; i < terms.length / 2; i++) {
        px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
        var x = parseFloat(terms[2 * i]), y = parseFloat(terms[2 * i + 1]);
        "t" == cmd && (x += px, y += py);
        var cx1 = px, cy1 = py;
        if (preStroke.commandType == ssr.SVG.Const.PATH_CURVE_Q || preStroke.commandType == ssr.SVG.Const.PATH_CURVE_T) {
          cx1 = 2 * px - preStroke.params.cx1;
          cy1 = 2 * py - preStroke.params.cy1;
        }
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        cx1 = parseFloat(cx1.toFixed(3));
        cy1 = parseFloat(cy1.toFixed(3));
        var instruction = cmd + " " + terms[2 * i] + " " + terms[2 * i + 1];
        var params = {
          px: px,
          py: py,
          cx1: cx1,
          cy1: cy1,
          x: x,
          y: y
        };
        var segmentArray = ssr.SVG.Util.Polyline.FromQuadBezier(px, py, cx1, cy1, x, y, configuration.segments);
        if (configuration.segmentationOn) for (var m = 1; m < segmentArray.length; m++) {
          var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, instruction + "(" + m + ")", params, [ {
            x: segmentArray[m].x,
            y: segmentArray[m].y
          } ]);
          outArray.push(strokeObject);
          preStroke = strokeObject;
        } else {
          var _strokeObject9 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_CURVE_T, ssr.SVG.Const.RENDER_POLYLINE, instruction, params, segmentArray);
          outArray.push(_strokeObject9);
          preStroke = _strokeObject9;
        }
      }
    };
    ssr.SVG.Util.Path.A = function(index, cmd, terms, configuration, outArray) {
      var px = 0, py = 0;
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      terms = ssr.SVG.Util.Path._checkDecimalTerms(terms);
      for (var i = 0; i < terms.length / 7; i++) {
        px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
        var rx = parseFloat(terms[7 * i]), ry = parseFloat(terms[7 * i + 1]), rotate = parseFloat(terms[7 * i + 2]);
        var largeArcFlag = parseFloat(terms[7 * i + 3]), sweepFlag = parseFloat(terms[7 * i + 4]);
        var x = parseFloat(terms[7 * i + 5]), y = parseFloat(terms[7 * i + 6]);
        "a" == cmd && (x += px, y += py);
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        var instruction = cmd + " " + terms[7 * i] + " " + terms[7 * i + 1] + " " + terms[7 * i + 2] + " " + terms[7 * i + 3] + " " + terms[7 * i + 4] + " " + terms[7 * i + 5] + " " + terms[7 * i + 6];
        var params = {
          px: px,
          py: py,
          rx: rx,
          ry: ry,
          rotate: rotate,
          largeArcFlag: largeArcFlag,
          sweepFlag: sweepFlag,
          x: x,
          y: y
        };
        var segmentArray = ssr.SVG.Util.Polyline.FromEllipticArc(px, py, rx, ry, rotate, largeArcFlag, sweepFlag, x, y, configuration.segments);
        if (configuration.segmentationOn) for (var m = 1; m < segmentArray.length; m++) {
          var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, instruction + "(" + m + ")", params, [ {
            x: segmentArray[m].x,
            y: segmentArray[m].y
          } ]);
          outArray.push(strokeObject);
          preStroke = strokeObject;
        } else {
          var _strokeObject10 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_CURVE_A, ssr.SVG.Const.RENDER_POLYLINE, instruction, params, segmentArray);
          outArray.push(_strokeObject10);
          preStroke = _strokeObject10;
        }
      }
    };
    ssr.SVG.Util.Path.Z = function(index, lastM, cmd, terms, configuration, outArray) {
      var lastMStrokeobject = outArray[lastM - 1];
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      var px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
      if (ssr.SVG.Util.Path._fuzzyEquals(preStroke.params, lastMStrokeobject.params, cc.macro.FLT_EPSILON)) {
        var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_END, ssr.SVG.Const.RENDER_CLOSE, cmd, {
          px: px,
          py: py,
          x: lastMStrokeobject.params.x,
          y: lastMStrokeobject.params.y
        }, [ {
          x: preStroke.params.x,
          y: preStroke.params.y
        } ]);
        outArray.push(strokeObject);
        preStroke = strokeObject;
      } else if (configuration.segmentationOn) {
        var segmentArray = ssr.SVG.Util.Polyline.FromLine(px, py, lastMStrokeobject.params.x, lastMStrokeobject.params.y, configuration.segments);
        for (var m = 1; m < segmentArray.length; m++) {
          var _strokeObject11 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, "z(" + m + ")", {
            px: px,
            py: py,
            x: lastMStrokeobject.params.x,
            y: lastMStrokeobject.params.y
          }, [ {
            x: segmentArray[m].x,
            y: segmentArray[m].y
          } ]);
          outArray.push(_strokeObject11);
        }
        var strokeObject2 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_END, ssr.SVG.Const.RENDER_CLOSE, cmd, {
          px: px,
          py: py,
          x: lastMStrokeobject.params.x,
          y: lastMStrokeobject.params.y
        }, [ {
          x: preStroke.params.x,
          y: preStroke.params.y
        } ]);
        outArray.push(strokeObject2);
        preStroke = strokeObject2;
      } else {
        var strokeObject1 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_LINE, ssr.SVG.Const.RENDER_LINE, cmd + "(l)", {
          px: px,
          py: py,
          x: lastMStrokeobject.params.x,
          y: lastMStrokeobject.params.y
        }, [ {
          x: lastMStrokeobject.params.x,
          y: lastMStrokeobject.params.y
        } ]);
        outArray.push(strokeObject1);
        var _strokeObject12 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_END, ssr.SVG.Const.RENDER_CLOSE, cmd, {
          px: px,
          py: py,
          x: lastMStrokeobject.params.x,
          y: lastMStrokeobject.params.y
        }, [ {
          x: preStroke.params.x,
          y: preStroke.params.y
        } ]);
        outArray.push(_strokeObject12);
        preStroke = _strokeObject12;
      }
    };
    ssr.SVG.Util.Path.Last = function(lastM, configuration, outArray) {
      var preStroke = outArray.length > 0 ? outArray[outArray.length - 1] : null;
      if (preStroke.commandType == ssr.SVG.Const.PATH_END) return;
      var px = preStroke ? preStroke.params.x : 0, py = preStroke ? preStroke.params.y : 0;
      var lastMStrokeobject = outArray[lastM - 1];
      if (ssr.SVG.Util.Path._fuzzyEquals(lastMStrokeobject.params, preStroke.params, cc.macro.FLT_EPSILON)) {
        var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_END, ssr.SVG.Const.RENDER_CLOSE, "(z)", {
          px: px,
          py: py,
          x: lastMStrokeobject.params.x,
          y: lastMStrokeobject.params.y
        }, [ {
          x: preStroke.params.x,
          y: preStroke.params.y
        } ]);
        outArray.push(strokeObject);
      } else {
        var _strokeObject13 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_END, ssr.SVG.Const.RENDER_END, "(z)", {
          px: px,
          py: py,
          x: lastMStrokeobject.params.x,
          y: lastMStrokeobject.params.y
        }, [ {
          x: preStroke.params.x,
          y: preStroke.params.y
        } ]);
        outArray.push(_strokeObject13);
      }
    };
    ssr.SVG.Util.Path.Ellipse = function(term, configuration, outArray) {
      var segmentArray = ssr.SVG.Util.Polyline.FromEllipse(term.cx, term.cy, term.rx, term.ry, configuration.segments);
      if (configuration.segmentationOn) {
        for (var m = 0; m < segmentArray.length - 1; m++) if (0 == m) {
          var strokeObject = new ssr.SVG.Data.Stroke(ssr.SVG.Const.ELLIPSE, ssr.SVG.Const.RENDER_MOVE, "ellipse m", term, [ {
            x: segmentArray[m].x,
            y: segmentArray[m].y
          } ]);
          outArray.push(strokeObject);
        } else {
          var _strokeObject14 = new ssr.SVG.Data.Stroke(ssr.SVG.Const.ELLIPSE, ssr.SVG.Const.RENDER_LINE, "ellipse l ", term, [ {
            x: segmentArray[m].x,
            y: segmentArray[m].y
          } ]);
          outArray.push(_strokeObject14);
        }
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.ELLIPSE, ssr.SVG.Const.RENDER_CLOSE, "z", term, [ {
          x: segmentArray[segmentArray.length - 1].x,
          y: segmentArray[segmentArray.length - 1].y
        } ]));
      } else {
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.ELLIPSE, ssr.SVG.Const.RENDER_MOVE, "ellipse (m)", term, [ segmentArray.shift() ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.ELLIPSE, ssr.SVG.Const.RENDER_POLYLINE, "ellipse (polyline)", term, segmentArray));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.ELLIPSE, ssr.SVG.Const.RENDER_CLOSE, "ellipse (z)", term, [ {
          x: segmentArray[segmentArray.length - 1].x,
          y: segmentArray[segmentArray.length - 1].y
        } ]));
      }
    };
    ssr.SVG.Util.Path.Circle = function(term, configuration, outArray) {
      var segmentArray = ssr.SVG.Util.Polyline.FromCircle(term.cx, term.cy, term.r, configuration.segments);
      if (configuration.segmentationOn) {
        for (var m = 0; m < segmentArray.length - 1; m++) 0 == m ? outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.CIRCLE, ssr.SVG.Const.RENDER_MOVE, "circle (m)", term, [ {
          x: segmentArray[m].x,
          y: segmentArray[m].y
        } ])) : outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.CIRCLE, ssr.SVG.Const.RENDER_LINE, "circle (l)", term, [ {
          x: segmentArray[m].x,
          y: segmentArray[m].y
        } ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.CIRCLE, ssr.SVG.Const.RENDER_CLOSE, "z", term, [ {
          x: segmentArray[segmentArray.length - 1].x,
          y: segmentArray[segmentArray.length - 1].y
        } ]));
      } else {
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.CIRCLE, ssr.SVG.Const.RENDER_MOVE, "circle (m)", term, [ segmentArray.shift() ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.CIRCLE, ssr.SVG.Const.RENDER_POLYLINE, "circle", term, segmentArray));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.CIRCLE, ssr.SVG.Const.RENDER_CLOSE, "circle (z)", term, [ {
          x: segmentArray[segmentArray.length - 1].x,
          y: segmentArray[segmentArray.length - 1].y
        } ]));
      }
    };
    ssr.SVG.Util.Path.Line = function(term, configuration, outArray) {
      if (configuration.segmentationOn) {
        var segmentArray = ssr.SVG.Util.Polyline.FromLine(term.x1, term.y1, term.x2, term.y2, configuration.segments);
        for (var m = 0; m < segmentArray.length; m++) 0 == m ? outArray.strokeArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.LINE, ssr.SVG.Const.RENDER_MOVE, "line (m)", term, [ {
          x: segmentArray[m].x,
          y: segmentArray[m].y
        } ])) : outArray.strokeArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.LINE, ssr.SVG.Const.RENDER_LINE, "line (l)", term, [ {
          x: segmentArray[m].x,
          y: segmentArray[m].y
        } ]));
      } else {
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.LINE, ssr.SVG.Const.RENDER_MOVE, "line (m)", term, [ {
          x: term.x1,
          y: term.y1
        } ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.LINE, ssr.SVG.Const.RENDER_POLYLINE, "line (l)", term, [ {
          x: term.x2,
          y: term.y2
        } ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.LINE, ssr.SVG.Const.RENDER_CLOSE, "line (z)", term, [ {
          x: term.x2,
          y: term.y2
        } ]));
      }
    };
    ssr.SVG.Util.Path.Polyline = function(term, configuration, outArray) {
      var terms = term.split(" ");
      var segmentArray = [];
      for (var _m = 0; _m < terms.length / 2; _m++) {
        var x = parseFloat(terms[2 * _m]);
        var y = parseFloat(terms[2 * _m + 1]);
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        segmentArray.push({
          x: x,
          y: y
        });
      }
      if (configuration.segmentationOn) for (var m = 0; m < segmentArray.length; m++) 0 == m ? outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_POLYLINE, ssr.SVG.Const.RENDER_MOVE, "polyline (m)", term, [ {
        x: segmentArray[m].x,
        y: segmentArray[m].y
      } ])) : outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_POLYLINE, ssr.SVG.Const.RENDER_LINE, "polyline (l)", term, [ {
        x: segmentArray[m].x,
        y: segmentArray[m].y
      } ])); else {
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_POLYLINE, ssr.SVG.Const.RENDER_MOVE, "polyline (m)", term, [ segmentArray.shift() ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_POLYLINE, ssr.SVG.Const.RENDER_POLYLINE, "polyline (l)", term, segmentArray));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.PATH_POLYLINE, ssr.SVG.Const.RENDER_END, "polyline (z)", term, [ {
          x: segmentArray[segmentArray.length - 1].x,
          y: segmentArray[segmentArray.length - 1].y
        } ]));
      }
    };
    ssr.SVG.Util.Path.Polygon = function(term, configuration, outArray) {
      var segmentArray = [];
      var terms = term.split(" ");
      for (var _m2 = 0; _m2 < terms.length / 2; _m2++) {
        var x = parseFloat(terms[2 * _m2]);
        var y = parseFloat(terms[2 * _m2 + 1]);
        x = parseFloat(x.toFixed(3));
        y = parseFloat(y.toFixed(3));
        segmentArray.push({
          x: x,
          y: y
        });
      }
      segmentArray.push({
        x: segmentArray[0].x,
        y: segmentArray[0].y
      });
      if (configuration.segmentationOn) for (var m = 0; m < segmentArray.length; m++) 0 == m ? outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.POLYGON, ssr.SVG.Const.RENDER_MOVE, "polygon m", [ {
        x: segmentArray[m].x,
        y: segmentArray[m].y
      } ])) : outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.POLYGON, ssr.SVG.Const.RENDER_LINE, "polygon l", [ {
        x: segmentArray[m].x,
        y: segmentArray[m].y
      } ])); else {
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.POLYGON, ssr.SVG.Const.RENDER_MOVE, "polygon (m)", term, [ segmentArray.shift() ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.POLYGON, ssr.SVG.Const.RENDER_POLYLINE, "polygon", term, segmentArray));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.POLYGON, ssr.SVG.Const.RENDER_CLOSE, "polygon (z)", {
          x: segmentArray[0].px,
          y: segmentArray[0].py
        }, [ {
          x: segmentArray[0].px,
          y: segmentArray[0].py
        } ]));
      }
    };
    ssr.SVG.Util.Path.Rect = function(term, configuration, outArray) {
      if (configuration.segmentationOn) {
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_MOVE, [ {
          x: term.x,
          y: term.y
        } ], "rect"));
        var segmentArray = ssr.SVG.Util.Polyline.FromLine(term.x, term.y, term.x + term.width, term.y, configuration.segments);
        for (var m = 0; m < segmentArray.length; m++) outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_LINE, term, [ {
          x: segmentArray[m].x,
          y: segmentArray[m].y
        } ]));
        segmentArray = ssr.SVG.Util.Polyline.FromLine(term.x + term.width, term.y, term.x + term.width, term.y + term.height, configuration.segments);
        for (var m = 0; m < segmentArray.length; m++) outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_LINE, term, [ {
          x: segmentArray[m].x,
          y: segmentArray[m].y
        } ]));
        segmentArray = ssr.SVG.Util.Polyline.FromLine(term.x + term.width, term.y + term.height, term.x, term.y + term.height, configuration.segments);
        for (var m = 0; m < segmentArray.length; m++) outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_LINE, term, [ {
          x: segmentArray[m].x,
          y: segmentArray[m].y
        } ]));
        segmentArray = ssr.SVG.Util.Polyline.FromLine(term.x, term.y + term.height, term.x, term.y, configuration.segments);
        for (var m = 0; m < segmentArray.length; m++) outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_LINE, term, [ {
          x: segmentArray[m].x,
          y: segmentArray[m].y
        } ]));
      } else {
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_MOVE, "rect m", term, [ {
          x: term.x,
          y: term.y
        } ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_LINE, "rect l", term, [ {
          x: term.x + term.width,
          y: term.y
        } ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_LINE, "rect l", term, [ {
          x: term.x + term.width,
          y: parseFloat((term.y + term.height).toFixed(3))
        } ], "rect"));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_LINE, "rect l", term, [ {
          x: term.x,
          y: parseFloat((term.y + term.height).toFixed(3))
        } ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_LINE, "rect l", term, [ {
          x: term.x,
          y: term.y
        } ]));
        outArray.push(new ssr.SVG.Data.Stroke(ssr.SVG.Const.RECT, ssr.SVG.Const.RENDER_CLOSE, "rect (z)", term, [ {
          x: term.x,
          y: term.y
        } ]));
      }
    };
    ssr.SVG.Util.Path.FlattenStrokeArray = function(strokeArray, configuration) {
      if (!configuration.enablePaintMode) return [];
      var flattenedArray = [];
      for (var i = 0; i < strokeArray.length; i++) {
        var stroke = strokeArray[i];
        if (stroke.renderType == ssr.SVG.Const.RENDER_CLOSE || stroke.renderType == ssr.SVG.Const.RENDER_END) break;
        var dataArray = stroke.dataArray;
        for (var j = 0; j < dataArray.length; j++) {
          var xx = dataArray[j].x;
          var yy = dataArray[j].y;
          flattenedArray.push({
            x: xx,
            y: yy
          });
        }
      }
      return flattenedArray;
    };
    ssr.SVG.Util.Path.Tessellate = function(strokeArray, fillRule) {
      var contours = ssr.SVG.Util.Path.GroupStrokeArray(strokeArray);
      var tessArray = window.Tess2.tesselate({
        contours: contours,
        windingRule: "evenodd" == fillRule ? Tess2.WINDING_ODD : Tess2.WINDING_NONZERO,
        elementType: Tess2.POLYGONS,
        polySize: 3,
        vertexSize: 2
      });
      var areaTess2 = [];
      for (var i = 0; i < tessArray.elements.length; i += 3) {
        var a = tessArray.elements[i], b = tessArray.elements[i + 1], c = tessArray.elements[i + 2];
        areaTess2.push({
          x: tessArray.vertices[2 * a],
          y: tessArray.vertices[2 * a + 1]
        });
        areaTess2.push({
          x: tessArray.vertices[2 * b],
          y: tessArray.vertices[2 * b + 1]
        });
        areaTess2.push({
          x: tessArray.vertices[2 * c],
          y: tessArray.vertices[2 * c + 1]
        });
      }
      return areaTess2;
    };
    ssr.SVG.Util.Path.GroupStrokeArray = function(strokeArray) {
      var contours = [];
      var contour = [];
      for (var i = 0; i < strokeArray.length; i++) {
        var stroke = strokeArray[i];
        var dataArray = stroke.dataArray;
        if (stroke.renderType == ssr.SVG.Const.RENDER_CLOSE || stroke.renderType == ssr.SVG.Const.RENDER_END) {
          contours.push(contour);
          contour = [];
        } else for (var j = 0; j < dataArray.length; j++) contour.push(dataArray[j].x, dataArray[j].y);
      }
      return contours;
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  SVGUtilRender: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40c2anypiZNn4klvtXZJIxn", "SVGUtilRender");
    "use strict";
    var ssr = require("../namespace/SVGNamespace");
    ssr.SVG.Util.Render = function() {};
    ssr.SVG.Util.Render.fillArea = function(graphicsComponent, svgStrokeArray, configuration) {
      for (var i = 0; i < svgStrokeArray.length; i++) ssr.SVG.Util.Render.draw2(graphicsComponent, svgStrokeArray[i], configuration);
    };
    ssr.SVG.Util.Render.draw = function(graphicsComponent, svgStrokeObject, configuration, skipFill, skipStroke) {
      if (svgStrokeObject.renderType == ssr.SVG.Const.RENDER_MOVE) graphicsComponent.moveTo(configuration.flipX ? -svgStrokeObject.dataArray[0].x + configuration.offset.x : svgStrokeObject.dataArray[0].x - configuration.offset.x, configuration.flipY ? -svgStrokeObject.dataArray[0].y + configuration.offset.y : svgStrokeObject.dataArray[0].y - configuration.offset.y); else if (svgStrokeObject.renderType == ssr.SVG.Const.RENDER_CLOSE) {
        graphicsComponent.close();
        (graphicsComponent.lineWidth > 0 || configuration.enableMergeStroke && !skipStroke) && graphicsComponent.stroke();
        if (!configuration.enablePaintMode && !skipFill) {
          graphicsComponent.fillColor || (graphicsComponent.fillColor = cc.color(0, 0, 0, 255));
          graphicsComponent.fillColor.a > 0 && graphicsComponent.fill();
        }
      } else if (svgStrokeObject.renderType == ssr.SVG.Const.RENDER_LINE) {
        graphicsComponent.lineTo(configuration.flipX ? -svgStrokeObject.dataArray[0].x + configuration.offset.x : svgStrokeObject.dataArray[0].x - configuration.offset.x, configuration.flipY ? -svgStrokeObject.dataArray[0].y + configuration.offset.y : svgStrokeObject.dataArray[0].y - configuration.offset.y);
        configuration.enableMergeStroke || skipStroke || graphicsComponent.stroke();
      } else if (svgStrokeObject.renderType == ssr.SVG.Const.RENDER_POLYLINE) {
        for (var i = 0; i < svgStrokeObject.dataArray.length; i++) graphicsComponent.lineTo(configuration.flipX ? -svgStrokeObject.dataArray[i].x + configuration.offset.x : svgStrokeObject.dataArray[i].x - configuration.offset.x, configuration.flipY ? -svgStrokeObject.dataArray[i].y + configuration.offset.y : svgStrokeObject.dataArray[i].y - configuration.offset.y);
        configuration.enableMergeStroke || skipStroke || graphicsComponent.stroke();
      } else svgStrokeObject.renderType == ssr.SVG.Const.RENDER_END ? (graphicsComponent.lineWidth > 0 || configuration.enableMergeStroke) && !skipStroke && graphicsComponent.stroke() : cc.log("ssr.SVG.Util.Render.draw Unknown TYPE: " + svgStrokeObject.renderType);
    };
    ssr.SVG.Util.Render.paint = function(graphicsComponent, svgStrokeObject, configuration, tess2) {
      if (svgStrokeObject.renderType == ssr.SVG.Const.RENDER_MOVE) graphicsComponent.moveTo(configuration.flipX ? -svgStrokeObject.dataArray[0].x + configuration.offset.x : svgStrokeObject.dataArray[0].x - configuration.offset.x, configuration.flipY ? -svgStrokeObject.dataArray[0].y + configuration.offset.y : svgStrokeObject.dataArray[0].y - configuration.offset.y); else if (svgStrokeObject.renderType == ssr.SVG.Const.RENDER_END || svgStrokeObject.renderType == ssr.SVG.Const.RENDER_CLOSE) graphicsComponent.fill(); else if (svgStrokeObject.renderType == ssr.SVG.Const.RENDER_LINE) graphicsComponent.lineTo(configuration.flipX ? -svgStrokeObject.dataArray[0].x + configuration.offset.x : svgStrokeObject.dataArray[0].x - configuration.offset.x, configuration.flipY ? -svgStrokeObject.dataArray[0].y + configuration.offset.y : svgStrokeObject.dataArray[0].y - configuration.offset.y); else if (svgStrokeObject.renderType == ssr.SVG.Const.RENDER_POLYLINE) for (var i = 0; i < svgStrokeObject.dataArray.length; i++) graphicsComponent.lineTo(configuration.flipX ? -svgStrokeObject.dataArray[i].x + configuration.offset.x : svgStrokeObject.dataArray[i].x - configuration.offset.x, configuration.flipY ? -svgStrokeObject.dataArray[i].y + configuration.offset.y : svgStrokeObject.dataArray[i].y - configuration.offset.y); else svgStrokeObject.renderType == ssr.SVG.Const.RENDER_CLOSE || cc.log("ssr.SVG.Util.Render.draw Unknown TYPE: " + svgStrokeObject.renderType);
    };
    ssr.SVG.Util.Render.fillTess2 = function(graphicsComponent, areaTess2, configuration) {
      if (configuration.enablePaintMode) return;
      configuration.enableMergeStroke && graphicsComponent.stroke();
      for (var i = 0; i < areaTess2.length; i += 3) {
        var a = areaTess2[i], b = areaTess2[i + 1], c = areaTess2[i + 2];
        graphicsComponent.moveTo(configuration.flipX ? -a.x + configuration.offset.x : a.x - configuration.offset.x, configuration.flipY ? -a.y + configuration.offset.y : a.y - configuration.offset.y);
        graphicsComponent.lineTo(configuration.flipX ? -b.x + configuration.offset.x : b.x - configuration.offset.x, configuration.flipY ? -b.y + configuration.offset.y : b.y - configuration.offset.y);
        graphicsComponent.lineTo(configuration.flipX ? -c.x + configuration.offset.x : c.x - configuration.offset.x, configuration.flipY ? -c.y + configuration.offset.y : c.y - configuration.offset.y);
      }
      graphicsComponent.fill();
    };
    ssr.SVG.Util.Render.paintTess2 = function(graphicsComponent, areaTess2, configuration) {
      for (var i = 0; i < areaTess2.length; i += 3) {
        var a = areaTess2[i], b = areaTess2[i + 1], c = areaTess2[i + 2];
        graphicsComponent.moveTo(configuration.flipX ? -a.x + configuration.offset.x : a.x - configuration.offset.x, configuration.flipY ? -a.y + configuration.offset.y : a.y - configuration.offset.y);
        graphicsComponent.lineTo(configuration.flipX ? -b.x + configuration.offset.x : b.x - configuration.offset.x, configuration.flipY ? -b.y + configuration.offset.y : b.y - configuration.offset.y);
        graphicsComponent.lineTo(configuration.flipX ? -c.x + configuration.offset.x : c.x - configuration.offset.x, configuration.flipY ? -c.y + configuration.offset.y : c.y - configuration.offset.y);
      }
      graphicsComponent.fill();
    };
    cc._RF.pop();
  }, {
    "../namespace/SVGNamespace": "SVGNamespace"
  } ],
  TestList: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "21bcar891NPOIJgXjaR4cFQ", "TestList");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {},
      start: function start() {
        cc.debug.setDisplayStats(true);
      },
      onDestroy: function onDestroy() {},
      toTestCase: function toTestCase(event, data) {
        cc.director.loadScene(data);
      }
    });
    cc._RF.pop();
  }, {} ],
  Testcase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f886b0PuIFM9K3IUI4p+3BL", "Testcase");
    "use strict";
    var ssr = require("./ssr/svg/namespace/SVGNamespace");
    cc.Class({
      extends: cc.Component,
      properties: {},
      onLoad: function onLoad() {
        cc.debug.setDisplayStats(true);
        this._testcase = cc.director.getScene().name;
        cc.Canvas.instance.node.getChildByName("Title").getComponent(cc.Label).string = "Testcase - " + this._testcase;
      },
      lazyLoad: function lazyLoad() {
        if ("Yoga" == this._testcase) {
          cc.Canvas.instance.node.getChildByName("SVGNode").getComponent(ssr.SVG.Component).drawAll();
          cc.Canvas.instance.node.getChildByName("SVGNodeSample").getComponent(ssr.SVG.Component).drawAll();
        } else if ("Cat" == this._testcase) this.SVGNode = cc.Canvas.instance.node.getChildByName("SVGNode").getComponent(ssr.SVG.Component); else if ("Toucan" == this._testcase) cc.Canvas.instance.node.getChildByName("SVGNode").getComponent(ssr.SVG.Component).drawAll(); else if ("Hanzi" == this._testcase) {
          cc.Canvas.instance.node.getChildByName("Normal").getChildByName("SVGNode1").getComponent(ssr.SVG.Component).drawAll();
          cc.Canvas.instance.node.getChildByName("Normal").getChildByName("SVGNode2").getComponent(ssr.SVG.Component).drawAll();
          cc.Canvas.instance.node.getChildByName("Normal").getChildByName("SVGNode3").getComponent(ssr.SVG.Component).drawAll();
          cc.Canvas.instance.node.getChildByName("Normal").getChildByName("SVGNode4").getComponent(ssr.SVG.Component).drawAll();
          cc.Canvas.instance.node.getChildByName("Normal").getChildByName("SVGNode5").getComponent(ssr.SVG.Component).drawAll();
          cc.Canvas.instance.node.getChildByName("Normal").getChildByName("SVGNode6").getComponent(ssr.SVG.Component).drawAll();
          this.SVGNode1SegmentationOff = cc.Canvas.instance.node.getChildByName("SegmentationOff").getChildByName("SVGNode1").getComponent(ssr.SVG.Component);
          this.SVGNode2SegmentationOff = cc.Canvas.instance.node.getChildByName("SegmentationOff").getChildByName("SVGNode2").getComponent(ssr.SVG.Component);
          this.SVGNode3SegmentationOff = cc.Canvas.instance.node.getChildByName("SegmentationOff").getChildByName("SVGNode3").getComponent(ssr.SVG.Component);
          this.SVGNode4SegmentationOff = cc.Canvas.instance.node.getChildByName("SegmentationOff").getChildByName("SVGNode4").getComponent(ssr.SVG.Component);
          this.SVGNode5SegmentationOff = cc.Canvas.instance.node.getChildByName("SegmentationOff").getChildByName("SVGNode5").getComponent(ssr.SVG.Component);
          this.SVGNode6SegmentationOff = cc.Canvas.instance.node.getChildByName("SegmentationOff").getChildByName("SVGNode6").getComponent(ssr.SVG.Component);
          this.SVGNode1SegmentationOn = cc.Canvas.instance.node.getChildByName("SegmentationOn").getChildByName("SVGNode1").getComponent(ssr.SVG.Component);
          this.SVGNode2SegmentationOn = cc.Canvas.instance.node.getChildByName("SegmentationOn").getChildByName("SVGNode2").getComponent(ssr.SVG.Component);
          this.SVGNode3SegmentationOn = cc.Canvas.instance.node.getChildByName("SegmentationOn").getChildByName("SVGNode3").getComponent(ssr.SVG.Component);
          this.SVGNode4SegmentationOn = cc.Canvas.instance.node.getChildByName("SegmentationOn").getChildByName("SVGNode4").getComponent(ssr.SVG.Component);
          this.SVGNode5SegmentationOn = cc.Canvas.instance.node.getChildByName("SegmentationOn").getChildByName("SVGNode5").getComponent(ssr.SVG.Component);
          this.SVGNode6SegmentationOn = cc.Canvas.instance.node.getChildByName("SegmentationOn").getChildByName("SVGNode6").getComponent(ssr.SVG.Component);
          this.scheduleOnce(function() {
            this.auto();
          }, 1);
        } else if ("Icons" == this._testcase || "Shapes" == this._testcase || "Paths" == this._testcase || "FillRule" == this._testcase || "Scalability" == this._testcase) {
          var groups = cc.Canvas.instance.node.getChildByName("Group");
          for (var i = 0; i < groups.children.length; i++) groups.children[i].getComponent(ssr.SVG.Component) && groups.children[i].getComponent(ssr.SVG.Component).drawAll();
        } else if ("Tiger" == this._testcase) {
          this.SVGNode = cc.Canvas.instance.node.getChildByName("SVGNode").getComponent(ssr.SVG.Component);
          this.strokeIndexInfo = cc.Canvas.instance.node.getChildByName("PathInfoGroup").getChildByName("StrokeIndexInfoLabel").getComponent(cc.Label);
          this.strokeWidthInfo = cc.Canvas.instance.node.getChildByName("PathInfoGroup").getChildByName("StrokeWidthInfoLabel").getComponent(cc.Label);
          this.strokeColorInfo = cc.Canvas.instance.node.getChildByName("PathInfoGroup").getChildByName("StrokeColorInfoLabel").getComponent(cc.Label);
          this.fillColorInfo = cc.Canvas.instance.node.getChildByName("PathInfoGroup").getChildByName("FillColorInfoLabel").getComponent(cc.Label);
          this.instructionInfo = cc.Canvas.instance.node.getChildByName("PathInfoGroup").getChildByName("InstrunctionInfoLabel").getComponent(cc.Label);
          this.commandIndexInfo = cc.Canvas.instance.node.getChildByName("PathInfoGroup").getChildByName("CommandIndexInfoLabel").getComponent(cc.Label);
        } else if ("Tessellate" == this._testcase) {
          this.graphicsEarCut = cc.Canvas.instance.node.getChildByName("GroupEarcut").getChildByName("GraphicsEarCut").getComponent(cc.Graphics);
          this.GraphicsTess2 = cc.Canvas.instance.node.getChildByName("GroupTess2").getChildByName("GraphicsTess2").getComponent(cc.Graphics);
          var outterRect = [ cc.v2(-100, -100), cc.v2(100, -100), cc.v2(100, 100), cc.v2(-100, 100) ];
          var innerRect = [ cc.v2(-50, -50), cc.v2(50, -50), cc.v2(50, 50), cc.v2(-50, 50) ];
          var outterRectVertex = [ -100, -100, 100, -100, 100, 100, -100, 100 ];
          var innerRectVertex = [ -50, -50, 50, -50, 50, 50, -50, 50 ];
          var earcutRectVertex = [ -100, -100, 100, -100, 100, 100, -100, 100, -50, -50, 50, -50, 50, 50, -50, 50 ];
          var earcutResult = cc.Graphics.earcut(earcutRectVertex, [ 4 ], 2);
          for (var i = 0; i < earcutResult.length; i += 3) {
            this.graphicsEarCut.moveTo(earcutRectVertex[2 * earcutResult[i]], earcutRectVertex[2 * earcutResult[i] + 1]);
            this.graphicsEarCut.lineTo(earcutRectVertex[2 * earcutResult[i + 1]], earcutRectVertex[2 * earcutResult[i + 1] + 1]);
            this.graphicsEarCut.lineTo(earcutRectVertex[2 * earcutResult[i + 2]], earcutRectVertex[2 * earcutResult[i + 2] + 1]);
            this.graphicsEarCut.fillColor = cc.color(255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255);
            this.graphicsEarCut.close();
            this.graphicsEarCut.fill();
          }
          var tess2RectVertex = [ -100, -100, 100, -100, 100, 100, -100, 100, -100, -100, -50, -50, 50, -50, 50, 50, -50, 50, -50, -50 ];
          var tess2Result = window.Tess2.tesselate({
            contours: [ tess2RectVertex ],
            windingRule: Tess2.WINDING_ODD,
            elementType: Tess2.POLYGONS,
            polySize: 3,
            vertexSize: 2
          });
          for (var i = 0; i < tess2Result.elements.length; i += 3) {
            this.GraphicsTess2.moveTo(tess2Result.vertices[2 * tess2Result.elements[i]], tess2Result.vertices[2 * tess2Result.elements[i] + 1]);
            this.GraphicsTess2.lineTo(tess2Result.vertices[2 * tess2Result.elements[i + 1]], tess2Result.vertices[2 * tess2Result.elements[i + 1] + 1]);
            this.GraphicsTess2.lineTo(tess2Result.vertices[2 * tess2Result.elements[i + 2]], tess2Result.vertices[2 * tess2Result.elements[i + 2] + 1]);
            this.GraphicsTess2.fillColor = cc.color(255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255);
            this.GraphicsTess2.close();
            this.GraphicsTess2.fill();
          }
          this.graphicsEarCut2 = cc.Canvas.instance.node.getChildByName("GroupEarcut").getChildByName("GraphicsEarCut2").getComponent(cc.Graphics);
          this.GraphicsTess22 = cc.Canvas.instance.node.getChildByName("GroupTess2").getChildByName("GraphicsTess22").getComponent(cc.Graphics);
          var earcutRectVertex2 = [ 50, 0, 21, 90, 98, 35, 2, 35, 79, 90, 50, 0 ];
          var earcutResult2 = cc.Graphics.earcut(earcutRectVertex2, null, 2);
          for (var i = 0; i < earcutResult2.length; i += 3) {
            this.graphicsEarCut2.moveTo(earcutRectVertex2[2 * earcutResult2[i]], earcutRectVertex2[2 * earcutResult2[i] + 1]);
            this.graphicsEarCut2.lineTo(earcutRectVertex2[2 * earcutResult2[i + 1]], earcutRectVertex2[2 * earcutResult2[i + 1] + 1]);
            this.graphicsEarCut2.lineTo(earcutRectVertex2[2 * earcutResult2[i + 2]], earcutRectVertex2[2 * earcutResult2[i + 2] + 1]);
            this.graphicsEarCut2.fillColor = cc.color(255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255);
            this.graphicsEarCut2.close();
            this.graphicsEarCut2.fill();
          }
          var tess2RectVertex2 = [ 50, 0, 21, 90, 98, 35, 2, 35, 79, 90, 50, 0 ];
          var tess2Result2 = window.Tess2.tesselate({
            contours: [ tess2RectVertex2 ],
            windingRule: Tess2.WINDING_NONZERO,
            elementType: Tess2.POLYGONS,
            polySize: 3,
            vertexSize: 2
          });
          for (var i = 0; i < tess2Result2.elements.length; i += 3) {
            this.GraphicsTess22.moveTo(tess2Result2.vertices[2 * tess2Result2.elements[i]], tess2Result2.vertices[2 * tess2Result2.elements[i] + 1]);
            this.GraphicsTess22.lineTo(tess2Result2.vertices[2 * tess2Result2.elements[i + 1]], tess2Result2.vertices[2 * tess2Result2.elements[i + 1] + 1]);
            this.GraphicsTess22.lineTo(tess2Result2.vertices[2 * tess2Result2.elements[i + 2]], tess2Result2.vertices[2 * tess2Result2.elements[i + 2] + 1]);
            this.GraphicsTess22.fillColor = cc.color(255 * Math.random(), 255 * Math.random(), 255 * Math.random(), 255);
            this.GraphicsTess22.close();
            this.GraphicsTess22.fill();
          }
        }
      },
      start: function start() {
        this.scheduleOnce(this.lazyLoad, .1);
      },
      onDestroy: function onDestroy() {
        cc.sys.garbageCollect();
      },
      update: function update() {},
      updateLabelInfo: function updateLabelInfo() {
        this.strokeIndexInfo.string = this.SVGNode.getStrokeIndex() + " / " + this.SVGNode.getStrokeCount();
        this.commandIndexInfo.string = this.SVGNode.getCommandIndex() + " / " + this.SVGNode.getCommandCount();
        this.strokeWidthInfo.string = this.SVGNode.graphics.lineWidth;
        this.strokeColorInfo.string = this.SVGNode.graphics.strokeColor;
        this.strokeColorInfo.node.color = this.SVGNode.graphics.strokeColor;
        this.fillColorInfo.string = this.SVGNode.graphics.fillColor;
        this.fillColorInfo.node.color = this.SVGNode.graphics.fillColor;
        this.SVGNode.getStrokeObject() && (this.instructionInfo.string = this.SVGNode.getStrokeObject().instrunction);
      },
      load: function load() {
        "Cat" == this._testcase && this.SVGNode.loadSVGJson("svg/freesvg-org/Carefree-Kitty");
      },
      draw: function draw() {
        "Cat" == this._testcase && this.schedule(this.autoCatTimer);
      },
      autoCatTimer: function autoCatTimer() {
        for (var i = 0; i < 300; i++) this.SVGNode.draw() || this.unschedule(this.autoCatTimer);
      },
      auto: function auto() {
        this.autoSegmentationOff();
        this.autoSegmentationOn();
      },
      autoSegmentationOff: function autoSegmentationOff() {
        if ("Hanzi" == this._testcase) {
          this.SVGNode1SegmentationOff.resetRender();
          this.SVGNode2SegmentationOff.resetRender();
          this.SVGNode3SegmentationOff.resetRender();
          this.SVGNode4SegmentationOff.resetRender();
          this.SVGNode5SegmentationOff.resetRender();
          this.SVGNode6SegmentationOff.resetRender();
          this.schedule(this.autoSegmentationOffTimer, .2);
        } else if ("Tiger" == this._testcase) {
          this.SVGNode.resetRender();
          this.SVGNode.segmentationOn = false;
          this.SVGNode.enableMergeStroke = true;
          this.SVGNode.enableGlobalStrokeColor = false;
          this.SVGNode.enableGlobalStrokeWidth = false;
          this.SVGNode.updateConfiguration();
          this.schedule(this.autoSegmentationOffTimer);
        }
      },
      autoSegmentationOffTimer: function autoSegmentationOffTimer() {
        if ("Hanzi" == this._testcase) this.SVGNode1SegmentationOff.draw() || this.SVGNode2SegmentationOff.draw() || this.SVGNode3SegmentationOff.draw() || this.SVGNode4SegmentationOff.draw() || this.SVGNode5SegmentationOff.draw() || this.SVGNode6SegmentationOff.draw() || this.unschedule(this.autoSegmentationOffTimer); else if ("Tiger" == this._testcase) {
          this.updateLabelInfo();
          this.SVGNode.draw() || this.unschedule(this.autoSegmentationOffTimer);
        }
      },
      autoSegmentationOn: function autoSegmentationOn() {
        if ("Hanzi" == this._testcase) {
          this.SVGNode1SegmentationOn.resetRender();
          this.SVGNode2SegmentationOn.resetRender();
          this.SVGNode3SegmentationOn.resetRender();
          this.SVGNode4SegmentationOn.resetRender();
          this.SVGNode5SegmentationOn.resetRender();
          this.SVGNode6SegmentationOn.resetRender();
          this.schedule(this.autoSegmentationOnTimer);
        } else if ("Tiger" == this._testcase) {
          this.SVGNode.resetRender();
          this.SVGNode.segmentationOn = true;
          this.SVGNode.enableMergeStroke = false;
          this.SVGNode.enableGlobalStrokeColor = true;
          this.SVGNode.enableGlobalStrokeWidth = true;
          this.SVGNode.globalStrokeColor = cc.Color.BLACK;
          this.SVGNode.globalStrokeWidth = 2;
          this.SVGNode.updateConfiguration();
          this.schedule(this.autoSegmentationOnTimer);
        }
      },
      autoSegmentationOnTimer: function autoSegmentationOnTimer() {
        if ("Hanzi" == this._testcase) this.SVGNode1SegmentationOn.draw() || this.SVGNode2SegmentationOn.draw() || this.SVGNode3SegmentationOn.draw() || this.SVGNode4SegmentationOn.draw() || this.SVGNode5SegmentationOn.draw() || this.SVGNode6SegmentationOn.draw() || this.unschedule(this.autoSegmentationOnTimer); else if ("Tiger" == this._testcase) {
          this.SVGNode.draw();
          this.updateLabelInfo();
          this.SVGNode.draw() || this.unschedule(this.autoSegmentationOnTimer);
        }
      },
      back: function back() {
        cc.director.loadScene("TestList");
      }
    });
    cc._RF.pop();
  }, {
    "./ssr/svg/namespace/SVGNamespace": "SVGNamespace"
  } ],
  TileManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d5823c5BFxN+5ziKwfLJ0G/", "TileManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Tile_1 = require("../component/Tile");
    var Enum_1 = require("../type/Enum");
    var GameConfig_1 = require("../../data/GameConfig");
    var GameUtil_1 = require("../util/GameUtil");
    var PoolManager_1 = require("./PoolManager");
    var MapManager_1 = require("./MapManager");
    var DataStructure_1 = require("../type/DataStructure");
    var GameEvent_1 = require("../../common/GameEvent");
    var OrientationManager_1 = require("./OrientationManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TileManager = function(_super) {
      __extends(TileManager, _super);
      function TileManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.container = null;
        _this.typeMap = null;
        _this.tileMap = null;
        _this.combinations = null;
        _this.selectedCoord = null;
        _this.tileTouchStartPos = null;
        return _this;
      }
      TileManager_1 = TileManager;
      TileManager.prototype.onLoad = function() {
        TileManager_1.instance = this;
        GameEvent_1.GameEvent.on(Enum_1.TileEvent.TouchStart, this.onTileTouchStart, this);
        GameEvent_1.GameEvent.on(Enum_1.TileEvent.TouchEnd, this.onTileTouchEnd, this);
        GameEvent_1.GameEvent.on(Enum_1.TileEvent.TouchCancel, this.onTileTouchCancel, this);
      };
      TileManager.prototype.onDestroy = function() {
        GameEvent_1.GameEvent.off(Enum_1.TileEvent.TouchStart, this.onTileTouchStart, this);
        GameEvent_1.GameEvent.off(Enum_1.TileEvent.TouchEnd, this.onTileTouchEnd, this);
        GameEvent_1.GameEvent.off(Enum_1.TileEvent.TouchCancel, this.onTileTouchCancel, this);
      };
      TileManager.init = function() {
        this.instance.generateInitTypeMap();
        this.instance.generateTiles();
      };
      TileManager.prototype.generateInitTypeMap = function() {
        this.typeMap = GameUtil_1.default.getInitTypeMap();
        GameUtil_1.default.hasValidCombo(this.typeMap) || (this.typeMap = GameUtil_1.default.getInitTypeMap());
      };
      TileManager.prototype.generateTiles = function() {
        this.tileMap = [];
        for (var c = 0; c < GameConfig_1.default.col; c++) {
          var colTileSet = [];
          for (var r = 0; r < GameConfig_1.default.row; r++) colTileSet.push(this.getNewTile(c, r, this.typeMap[c][r]));
          this.tileMap.push(colTileSet);
        }
      };
      TileManager.prototype.getNewTile = function(x, y, type) {
        var node = PoolManager_1.default.get();
        node.setParent(this.container);
        node.setPosition(MapManager_1.default.getPos(x, y));
        var tile = node.getComponent(Tile_1.default);
        tile.init();
        tile.setCoord(x, y);
        tile.setType(type);
        tile.appear();
        return tile;
      };
      TileManager.prototype.onTileTouchStart = function(coord, pos) {
        cc.log("\u70b9\u51fb | coord: " + coord.toString() + " | type: " + this.getType(coord));
        if (this.selectedCoord) if (this.selectedCoord.compare(coord)) this.tileTouchStartPos = pos; else if (this.selectedCoord.isAdjacent(coord)) {
          this.tryExchangeByTouch(this.selectedCoord, coord);
          this.setSelectedTile(null);
        } else {
          this.tileTouchStartPos = pos;
          this.setSelectedTile(coord);
        } else {
          this.tileTouchStartPos = pos;
          this.setSelectedTile(coord);
        }
      };
      TileManager.prototype.onTileTouchEnd = function() {
        this.tileTouchStartPos = null;
      };
      TileManager.prototype.onTileTouchCancel = function(coord, cancelPos) {
        if (!this.tileTouchStartPos) return;
        this.tryExchangeBySlid(coord, GameUtil_1.default.getSlidDirection(this.tileTouchStartPos, cancelPos));
        this.tileTouchStartPos = null;
      };
      TileManager.prototype.setSelectedTile = function(coord) {
        this.selectedCoord = coord;
        coord ? GameEvent_1.GameEvent.emit("selected", coord) : GameEvent_1.GameEvent.emit("selected", new DataStructure_1.Coordinate(-100, -100));
      };
      TileManager.prototype.tryExchangeByTouch = function(coord1, coord2) {
        cc.log("\u5c1d\u8bd5\u70b9\u51fb\u4ea4\u6362\u65b9\u5757 | coord1: " + coord1.toString() + " | coord2: " + coord2.toString());
        this.tryExchange(coord1, coord2);
      };
      TileManager.prototype.tryExchangeBySlid = function(coord, direction) {
        cc.log("\u70b9\u51fb\u4ea4\u6362\u65b9\u5757 | coord1: " + coord.toString() + " | direction: " + direction);
        var targetCoord = GameUtil_1.default.getCoordByDirection(coord, direction);
        if (targetCoord) {
          this.tryExchange(coord, targetCoord);
          this.setSelectedTile(null);
        }
      };
      TileManager.prototype.tryExchange = function(coord1, coord2) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, this.exchangeTiles(coord1, coord2) ];

             case 1:
              _a.sent();
              this.combinations = GameUtil_1.default.getCombinations(this.typeMap);
              if (!(this.combinations.length > 0)) return [ 3, 8 ];
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 250);
              }) ];

             case 2:
              _a.sent();
              this.eliminateCombinations();
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 250);
              }) ];

             case 3:
              _a.sent();
              return [ 4, this.falldown(OrientationManager_1.default.GetDir()) ];

             case 4:
              _a.sent();
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 250);
              }) ];

             case 5:
              _a.sent();
              return [ 4, this.fillEmpty() ];

             case 6:
              _a.sent();
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 250);
              }) ];

             case 7:
              _a.sent();
              this.keepCheckingUntilNoMoreCombiantion();
              return [ 3, 10 ];

             case 8:
              return [ 4, this.exchangeTiles(coord1, coord2) ];

             case 9:
              _a.sent();
              _a.label = 10;

             case 10:
              return [ 2 ];
            }
          });
        });
      };
      TileManager.prototype.exchangeTiles = function(coord1, coord2) {
        return __awaiter(this, void 0, void 0, function() {
          var tile1, tile2, tile1Type, tile2Type;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              tile1 = this.getTile(coord1);
              tile2 = this.getTile(coord2);
              tile1Type = this.getType(coord1);
              tile2Type = this.getType(coord2);
              tile1.setCoord(coord2);
              tile2.setCoord(coord1);
              this.setType(coord1, tile2Type);
              this.setType(coord2, tile1Type);
              this.setTile(coord1, tile2);
              this.setTile(coord2, tile1);
              cc.tween(tile1.node).to(.1, {
                position: cc.v3(MapManager_1.default.getPos(coord2))
              }).start();
              cc.tween(tile2.node).to(.1, {
                position: cc.v3(MapManager_1.default.getPos(coord1))
              }).start();
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 100);
              }) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      TileManager.prototype.eliminateCombinations = function() {
        for (var i = 0; i < this.combinations.length; i++) for (var j = 0; j < this.combinations[i].coords.length; j++) this.eliminateTile(this.combinations[i].coords[j]);
        this.combinations = [];
      };
      TileManager.prototype.eliminateTile = function(coord) {
        this.getTile(coord).disappear();
        this.setTile(coord, null);
        this.setType(coord, null);
      };
      TileManager.prototype.falldown = function(dir) {
        return __awaiter(this, void 0, void 0, function() {
          var promises, _loop_1, this_1, c;
          var _this = this;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              promises = [];
              _loop_1 = function(c) {
                var _loop_2 = function(r) {
                  if (!this_1.getType(c, r)) {
                    var _loop_3 = function(nr) {
                      if (this_1.getType(c, nr)) {
                        this_1.setType(c, r, this_1.getType(c, nr));
                        this_1.setTile(c, r, this_1.getTile(c, nr));
                        this_1.getTile(c, r).setCoord(c, r);
                        this_1.setTile(c, nr, null);
                        this_1.setType(c, nr, null);
                        var fallPos_1 = MapManager_1.default.getPos(c, r);
                        var fallTime_1 = .1 * (nr - r);
                        promises.push(new Promise(function(res) {
                          cc.tween(_this.getTile(c, r).node).to(fallTime_1, {
                            position: cc.v3(fallPos_1.x, fallPos_1.y - 10)
                          }).to(.05, {
                            position: cc.v3(fallPos_1)
                          }).call(function() {
                            return res();
                          }).start();
                        }));
                        return "break";
                      }
                    };
                    for (var nr = r + 1; nr < GameConfig_1.default.row; nr++) {
                      var state_1 = _loop_3(nr);
                      if ("break" === state_1) break;
                    }
                  }
                };
                for (var r = 0; r < GameConfig_1.default.row; r++) _loop_2(r);
              };
              this_1 = this;
              for (c = 0; c < GameConfig_1.default.col; c++) _loop_1(c);
              return [ 4, Promise.all(promises) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      TileManager.prototype.fillEmpty = function() {
        return __awaiter(this, void 0, void 0, function() {
          var c, r, type, tile;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              for (c = 0; c < GameConfig_1.default.col; c++) for (r = 0; r < GameConfig_1.default.row; r++) if (!this.getType(c, r)) {
                type = GameUtil_1.default.getRandomType();
                tile = this.getNewTile(c, r, type);
                this.setTile(c, r, tile);
                this.setType(c, r, type);
              }
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 100);
              }) ];

             case 1:
              _a.sent();
              return [ 2 ];
            }
          });
        });
      };
      TileManager.prototype.keepCheckingUntilNoMoreCombiantion = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.combinations = GameUtil_1.default.getCombinations(this.typeMap);
              _a.label = 1;

             case 1:
              if (!(this.combinations.length > 0)) return [ 3, 8 ];
              this.eliminateCombinations();
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 250);
              }) ];

             case 2:
              _a.sent();
              return [ 4, this.falldown(OrientationManager_1.default.GetDir()) ];

             case 3:
              _a.sent();
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 250);
              }) ];

             case 4:
              _a.sent();
              return [ 4, this.fillEmpty() ];

             case 5:
              _a.sent();
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 250);
              }) ];

             case 6:
              _a.sent();
              this.combinations = GameUtil_1.default.getCombinations(this.typeMap);
              return [ 4, new Promise(function(res) {
                return setTimeout(res, 250);
              }) ];

             case 7:
              _a.sent();
              return [ 3, 1 ];

             case 8:
              if (!GameUtil_1.default.hasValidCombo(this.typeMap)) {
                this.removeAllTiles();
                this.generateInitTypeMap();
                this.generateTiles();
              }
              return [ 2 ];
            }
          });
        });
      };
      TileManager.prototype.removeAllTiles = function() {
        this.tileMap.forEach(function(tileLine) {
          tileLine.forEach(function(tile) {
            tile.disappear();
          });
        });
      };
      TileManager.prototype.getType = function(x, y) {
        return "number" === typeof x ? this.typeMap[x][y] : this.typeMap[x.x][x.y];
      };
      TileManager.prototype.setType = function(x, y, type) {
        "number" === typeof x ? this.typeMap[x][y] = type : this.typeMap[x.x][x.y] = y;
      };
      TileManager.prototype.getTile = function(x, y) {
        return "number" === typeof x ? this.tileMap[x][y] : this.tileMap[x.x][x.y];
      };
      TileManager.prototype.setTile = function(x, y, tile) {
        "number" === typeof x ? this.tileMap[x][y] = tile : this.tileMap[x.x][x.y] = y;
      };
      var TileManager_1;
      TileManager.instance = null;
      __decorate([ property(cc.Node) ], TileManager.prototype, "container", void 0);
      TileManager = TileManager_1 = __decorate([ ccclass ], TileManager);
      return TileManager;
    }(cc.Component);
    exports.default = TileManager;
    cc._RF.pop();
  }, {
    "../../common/GameEvent": "GameEvent",
    "../../data/GameConfig": "GameConfig",
    "../component/Tile": "Tile",
    "../type/DataStructure": "DataStructure",
    "../type/Enum": "Enum",
    "../util/GameUtil": "GameUtil",
    "./MapManager": "MapManager",
    "./OrientationManager": "OrientationManager",
    "./PoolManager": "PoolManager"
  } ],
  Tile: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d77ecWeGNJooTeQFx6/82+", "Tile");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../type/Enum");
    var DataStructure_1 = require("../type/DataStructure");
    var ResManager_1 = require("../manager/ResManager");
    var PoolManager_1 = require("../manager/PoolManager");
    var GameEvent_1 = require("../../common/GameEvent");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Tile = function(_super) {
      __extends(Tile, _super);
      function Tile() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this._type = null;
        _this._coord = null;
        return _this;
      }
      Object.defineProperty(Tile.prototype, "type", {
        get: function() {
          return this._type;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(Tile.prototype, "coord", {
        get: function() {
          return this._coord;
        },
        enumerable: false,
        configurable: true
      });
      Tile.prototype.onLoad = function() {
        this.sprite = this.getComponent("FBONodeTargetComponent");
        this.bindTouchEvents();
      };
      Tile.prototype.onDestroy = function() {
        this.unbindTouchEvents();
      };
      Tile.prototype.reuse = function() {
        this.bindTouchEvents();
      };
      Tile.prototype.unuse = function() {
        this.unbindTouchEvents();
      };
      Tile.prototype.onTouchStart = function(e) {
        GameEvent_1.GameEvent.emit(Enum_1.TileEvent.TouchStart, this._coord.copy(), e.getLocation());
      };
      Tile.prototype.onTouchEnd = function() {
        GameEvent_1.GameEvent.emit(Enum_1.TileEvent.TouchEnd);
      };
      Tile.prototype.onTouchCancel = function(e) {
        GameEvent_1.GameEvent.emit(Enum_1.TileEvent.TouchCancel, this._coord.copy(), e.getLocation());
      };
      Tile.prototype.onSelected = function(e) {
        this.coord.compare(e) ? this.node.anchorY = .6 : this.node.anchorY = .5;
      };
      Tile.prototype.bindTouchEvents = function() {
        this.node.on("touchstart", this.onTouchStart, this);
        this.node.on("touchcancel", this.onTouchCancel, this);
        this.node.on("touchend", this.onTouchEnd, this);
        GameEvent_1.GameEvent.on("selected", this.onSelected, this);
      };
      Tile.prototype.unbindTouchEvents = function() {
        this.node.off("touchstart", this.onTouchStart, this);
        this.node.off("touchcancel", this.onTouchCancel, this);
        this.node.off("touchend", this.onTouchEnd, this);
        GameEvent_1.GameEvent.off("selected", this.onSelected, this);
      };
      Tile.prototype.init = function() {
        this._type = null;
        this.sprite.target = null;
        this.setCoord(-1, -1);
        this.node.setScale(0);
      };
      Tile.prototype.setType = function(type) {
        this._type = type;
        this.updateDisplay();
      };
      Tile.prototype.updateDisplay = function() {
        this.sprite.target = ResManager_1.default.getTileSpriteFrame(this._type);
      };
      Tile.prototype.setCoord = function(x, y) {
        this._coord || (this._coord = DataStructure_1.Coord());
        "number" === typeof x ? this._coord.set(x, y) : this._coord.set(x);
      };
      Tile.prototype.appear = function() {
        cc.tween(this.node).to(.075, {
          scaleX: 1.1,
          scaleY: -1.1
        }).to(.025, {
          scale: 1,
          scaleY: -1
        }).start();
      };
      Tile.prototype.disappear = function() {
        var _this = this;
        cc.tween(this.node).to(.1, {
          scale: 0
        }).call(function() {
          return PoolManager_1.default.put(_this.node);
        }).start();
      };
      Tile = __decorate([ ccclass ], Tile);
      return Tile;
    }(cc.Component);
    exports.default = Tile;
    cc._RF.pop();
  }, {
    "../../common/GameEvent": "GameEvent",
    "../manager/PoolManager": "PoolManager",
    "../manager/ResManager": "ResManager",
    "../type/DataStructure": "DataStructure",
    "../type/Enum": "Enum"
  } ]
}, {}, [ "TestList", "Testcase", "GameEvent", "GameConfig", "Game", "Tile", "MapManager", "OrientationManager", "PoolManager", "ResManager", "TileManager", "DataStructure", "Enum", "GameUtil", "FBONodeComponent", "FBONodeTargetComponent", "SVGComponent", "SVGConst", "SVGDataArea", "SVGDataCommand", "SVGDataRoot", "SVGDataStroke", "SVGNamespace", "SVGParser", "SVGPolylineUtil", "SVGUtilCommon", "SVGUtilPath", "SVGUtilRender" ]);