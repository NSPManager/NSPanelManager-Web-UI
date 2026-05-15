/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const NSPanelEntityState = $root.NSPanelEntityState = (() => {

    /**
     * Properties of a NSPanelEntityState.
     * @exports INSPanelEntityState
     * @interface INSPanelEntityState
     * @property {NSPanelEntityState.ILight|null} [light] NSPanelEntityState light
     * @property {NSPanelEntityState.IThermostat|null} [thermostat] NSPanelEntityState thermostat
     */

    /**
     * Constructs a new NSPanelEntityState.
     * @exports NSPanelEntityState
     * @classdesc Represents a NSPanelEntityState.
     * @implements INSPanelEntityState
     * @constructor
     * @param {INSPanelEntityState=} [properties] Properties to set
     */
    function NSPanelEntityState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NSPanelEntityState light.
     * @member {NSPanelEntityState.ILight|null|undefined} light
     * @memberof NSPanelEntityState
     * @instance
     */
    NSPanelEntityState.prototype.light = null;

    /**
     * NSPanelEntityState thermostat.
     * @member {NSPanelEntityState.IThermostat|null|undefined} thermostat
     * @memberof NSPanelEntityState
     * @instance
     */
    NSPanelEntityState.prototype.thermostat = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * NSPanelEntityState entity.
     * @member {"light"|"thermostat"|undefined} entity
     * @memberof NSPanelEntityState
     * @instance
     */
    Object.defineProperty(NSPanelEntityState.prototype, "entity", {
        get: $util.oneOfGetter($oneOfFields = ["light", "thermostat"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new NSPanelEntityState instance using the specified properties.
     * @function create
     * @memberof NSPanelEntityState
     * @static
     * @param {INSPanelEntityState=} [properties] Properties to set
     * @returns {NSPanelEntityState} NSPanelEntityState instance
     */
    NSPanelEntityState.create = function create(properties) {
        return new NSPanelEntityState(properties);
    };

    /**
     * Encodes the specified NSPanelEntityState message. Does not implicitly {@link NSPanelEntityState.verify|verify} messages.
     * @function encode
     * @memberof NSPanelEntityState
     * @static
     * @param {INSPanelEntityState} message NSPanelEntityState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelEntityState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.light != null && Object.hasOwnProperty.call(message, "light"))
            $root.NSPanelEntityState.Light.encode(message.light, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.thermostat != null && Object.hasOwnProperty.call(message, "thermostat"))
            $root.NSPanelEntityState.Thermostat.encode(message.thermostat, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified NSPanelEntityState message, length delimited. Does not implicitly {@link NSPanelEntityState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NSPanelEntityState
     * @static
     * @param {INSPanelEntityState} message NSPanelEntityState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelEntityState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NSPanelEntityState message from the specified reader or buffer.
     * @function decode
     * @memberof NSPanelEntityState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NSPanelEntityState} NSPanelEntityState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelEntityState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelEntityState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.light = $root.NSPanelEntityState.Light.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.thermostat = $root.NSPanelEntityState.Thermostat.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NSPanelEntityState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NSPanelEntityState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NSPanelEntityState} NSPanelEntityState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelEntityState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NSPanelEntityState message.
     * @function verify
     * @memberof NSPanelEntityState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NSPanelEntityState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.light != null && message.hasOwnProperty("light")) {
            properties.entity = 1;
            {
                let error = $root.NSPanelEntityState.Light.verify(message.light);
                if (error)
                    return "light." + error;
            }
        }
        if (message.thermostat != null && message.hasOwnProperty("thermostat")) {
            if (properties.entity === 1)
                return "entity: multiple values";
            properties.entity = 1;
            {
                let error = $root.NSPanelEntityState.Thermostat.verify(message.thermostat);
                if (error)
                    return "thermostat." + error;
            }
        }
        return null;
    };

    /**
     * Creates a NSPanelEntityState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NSPanelEntityState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NSPanelEntityState} NSPanelEntityState
     */
    NSPanelEntityState.fromObject = function fromObject(object) {
        if (object instanceof $root.NSPanelEntityState)
            return object;
        let message = new $root.NSPanelEntityState();
        if (object.light != null) {
            if (typeof object.light !== "object")
                throw TypeError(".NSPanelEntityState.light: object expected");
            message.light = $root.NSPanelEntityState.Light.fromObject(object.light);
        }
        if (object.thermostat != null) {
            if (typeof object.thermostat !== "object")
                throw TypeError(".NSPanelEntityState.thermostat: object expected");
            message.thermostat = $root.NSPanelEntityState.Thermostat.fromObject(object.thermostat);
        }
        return message;
    };

    /**
     * Creates a plain object from a NSPanelEntityState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NSPanelEntityState
     * @static
     * @param {NSPanelEntityState} message NSPanelEntityState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NSPanelEntityState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (message.light != null && message.hasOwnProperty("light")) {
            object.light = $root.NSPanelEntityState.Light.toObject(message.light, options);
            if (options.oneofs)
                object.entity = "light";
        }
        if (message.thermostat != null && message.hasOwnProperty("thermostat")) {
            object.thermostat = $root.NSPanelEntityState.Thermostat.toObject(message.thermostat, options);
            if (options.oneofs)
                object.entity = "thermostat";
        }
        return object;
    };

    /**
     * Converts this NSPanelEntityState to JSON.
     * @function toJSON
     * @memberof NSPanelEntityState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NSPanelEntityState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NSPanelEntityState
     * @function getTypeUrl
     * @memberof NSPanelEntityState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NSPanelEntityState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NSPanelEntityState";
    };

    NSPanelEntityState.Light = (function() {

        /**
         * Properties of a Light.
         * @memberof NSPanelEntityState
         * @interface ILight
         * @property {number|null} [lightId] Light lightId
         * @property {string|null} [name] Light name
         * @property {number|null} [brightness] Light brightness
         * @property {number|null} [colorTemp] Light colorTemp
         * @property {number|null} [hue] Light hue
         * @property {number|null} [saturation] Light saturation
         * @property {boolean|null} [canColorTemp] Light canColorTemp
         * @property {boolean|null} [canColor] Light canColor
         * @property {NSPanelEntityState.Light.LightMode|null} [currentLightMode] Light currentLightMode
         * @property {boolean|null} [state] Light state
         */

        /**
         * Constructs a new Light.
         * @memberof NSPanelEntityState
         * @classdesc Represents a Light.
         * @implements ILight
         * @constructor
         * @param {NSPanelEntityState.ILight=} [properties] Properties to set
         */
        function Light(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Light lightId.
         * @member {number} lightId
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.lightId = 0;

        /**
         * Light name.
         * @member {string} name
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.name = "";

        /**
         * Light brightness.
         * @member {number} brightness
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.brightness = 0;

        /**
         * Light colorTemp.
         * @member {number} colorTemp
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.colorTemp = 0;

        /**
         * Light hue.
         * @member {number} hue
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.hue = 0;

        /**
         * Light saturation.
         * @member {number} saturation
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.saturation = 0;

        /**
         * Light canColorTemp.
         * @member {boolean} canColorTemp
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.canColorTemp = false;

        /**
         * Light canColor.
         * @member {boolean} canColor
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.canColor = false;

        /**
         * Light currentLightMode.
         * @member {NSPanelEntityState.Light.LightMode} currentLightMode
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.currentLightMode = 0;

        /**
         * Light state.
         * @member {boolean} state
         * @memberof NSPanelEntityState.Light
         * @instance
         */
        Light.prototype.state = false;

        /**
         * Creates a new Light instance using the specified properties.
         * @function create
         * @memberof NSPanelEntityState.Light
         * @static
         * @param {NSPanelEntityState.ILight=} [properties] Properties to set
         * @returns {NSPanelEntityState.Light} Light instance
         */
        Light.create = function create(properties) {
            return new Light(properties);
        };

        /**
         * Encodes the specified Light message. Does not implicitly {@link NSPanelEntityState.Light.verify|verify} messages.
         * @function encode
         * @memberof NSPanelEntityState.Light
         * @static
         * @param {NSPanelEntityState.ILight} message Light message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Light.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lightId != null && Object.hasOwnProperty.call(message, "lightId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.lightId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.brightness);
            if (message.colorTemp != null && Object.hasOwnProperty.call(message, "colorTemp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.colorTemp);
            if (message.hue != null && Object.hasOwnProperty.call(message, "hue"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hue);
            if (message.saturation != null && Object.hasOwnProperty.call(message, "saturation"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.saturation);
            if (message.canColorTemp != null && Object.hasOwnProperty.call(message, "canColorTemp"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.canColorTemp);
            if (message.canColor != null && Object.hasOwnProperty.call(message, "canColor"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.canColor);
            if (message.currentLightMode != null && Object.hasOwnProperty.call(message, "currentLightMode"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.currentLightMode);
            if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.state);
            return writer;
        };

        /**
         * Encodes the specified Light message, length delimited. Does not implicitly {@link NSPanelEntityState.Light.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelEntityState.Light
         * @static
         * @param {NSPanelEntityState.ILight} message Light message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Light.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Light message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelEntityState.Light
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelEntityState.Light} Light
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Light.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelEntityState.Light();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.lightId = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.brightness = reader.int32();
                        break;
                    }
                case 4: {
                        message.colorTemp = reader.int32();
                        break;
                    }
                case 5: {
                        message.hue = reader.int32();
                        break;
                    }
                case 6: {
                        message.saturation = reader.int32();
                        break;
                    }
                case 7: {
                        message.canColorTemp = reader.bool();
                        break;
                    }
                case 8: {
                        message.canColor = reader.bool();
                        break;
                    }
                case 9: {
                        message.currentLightMode = reader.int32();
                        break;
                    }
                case 10: {
                        message.state = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Light message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelEntityState.Light
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelEntityState.Light} Light
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Light.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Light message.
         * @function verify
         * @memberof NSPanelEntityState.Light
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Light.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lightId != null && message.hasOwnProperty("lightId"))
                if (!$util.isInteger(message.lightId))
                    return "lightId: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.brightness != null && message.hasOwnProperty("brightness"))
                if (!$util.isInteger(message.brightness))
                    return "brightness: integer expected";
            if (message.colorTemp != null && message.hasOwnProperty("colorTemp"))
                if (!$util.isInteger(message.colorTemp))
                    return "colorTemp: integer expected";
            if (message.hue != null && message.hasOwnProperty("hue"))
                if (!$util.isInteger(message.hue))
                    return "hue: integer expected";
            if (message.saturation != null && message.hasOwnProperty("saturation"))
                if (!$util.isInteger(message.saturation))
                    return "saturation: integer expected";
            if (message.canColorTemp != null && message.hasOwnProperty("canColorTemp"))
                if (typeof message.canColorTemp !== "boolean")
                    return "canColorTemp: boolean expected";
            if (message.canColor != null && message.hasOwnProperty("canColor"))
                if (typeof message.canColor !== "boolean")
                    return "canColor: boolean expected";
            if (message.currentLightMode != null && message.hasOwnProperty("currentLightMode"))
                switch (message.currentLightMode) {
                default:
                    return "currentLightMode: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.state != null && message.hasOwnProperty("state"))
                if (typeof message.state !== "boolean")
                    return "state: boolean expected";
            return null;
        };

        /**
         * Creates a Light message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelEntityState.Light
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelEntityState.Light} Light
         */
        Light.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelEntityState.Light)
                return object;
            let message = new $root.NSPanelEntityState.Light();
            if (object.lightId != null)
                message.lightId = object.lightId | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.brightness != null)
                message.brightness = object.brightness | 0;
            if (object.colorTemp != null)
                message.colorTemp = object.colorTemp | 0;
            if (object.hue != null)
                message.hue = object.hue | 0;
            if (object.saturation != null)
                message.saturation = object.saturation | 0;
            if (object.canColorTemp != null)
                message.canColorTemp = Boolean(object.canColorTemp);
            if (object.canColor != null)
                message.canColor = Boolean(object.canColor);
            switch (object.currentLightMode) {
            default:
                if (typeof object.currentLightMode === "number") {
                    message.currentLightMode = object.currentLightMode;
                    break;
                }
                break;
            case "COLOR_TEMP":
            case 0:
                message.currentLightMode = 0;
                break;
            case "RGB":
            case 1:
                message.currentLightMode = 1;
                break;
            }
            if (object.state != null)
                message.state = Boolean(object.state);
            return message;
        };

        /**
         * Creates a plain object from a Light message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelEntityState.Light
         * @static
         * @param {NSPanelEntityState.Light} message Light
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Light.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.lightId = 0;
                object.name = "";
                object.brightness = 0;
                object.colorTemp = 0;
                object.hue = 0;
                object.saturation = 0;
                object.canColorTemp = false;
                object.canColor = false;
                object.currentLightMode = options.enums === String ? "COLOR_TEMP" : 0;
                object.state = false;
            }
            if (message.lightId != null && message.hasOwnProperty("lightId"))
                object.lightId = message.lightId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.brightness != null && message.hasOwnProperty("brightness"))
                object.brightness = message.brightness;
            if (message.colorTemp != null && message.hasOwnProperty("colorTemp"))
                object.colorTemp = message.colorTemp;
            if (message.hue != null && message.hasOwnProperty("hue"))
                object.hue = message.hue;
            if (message.saturation != null && message.hasOwnProperty("saturation"))
                object.saturation = message.saturation;
            if (message.canColorTemp != null && message.hasOwnProperty("canColorTemp"))
                object.canColorTemp = message.canColorTemp;
            if (message.canColor != null && message.hasOwnProperty("canColor"))
                object.canColor = message.canColor;
            if (message.currentLightMode != null && message.hasOwnProperty("currentLightMode"))
                object.currentLightMode = options.enums === String ? $root.NSPanelEntityState.Light.LightMode[message.currentLightMode] === undefined ? message.currentLightMode : $root.NSPanelEntityState.Light.LightMode[message.currentLightMode] : message.currentLightMode;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this Light to JSON.
         * @function toJSON
         * @memberof NSPanelEntityState.Light
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Light.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Light
         * @function getTypeUrl
         * @memberof NSPanelEntityState.Light
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Light.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelEntityState.Light";
        };

        /**
         * LightMode enum.
         * @name NSPanelEntityState.Light.LightMode
         * @enum {number}
         * @property {number} COLOR_TEMP=0 COLOR_TEMP value
         * @property {number} RGB=1 RGB value
         */
        Light.LightMode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "COLOR_TEMP"] = 0;
            values[valuesById[1] = "RGB"] = 1;
            return values;
        })();

        return Light;
    })();

    NSPanelEntityState.Thermostat = (function() {

        /**
         * Properties of a Thermostat.
         * @memberof NSPanelEntityState
         * @interface IThermostat
         * @property {number|null} [thermostatId] Thermostat thermostatId
         * @property {string|null} [name] Thermostat name
         * @property {number|null} [currentTemperature] Thermostat currentTemperature
         * @property {boolean|null} [hasCurrentTemperature] Thermostat hasCurrentTemperature
         * @property {number|null} [setTemperature] Thermostat setTemperature
         * @property {number|null} [stepSize] Thermostat stepSize
         * @property {Array.<NSPanelEntityState.Thermostat.IThermostatOption>|null} [options] Thermostat options
         */

        /**
         * Constructs a new Thermostat.
         * @memberof NSPanelEntityState
         * @classdesc Represents a Thermostat.
         * @implements IThermostat
         * @constructor
         * @param {NSPanelEntityState.IThermostat=} [properties] Properties to set
         */
        function Thermostat(properties) {
            this.options = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Thermostat thermostatId.
         * @member {number} thermostatId
         * @memberof NSPanelEntityState.Thermostat
         * @instance
         */
        Thermostat.prototype.thermostatId = 0;

        /**
         * Thermostat name.
         * @member {string} name
         * @memberof NSPanelEntityState.Thermostat
         * @instance
         */
        Thermostat.prototype.name = "";

        /**
         * Thermostat currentTemperature.
         * @member {number} currentTemperature
         * @memberof NSPanelEntityState.Thermostat
         * @instance
         */
        Thermostat.prototype.currentTemperature = 0;

        /**
         * Thermostat hasCurrentTemperature.
         * @member {boolean} hasCurrentTemperature
         * @memberof NSPanelEntityState.Thermostat
         * @instance
         */
        Thermostat.prototype.hasCurrentTemperature = false;

        /**
         * Thermostat setTemperature.
         * @member {number} setTemperature
         * @memberof NSPanelEntityState.Thermostat
         * @instance
         */
        Thermostat.prototype.setTemperature = 0;

        /**
         * Thermostat stepSize.
         * @member {number} stepSize
         * @memberof NSPanelEntityState.Thermostat
         * @instance
         */
        Thermostat.prototype.stepSize = 0;

        /**
         * Thermostat options.
         * @member {Array.<NSPanelEntityState.Thermostat.IThermostatOption>} options
         * @memberof NSPanelEntityState.Thermostat
         * @instance
         */
        Thermostat.prototype.options = $util.emptyArray;

        /**
         * Creates a new Thermostat instance using the specified properties.
         * @function create
         * @memberof NSPanelEntityState.Thermostat
         * @static
         * @param {NSPanelEntityState.IThermostat=} [properties] Properties to set
         * @returns {NSPanelEntityState.Thermostat} Thermostat instance
         */
        Thermostat.create = function create(properties) {
            return new Thermostat(properties);
        };

        /**
         * Encodes the specified Thermostat message. Does not implicitly {@link NSPanelEntityState.Thermostat.verify|verify} messages.
         * @function encode
         * @memberof NSPanelEntityState.Thermostat
         * @static
         * @param {NSPanelEntityState.IThermostat} message Thermostat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Thermostat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.thermostatId != null && Object.hasOwnProperty.call(message, "thermostatId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.thermostatId);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.currentTemperature != null && Object.hasOwnProperty.call(message, "currentTemperature"))
                writer.uint32(/* id 3, wireType 5 =*/29).float(message.currentTemperature);
            if (message.hasCurrentTemperature != null && Object.hasOwnProperty.call(message, "hasCurrentTemperature"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasCurrentTemperature);
            if (message.setTemperature != null && Object.hasOwnProperty.call(message, "setTemperature"))
                writer.uint32(/* id 5, wireType 5 =*/45).float(message.setTemperature);
            if (message.stepSize != null && Object.hasOwnProperty.call(message, "stepSize"))
                writer.uint32(/* id 6, wireType 5 =*/53).float(message.stepSize);
            if (message.options != null && message.options.length)
                for (let i = 0; i < message.options.length; ++i)
                    $root.NSPanelEntityState.Thermostat.ThermostatOption.encode(message.options[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Thermostat message, length delimited. Does not implicitly {@link NSPanelEntityState.Thermostat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelEntityState.Thermostat
         * @static
         * @param {NSPanelEntityState.IThermostat} message Thermostat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Thermostat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Thermostat message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelEntityState.Thermostat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelEntityState.Thermostat} Thermostat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Thermostat.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelEntityState.Thermostat();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.thermostatId = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.currentTemperature = reader.float();
                        break;
                    }
                case 4: {
                        message.hasCurrentTemperature = reader.bool();
                        break;
                    }
                case 5: {
                        message.setTemperature = reader.float();
                        break;
                    }
                case 6: {
                        message.stepSize = reader.float();
                        break;
                    }
                case 7: {
                        if (!(message.options && message.options.length))
                            message.options = [];
                        message.options.push($root.NSPanelEntityState.Thermostat.ThermostatOption.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Thermostat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelEntityState.Thermostat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelEntityState.Thermostat} Thermostat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Thermostat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Thermostat message.
         * @function verify
         * @memberof NSPanelEntityState.Thermostat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Thermostat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.thermostatId != null && message.hasOwnProperty("thermostatId"))
                if (!$util.isInteger(message.thermostatId))
                    return "thermostatId: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.currentTemperature != null && message.hasOwnProperty("currentTemperature"))
                if (typeof message.currentTemperature !== "number")
                    return "currentTemperature: number expected";
            if (message.hasCurrentTemperature != null && message.hasOwnProperty("hasCurrentTemperature"))
                if (typeof message.hasCurrentTemperature !== "boolean")
                    return "hasCurrentTemperature: boolean expected";
            if (message.setTemperature != null && message.hasOwnProperty("setTemperature"))
                if (typeof message.setTemperature !== "number")
                    return "setTemperature: number expected";
            if (message.stepSize != null && message.hasOwnProperty("stepSize"))
                if (typeof message.stepSize !== "number")
                    return "stepSize: number expected";
            if (message.options != null && message.hasOwnProperty("options")) {
                if (!Array.isArray(message.options))
                    return "options: array expected";
                for (let i = 0; i < message.options.length; ++i) {
                    let error = $root.NSPanelEntityState.Thermostat.ThermostatOption.verify(message.options[i]);
                    if (error)
                        return "options." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Thermostat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelEntityState.Thermostat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelEntityState.Thermostat} Thermostat
         */
        Thermostat.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelEntityState.Thermostat)
                return object;
            let message = new $root.NSPanelEntityState.Thermostat();
            if (object.thermostatId != null)
                message.thermostatId = object.thermostatId | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.currentTemperature != null)
                message.currentTemperature = Number(object.currentTemperature);
            if (object.hasCurrentTemperature != null)
                message.hasCurrentTemperature = Boolean(object.hasCurrentTemperature);
            if (object.setTemperature != null)
                message.setTemperature = Number(object.setTemperature);
            if (object.stepSize != null)
                message.stepSize = Number(object.stepSize);
            if (object.options) {
                if (!Array.isArray(object.options))
                    throw TypeError(".NSPanelEntityState.Thermostat.options: array expected");
                message.options = [];
                for (let i = 0; i < object.options.length; ++i) {
                    if (typeof object.options[i] !== "object")
                        throw TypeError(".NSPanelEntityState.Thermostat.options: object expected");
                    message.options[i] = $root.NSPanelEntityState.Thermostat.ThermostatOption.fromObject(object.options[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Thermostat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelEntityState.Thermostat
         * @static
         * @param {NSPanelEntityState.Thermostat} message Thermostat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Thermostat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.options = [];
            if (options.defaults) {
                object.thermostatId = 0;
                object.name = "";
                object.currentTemperature = 0;
                object.hasCurrentTemperature = false;
                object.setTemperature = 0;
                object.stepSize = 0;
            }
            if (message.thermostatId != null && message.hasOwnProperty("thermostatId"))
                object.thermostatId = message.thermostatId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.currentTemperature != null && message.hasOwnProperty("currentTemperature"))
                object.currentTemperature = options.json && !isFinite(message.currentTemperature) ? String(message.currentTemperature) : message.currentTemperature;
            if (message.hasCurrentTemperature != null && message.hasOwnProperty("hasCurrentTemperature"))
                object.hasCurrentTemperature = message.hasCurrentTemperature;
            if (message.setTemperature != null && message.hasOwnProperty("setTemperature"))
                object.setTemperature = options.json && !isFinite(message.setTemperature) ? String(message.setTemperature) : message.setTemperature;
            if (message.stepSize != null && message.hasOwnProperty("stepSize"))
                object.stepSize = options.json && !isFinite(message.stepSize) ? String(message.stepSize) : message.stepSize;
            if (message.options && message.options.length) {
                object.options = [];
                for (let j = 0; j < message.options.length; ++j)
                    object.options[j] = $root.NSPanelEntityState.Thermostat.ThermostatOption.toObject(message.options[j], options);
            }
            return object;
        };

        /**
         * Converts this Thermostat to JSON.
         * @function toJSON
         * @memberof NSPanelEntityState.Thermostat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Thermostat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Thermostat
         * @function getTypeUrl
         * @memberof NSPanelEntityState.Thermostat
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Thermostat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelEntityState.Thermostat";
        };

        Thermostat.ThermostatOption = (function() {

            /**
             * Properties of a ThermostatOption.
             * @memberof NSPanelEntityState.Thermostat
             * @interface IThermostatOption
             * @property {string|null} [name] ThermostatOption name
             * @property {string|null} [currentValue] ThermostatOption currentValue
             * @property {string|null} [currentIcon] ThermostatOption currentIcon
             * @property {Array.<NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue>|null} [options] ThermostatOption options
             */

            /**
             * Constructs a new ThermostatOption.
             * @memberof NSPanelEntityState.Thermostat
             * @classdesc Represents a ThermostatOption.
             * @implements IThermostatOption
             * @constructor
             * @param {NSPanelEntityState.Thermostat.IThermostatOption=} [properties] Properties to set
             */
            function ThermostatOption(properties) {
                this.options = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ThermostatOption name.
             * @member {string} name
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @instance
             */
            ThermostatOption.prototype.name = "";

            /**
             * ThermostatOption currentValue.
             * @member {string} currentValue
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @instance
             */
            ThermostatOption.prototype.currentValue = "";

            /**
             * ThermostatOption currentIcon.
             * @member {string} currentIcon
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @instance
             */
            ThermostatOption.prototype.currentIcon = "";

            /**
             * ThermostatOption options.
             * @member {Array.<NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue>} options
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @instance
             */
            ThermostatOption.prototype.options = $util.emptyArray;

            /**
             * Creates a new ThermostatOption instance using the specified properties.
             * @function create
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @static
             * @param {NSPanelEntityState.Thermostat.IThermostatOption=} [properties] Properties to set
             * @returns {NSPanelEntityState.Thermostat.ThermostatOption} ThermostatOption instance
             */
            ThermostatOption.create = function create(properties) {
                return new ThermostatOption(properties);
            };

            /**
             * Encodes the specified ThermostatOption message. Does not implicitly {@link NSPanelEntityState.Thermostat.ThermostatOption.verify|verify} messages.
             * @function encode
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @static
             * @param {NSPanelEntityState.Thermostat.IThermostatOption} message ThermostatOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ThermostatOption.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                if (message.currentValue != null && Object.hasOwnProperty.call(message, "currentValue"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.currentValue);
                if (message.currentIcon != null && Object.hasOwnProperty.call(message, "currentIcon"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.currentIcon);
                if (message.options != null && message.options.length)
                    for (let i = 0; i < message.options.length; ++i)
                        $root.NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue.encode(message.options[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified ThermostatOption message, length delimited. Does not implicitly {@link NSPanelEntityState.Thermostat.ThermostatOption.verify|verify} messages.
             * @function encodeDelimited
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @static
             * @param {NSPanelEntityState.Thermostat.IThermostatOption} message ThermostatOption message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ThermostatOption.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ThermostatOption message from the specified reader or buffer.
             * @function decode
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {NSPanelEntityState.Thermostat.ThermostatOption} ThermostatOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ThermostatOption.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelEntityState.Thermostat.ThermostatOption();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.name = reader.string();
                            break;
                        }
                    case 2: {
                            message.currentValue = reader.string();
                            break;
                        }
                    case 3: {
                            message.currentIcon = reader.string();
                            break;
                        }
                    case 4: {
                            if (!(message.options && message.options.length))
                                message.options = [];
                            message.options.push($root.NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue.decode(reader, reader.uint32()));
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ThermostatOption message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {NSPanelEntityState.Thermostat.ThermostatOption} ThermostatOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ThermostatOption.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ThermostatOption message.
             * @function verify
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ThermostatOption.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.currentValue != null && message.hasOwnProperty("currentValue"))
                    if (!$util.isString(message.currentValue))
                        return "currentValue: string expected";
                if (message.currentIcon != null && message.hasOwnProperty("currentIcon"))
                    if (!$util.isString(message.currentIcon))
                        return "currentIcon: string expected";
                if (message.options != null && message.hasOwnProperty("options")) {
                    if (!Array.isArray(message.options))
                        return "options: array expected";
                    for (let i = 0; i < message.options.length; ++i) {
                        let error = $root.NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue.verify(message.options[i]);
                        if (error)
                            return "options." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a ThermostatOption message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {NSPanelEntityState.Thermostat.ThermostatOption} ThermostatOption
             */
            ThermostatOption.fromObject = function fromObject(object) {
                if (object instanceof $root.NSPanelEntityState.Thermostat.ThermostatOption)
                    return object;
                let message = new $root.NSPanelEntityState.Thermostat.ThermostatOption();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.currentValue != null)
                    message.currentValue = String(object.currentValue);
                if (object.currentIcon != null)
                    message.currentIcon = String(object.currentIcon);
                if (object.options) {
                    if (!Array.isArray(object.options))
                        throw TypeError(".NSPanelEntityState.Thermostat.ThermostatOption.options: array expected");
                    message.options = [];
                    for (let i = 0; i < object.options.length; ++i) {
                        if (typeof object.options[i] !== "object")
                            throw TypeError(".NSPanelEntityState.Thermostat.ThermostatOption.options: object expected");
                        message.options[i] = $root.NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue.fromObject(object.options[i]);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a ThermostatOption message. Also converts values to other types if specified.
             * @function toObject
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @static
             * @param {NSPanelEntityState.Thermostat.ThermostatOption} message ThermostatOption
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ThermostatOption.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    object.options = [];
                if (options.defaults) {
                    object.name = "";
                    object.currentValue = "";
                    object.currentIcon = "";
                }
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.currentValue != null && message.hasOwnProperty("currentValue"))
                    object.currentValue = message.currentValue;
                if (message.currentIcon != null && message.hasOwnProperty("currentIcon"))
                    object.currentIcon = message.currentIcon;
                if (message.options && message.options.length) {
                    object.options = [];
                    for (let j = 0; j < message.options.length; ++j)
                        object.options[j] = $root.NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue.toObject(message.options[j], options);
                }
                return object;
            };

            /**
             * Converts this ThermostatOption to JSON.
             * @function toJSON
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ThermostatOption.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ThermostatOption
             * @function getTypeUrl
             * @memberof NSPanelEntityState.Thermostat.ThermostatOption
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ThermostatOption.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/NSPanelEntityState.Thermostat.ThermostatOption";
            };

            ThermostatOption.ThermostatOptionValue = (function() {

                /**
                 * Properties of a ThermostatOptionValue.
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption
                 * @interface IThermostatOptionValue
                 * @property {string|null} [value] ThermostatOptionValue value
                 * @property {string|null} [icon] ThermostatOptionValue icon
                 */

                /**
                 * Constructs a new ThermostatOptionValue.
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption
                 * @classdesc Represents a ThermostatOptionValue.
                 * @implements IThermostatOptionValue
                 * @constructor
                 * @param {NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue=} [properties] Properties to set
                 */
                function ThermostatOptionValue(properties) {
                    if (properties)
                        for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ThermostatOptionValue value.
                 * @member {string} value
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @instance
                 */
                ThermostatOptionValue.prototype.value = "";

                /**
                 * ThermostatOptionValue icon.
                 * @member {string} icon
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @instance
                 */
                ThermostatOptionValue.prototype.icon = "";

                /**
                 * Creates a new ThermostatOptionValue instance using the specified properties.
                 * @function create
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @static
                 * @param {NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue=} [properties] Properties to set
                 * @returns {NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue} ThermostatOptionValue instance
                 */
                ThermostatOptionValue.create = function create(properties) {
                    return new ThermostatOptionValue(properties);
                };

                /**
                 * Encodes the specified ThermostatOptionValue message. Does not implicitly {@link NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue.verify|verify} messages.
                 * @function encode
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @static
                 * @param {NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue} message ThermostatOptionValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ThermostatOptionValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                    if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.icon);
                    return writer;
                };

                /**
                 * Encodes the specified ThermostatOptionValue message, length delimited. Does not implicitly {@link NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @static
                 * @param {NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue} message ThermostatOptionValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ThermostatOptionValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ThermostatOptionValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue} ThermostatOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ThermostatOptionValue.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue();
                    while (reader.pos < end) {
                        let tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.value = reader.string();
                                break;
                            }
                        case 2: {
                                message.icon = reader.string();
                                break;
                            }
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ThermostatOptionValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue} ThermostatOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ThermostatOptionValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ThermostatOptionValue message.
                 * @function verify
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ThermostatOptionValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    if (message.icon != null && message.hasOwnProperty("icon"))
                        if (!$util.isString(message.icon))
                            return "icon: string expected";
                    return null;
                };

                /**
                 * Creates a ThermostatOptionValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue} ThermostatOptionValue
                 */
                ThermostatOptionValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue)
                        return object;
                    let message = new $root.NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue();
                    if (object.value != null)
                        message.value = String(object.value);
                    if (object.icon != null)
                        message.icon = String(object.icon);
                    return message;
                };

                /**
                 * Creates a plain object from a ThermostatOptionValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @static
                 * @param {NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue} message ThermostatOptionValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ThermostatOptionValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    let object = {};
                    if (options.defaults) {
                        object.value = "";
                        object.icon = "";
                    }
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    if (message.icon != null && message.hasOwnProperty("icon"))
                        object.icon = message.icon;
                    return object;
                };

                /**
                 * Converts this ThermostatOptionValue to JSON.
                 * @function toJSON
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ThermostatOptionValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for ThermostatOptionValue
                 * @function getTypeUrl
                 * @memberof NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                ThermostatOptionValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue";
                };

                return ThermostatOptionValue;
            })();

            return ThermostatOption;
        })();

        return Thermostat;
    })();

    return NSPanelEntityState;
})();

export const NSPanelConfig = $root.NSPanelConfig = (() => {

    /**
     * Properties of a NSPanelConfig.
     * @exports INSPanelConfig
     * @interface INSPanelConfig
     * @property {string|null} [name] NSPanelConfig name
     * @property {number|null} [defaultRoom] NSPanelConfig defaultRoom
     * @property {NSPanelConfig.NSPanelDefaultPage|null} [defaultPage] NSPanelConfig defaultPage
     * @property {number|null} [screensaverActivationTimeout] NSPanelConfig screensaverActivationTimeout
     * @property {number|null} [minButtonPushTime] NSPanelConfig minButtonPushTime
     * @property {number|null} [buttonLongPressTime] NSPanelConfig buttonLongPressTime
     * @property {number|null} [specialModeTriggerTime] NSPanelConfig specialModeTriggerTime
     * @property {number|null} [specialModeReleaseTime] NSPanelConfig specialModeReleaseTime
     * @property {number|null} [screenDimLevel] NSPanelConfig screenDimLevel
     * @property {number|null} [screensaverDimLevel] NSPanelConfig screensaverDimLevel
     * @property {NSPanelConfig.NSPanelScreensaverMode|null} [screensaverMode] NSPanelConfig screensaverMode
     * @property {boolean|null} [showScreensaverInsideTemperature] NSPanelConfig showScreensaverInsideTemperature
     * @property {boolean|null} [showScreensaverOutsideTemperature] NSPanelConfig showScreensaverOutsideTemperature
     * @property {boolean|null} [clockUsStyle] NSPanelConfig clockUsStyle
     * @property {boolean|null} [useFahrenheit] NSPanelConfig useFahrenheit
     * @property {boolean|null} [isUsPanel] NSPanelConfig isUsPanel
     * @property {Array.<NSPanelConfig.IRoomInfo>|null} [roomInfos] NSPanelConfig roomInfos
     * @property {boolean|null} [reverseRelays] NSPanelConfig reverseRelays
     * @property {boolean|null} [relay1DefaultMode] NSPanelConfig relay1DefaultMode
     * @property {boolean|null} [relay2DefaultMode] NSPanelConfig relay2DefaultMode
     * @property {number|null} [temperatureCalibration] NSPanelConfig temperatureCalibration
     * @property {NSPanelConfig.NSPanelButtonMode|null} [button1Mode] NSPanelConfig button1Mode
     * @property {NSPanelConfig.NSPanelButtonMode|null} [button2Mode] NSPanelConfig button2Mode
     * @property {Array.<number>|null} [globalSceneEntityPageIds] NSPanelConfig globalSceneEntityPageIds
     * @property {boolean|null} [optimisticMode] NSPanelConfig optimisticMode
     * @property {number|null} [raiseLightLevelTo_100Above] NSPanelConfig raiseLightLevelTo_100Above
     * @property {number|null} [nspanelId] NSPanelConfig nspanelId
     * @property {Array.<number>|null} [relay1RelayGroup] NSPanelConfig relay1RelayGroup
     * @property {Array.<number>|null} [relay2RelayGroup] NSPanelConfig relay2RelayGroup
     * @property {number|null} [defaultLightBrightess] NSPanelConfig defaultLightBrightess
     * @property {boolean|null} [lockedToDefaultRoom] NSPanelConfig lockedToDefaultRoom
     * @property {string|null} [insideTemperatureSensorMqttTopic] NSPanelConfig insideTemperatureSensorMqttTopic
     * @property {number|null} [button1LowerTemperature] NSPanelConfig button1LowerTemperature
     * @property {number|null} [button1UpperTemperature] NSPanelConfig button1UpperTemperature
     * @property {number|null} [button2LowerTemperature] NSPanelConfig button2LowerTemperature
     * @property {number|null} [button2UpperTemperature] NSPanelConfig button2UpperTemperature
     */

    /**
     * Constructs a new NSPanelConfig.
     * @exports NSPanelConfig
     * @classdesc Represents a NSPanelConfig.
     * @implements INSPanelConfig
     * @constructor
     * @param {INSPanelConfig=} [properties] Properties to set
     */
    function NSPanelConfig(properties) {
        this.roomInfos = [];
        this.globalSceneEntityPageIds = [];
        this.relay1RelayGroup = [];
        this.relay2RelayGroup = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NSPanelConfig name.
     * @member {string} name
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.name = "";

    /**
     * NSPanelConfig defaultRoom.
     * @member {number} defaultRoom
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.defaultRoom = 0;

    /**
     * NSPanelConfig defaultPage.
     * @member {NSPanelConfig.NSPanelDefaultPage} defaultPage
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.defaultPage = 0;

    /**
     * NSPanelConfig screensaverActivationTimeout.
     * @member {number} screensaverActivationTimeout
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.screensaverActivationTimeout = 0;

    /**
     * NSPanelConfig minButtonPushTime.
     * @member {number} minButtonPushTime
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.minButtonPushTime = 0;

    /**
     * NSPanelConfig buttonLongPressTime.
     * @member {number} buttonLongPressTime
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.buttonLongPressTime = 0;

    /**
     * NSPanelConfig specialModeTriggerTime.
     * @member {number} specialModeTriggerTime
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.specialModeTriggerTime = 0;

    /**
     * NSPanelConfig specialModeReleaseTime.
     * @member {number} specialModeReleaseTime
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.specialModeReleaseTime = 0;

    /**
     * NSPanelConfig screenDimLevel.
     * @member {number} screenDimLevel
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.screenDimLevel = 0;

    /**
     * NSPanelConfig screensaverDimLevel.
     * @member {number} screensaverDimLevel
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.screensaverDimLevel = 0;

    /**
     * NSPanelConfig screensaverMode.
     * @member {NSPanelConfig.NSPanelScreensaverMode} screensaverMode
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.screensaverMode = 0;

    /**
     * NSPanelConfig showScreensaverInsideTemperature.
     * @member {boolean} showScreensaverInsideTemperature
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.showScreensaverInsideTemperature = false;

    /**
     * NSPanelConfig showScreensaverOutsideTemperature.
     * @member {boolean} showScreensaverOutsideTemperature
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.showScreensaverOutsideTemperature = false;

    /**
     * NSPanelConfig clockUsStyle.
     * @member {boolean} clockUsStyle
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.clockUsStyle = false;

    /**
     * NSPanelConfig useFahrenheit.
     * @member {boolean} useFahrenheit
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.useFahrenheit = false;

    /**
     * NSPanelConfig isUsPanel.
     * @member {boolean} isUsPanel
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.isUsPanel = false;

    /**
     * NSPanelConfig roomInfos.
     * @member {Array.<NSPanelConfig.IRoomInfo>} roomInfos
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.roomInfos = $util.emptyArray;

    /**
     * NSPanelConfig reverseRelays.
     * @member {boolean} reverseRelays
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.reverseRelays = false;

    /**
     * NSPanelConfig relay1DefaultMode.
     * @member {boolean} relay1DefaultMode
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.relay1DefaultMode = false;

    /**
     * NSPanelConfig relay2DefaultMode.
     * @member {boolean} relay2DefaultMode
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.relay2DefaultMode = false;

    /**
     * NSPanelConfig temperatureCalibration.
     * @member {number} temperatureCalibration
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.temperatureCalibration = 0;

    /**
     * NSPanelConfig button1Mode.
     * @member {NSPanelConfig.NSPanelButtonMode} button1Mode
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.button1Mode = 0;

    /**
     * NSPanelConfig button2Mode.
     * @member {NSPanelConfig.NSPanelButtonMode} button2Mode
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.button2Mode = 0;

    /**
     * NSPanelConfig globalSceneEntityPageIds.
     * @member {Array.<number>} globalSceneEntityPageIds
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.globalSceneEntityPageIds = $util.emptyArray;

    /**
     * NSPanelConfig optimisticMode.
     * @member {boolean} optimisticMode
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.optimisticMode = false;

    /**
     * NSPanelConfig raiseLightLevelTo_100Above.
     * @member {number} raiseLightLevelTo_100Above
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.raiseLightLevelTo_100Above = 0;

    /**
     * NSPanelConfig nspanelId.
     * @member {number} nspanelId
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.nspanelId = 0;

    /**
     * NSPanelConfig relay1RelayGroup.
     * @member {Array.<number>} relay1RelayGroup
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.relay1RelayGroup = $util.emptyArray;

    /**
     * NSPanelConfig relay2RelayGroup.
     * @member {Array.<number>} relay2RelayGroup
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.relay2RelayGroup = $util.emptyArray;

    /**
     * NSPanelConfig defaultLightBrightess.
     * @member {number} defaultLightBrightess
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.defaultLightBrightess = 0;

    /**
     * NSPanelConfig lockedToDefaultRoom.
     * @member {boolean} lockedToDefaultRoom
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.lockedToDefaultRoom = false;

    /**
     * NSPanelConfig insideTemperatureSensorMqttTopic.
     * @member {string} insideTemperatureSensorMqttTopic
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.insideTemperatureSensorMqttTopic = "";

    /**
     * NSPanelConfig button1LowerTemperature.
     * @member {number} button1LowerTemperature
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.button1LowerTemperature = 0;

    /**
     * NSPanelConfig button1UpperTemperature.
     * @member {number} button1UpperTemperature
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.button1UpperTemperature = 0;

    /**
     * NSPanelConfig button2LowerTemperature.
     * @member {number} button2LowerTemperature
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.button2LowerTemperature = 0;

    /**
     * NSPanelConfig button2UpperTemperature.
     * @member {number} button2UpperTemperature
     * @memberof NSPanelConfig
     * @instance
     */
    NSPanelConfig.prototype.button2UpperTemperature = 0;

    /**
     * Creates a new NSPanelConfig instance using the specified properties.
     * @function create
     * @memberof NSPanelConfig
     * @static
     * @param {INSPanelConfig=} [properties] Properties to set
     * @returns {NSPanelConfig} NSPanelConfig instance
     */
    NSPanelConfig.create = function create(properties) {
        return new NSPanelConfig(properties);
    };

    /**
     * Encodes the specified NSPanelConfig message. Does not implicitly {@link NSPanelConfig.verify|verify} messages.
     * @function encode
     * @memberof NSPanelConfig
     * @static
     * @param {INSPanelConfig} message NSPanelConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelConfig.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.defaultRoom != null && Object.hasOwnProperty.call(message, "defaultRoom"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.defaultRoom);
        if (message.defaultPage != null && Object.hasOwnProperty.call(message, "defaultPage"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.defaultPage);
        if (message.screensaverActivationTimeout != null && Object.hasOwnProperty.call(message, "screensaverActivationTimeout"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.screensaverActivationTimeout);
        if (message.minButtonPushTime != null && Object.hasOwnProperty.call(message, "minButtonPushTime"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.minButtonPushTime);
        if (message.buttonLongPressTime != null && Object.hasOwnProperty.call(message, "buttonLongPressTime"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.buttonLongPressTime);
        if (message.specialModeTriggerTime != null && Object.hasOwnProperty.call(message, "specialModeTriggerTime"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.specialModeTriggerTime);
        if (message.specialModeReleaseTime != null && Object.hasOwnProperty.call(message, "specialModeReleaseTime"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.specialModeReleaseTime);
        if (message.screenDimLevel != null && Object.hasOwnProperty.call(message, "screenDimLevel"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.screenDimLevel);
        if (message.screensaverDimLevel != null && Object.hasOwnProperty.call(message, "screensaverDimLevel"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.screensaverDimLevel);
        if (message.screensaverMode != null && Object.hasOwnProperty.call(message, "screensaverMode"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.screensaverMode);
        if (message.showScreensaverInsideTemperature != null && Object.hasOwnProperty.call(message, "showScreensaverInsideTemperature"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.showScreensaverInsideTemperature);
        if (message.showScreensaverOutsideTemperature != null && Object.hasOwnProperty.call(message, "showScreensaverOutsideTemperature"))
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.showScreensaverOutsideTemperature);
        if (message.clockUsStyle != null && Object.hasOwnProperty.call(message, "clockUsStyle"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.clockUsStyle);
        if (message.useFahrenheit != null && Object.hasOwnProperty.call(message, "useFahrenheit"))
            writer.uint32(/* id 15, wireType 0 =*/120).bool(message.useFahrenheit);
        if (message.isUsPanel != null && Object.hasOwnProperty.call(message, "isUsPanel"))
            writer.uint32(/* id 16, wireType 0 =*/128).bool(message.isUsPanel);
        if (message.roomInfos != null && message.roomInfos.length)
            for (let i = 0; i < message.roomInfos.length; ++i)
                $root.NSPanelConfig.RoomInfo.encode(message.roomInfos[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.reverseRelays != null && Object.hasOwnProperty.call(message, "reverseRelays"))
            writer.uint32(/* id 18, wireType 0 =*/144).bool(message.reverseRelays);
        if (message.relay1DefaultMode != null && Object.hasOwnProperty.call(message, "relay1DefaultMode"))
            writer.uint32(/* id 19, wireType 0 =*/152).bool(message.relay1DefaultMode);
        if (message.relay2DefaultMode != null && Object.hasOwnProperty.call(message, "relay2DefaultMode"))
            writer.uint32(/* id 20, wireType 0 =*/160).bool(message.relay2DefaultMode);
        if (message.temperatureCalibration != null && Object.hasOwnProperty.call(message, "temperatureCalibration"))
            writer.uint32(/* id 21, wireType 0 =*/168).int32(message.temperatureCalibration);
        if (message.button1Mode != null && Object.hasOwnProperty.call(message, "button1Mode"))
            writer.uint32(/* id 22, wireType 0 =*/176).int32(message.button1Mode);
        if (message.button2Mode != null && Object.hasOwnProperty.call(message, "button2Mode"))
            writer.uint32(/* id 25, wireType 0 =*/200).int32(message.button2Mode);
        if (message.globalSceneEntityPageIds != null && message.globalSceneEntityPageIds.length) {
            writer.uint32(/* id 30, wireType 2 =*/242).fork();
            for (let i = 0; i < message.globalSceneEntityPageIds.length; ++i)
                writer.int32(message.globalSceneEntityPageIds[i]);
            writer.ldelim();
        }
        if (message.optimisticMode != null && Object.hasOwnProperty.call(message, "optimisticMode"))
            writer.uint32(/* id 31, wireType 0 =*/248).bool(message.optimisticMode);
        if (message.raiseLightLevelTo_100Above != null && Object.hasOwnProperty.call(message, "raiseLightLevelTo_100Above"))
            writer.uint32(/* id 32, wireType 0 =*/256).int32(message.raiseLightLevelTo_100Above);
        if (message.nspanelId != null && Object.hasOwnProperty.call(message, "nspanelId"))
            writer.uint32(/* id 33, wireType 0 =*/264).int32(message.nspanelId);
        if (message.relay1RelayGroup != null && message.relay1RelayGroup.length) {
            writer.uint32(/* id 35, wireType 2 =*/282).fork();
            for (let i = 0; i < message.relay1RelayGroup.length; ++i)
                writer.int32(message.relay1RelayGroup[i]);
            writer.ldelim();
        }
        if (message.relay2RelayGroup != null && message.relay2RelayGroup.length) {
            writer.uint32(/* id 37, wireType 2 =*/298).fork();
            for (let i = 0; i < message.relay2RelayGroup.length; ++i)
                writer.int32(message.relay2RelayGroup[i]);
            writer.ldelim();
        }
        if (message.defaultLightBrightess != null && Object.hasOwnProperty.call(message, "defaultLightBrightess"))
            writer.uint32(/* id 38, wireType 0 =*/304).int32(message.defaultLightBrightess);
        if (message.lockedToDefaultRoom != null && Object.hasOwnProperty.call(message, "lockedToDefaultRoom"))
            writer.uint32(/* id 39, wireType 0 =*/312).bool(message.lockedToDefaultRoom);
        if (message.insideTemperatureSensorMqttTopic != null && Object.hasOwnProperty.call(message, "insideTemperatureSensorMqttTopic"))
            writer.uint32(/* id 40, wireType 2 =*/322).string(message.insideTemperatureSensorMqttTopic);
        if (message.button1LowerTemperature != null && Object.hasOwnProperty.call(message, "button1LowerTemperature"))
            writer.uint32(/* id 41, wireType 0 =*/328).int32(message.button1LowerTemperature);
        if (message.button1UpperTemperature != null && Object.hasOwnProperty.call(message, "button1UpperTemperature"))
            writer.uint32(/* id 42, wireType 0 =*/336).int32(message.button1UpperTemperature);
        if (message.button2LowerTemperature != null && Object.hasOwnProperty.call(message, "button2LowerTemperature"))
            writer.uint32(/* id 43, wireType 0 =*/344).int32(message.button2LowerTemperature);
        if (message.button2UpperTemperature != null && Object.hasOwnProperty.call(message, "button2UpperTemperature"))
            writer.uint32(/* id 44, wireType 0 =*/352).int32(message.button2UpperTemperature);
        return writer;
    };

    /**
     * Encodes the specified NSPanelConfig message, length delimited. Does not implicitly {@link NSPanelConfig.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NSPanelConfig
     * @static
     * @param {INSPanelConfig} message NSPanelConfig message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelConfig.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NSPanelConfig message from the specified reader or buffer.
     * @function decode
     * @memberof NSPanelConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NSPanelConfig} NSPanelConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelConfig.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelConfig();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.defaultRoom = reader.int32();
                    break;
                }
            case 3: {
                    message.defaultPage = reader.int32();
                    break;
                }
            case 4: {
                    message.screensaverActivationTimeout = reader.int32();
                    break;
                }
            case 5: {
                    message.minButtonPushTime = reader.int32();
                    break;
                }
            case 6: {
                    message.buttonLongPressTime = reader.int32();
                    break;
                }
            case 7: {
                    message.specialModeTriggerTime = reader.int32();
                    break;
                }
            case 8: {
                    message.specialModeReleaseTime = reader.int32();
                    break;
                }
            case 9: {
                    message.screenDimLevel = reader.int32();
                    break;
                }
            case 10: {
                    message.screensaverDimLevel = reader.int32();
                    break;
                }
            case 11: {
                    message.screensaverMode = reader.int32();
                    break;
                }
            case 12: {
                    message.showScreensaverInsideTemperature = reader.bool();
                    break;
                }
            case 13: {
                    message.showScreensaverOutsideTemperature = reader.bool();
                    break;
                }
            case 14: {
                    message.clockUsStyle = reader.bool();
                    break;
                }
            case 15: {
                    message.useFahrenheit = reader.bool();
                    break;
                }
            case 16: {
                    message.isUsPanel = reader.bool();
                    break;
                }
            case 17: {
                    if (!(message.roomInfos && message.roomInfos.length))
                        message.roomInfos = [];
                    message.roomInfos.push($root.NSPanelConfig.RoomInfo.decode(reader, reader.uint32()));
                    break;
                }
            case 18: {
                    message.reverseRelays = reader.bool();
                    break;
                }
            case 19: {
                    message.relay1DefaultMode = reader.bool();
                    break;
                }
            case 20: {
                    message.relay2DefaultMode = reader.bool();
                    break;
                }
            case 21: {
                    message.temperatureCalibration = reader.int32();
                    break;
                }
            case 22: {
                    message.button1Mode = reader.int32();
                    break;
                }
            case 25: {
                    message.button2Mode = reader.int32();
                    break;
                }
            case 30: {
                    if (!(message.globalSceneEntityPageIds && message.globalSceneEntityPageIds.length))
                        message.globalSceneEntityPageIds = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.globalSceneEntityPageIds.push(reader.int32());
                    } else
                        message.globalSceneEntityPageIds.push(reader.int32());
                    break;
                }
            case 31: {
                    message.optimisticMode = reader.bool();
                    break;
                }
            case 32: {
                    message.raiseLightLevelTo_100Above = reader.int32();
                    break;
                }
            case 33: {
                    message.nspanelId = reader.int32();
                    break;
                }
            case 35: {
                    if (!(message.relay1RelayGroup && message.relay1RelayGroup.length))
                        message.relay1RelayGroup = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.relay1RelayGroup.push(reader.int32());
                    } else
                        message.relay1RelayGroup.push(reader.int32());
                    break;
                }
            case 37: {
                    if (!(message.relay2RelayGroup && message.relay2RelayGroup.length))
                        message.relay2RelayGroup = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.relay2RelayGroup.push(reader.int32());
                    } else
                        message.relay2RelayGroup.push(reader.int32());
                    break;
                }
            case 38: {
                    message.defaultLightBrightess = reader.int32();
                    break;
                }
            case 39: {
                    message.lockedToDefaultRoom = reader.bool();
                    break;
                }
            case 40: {
                    message.insideTemperatureSensorMqttTopic = reader.string();
                    break;
                }
            case 41: {
                    message.button1LowerTemperature = reader.int32();
                    break;
                }
            case 42: {
                    message.button1UpperTemperature = reader.int32();
                    break;
                }
            case 43: {
                    message.button2LowerTemperature = reader.int32();
                    break;
                }
            case 44: {
                    message.button2UpperTemperature = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NSPanelConfig message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NSPanelConfig
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NSPanelConfig} NSPanelConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelConfig.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NSPanelConfig message.
     * @function verify
     * @memberof NSPanelConfig
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NSPanelConfig.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.defaultRoom != null && message.hasOwnProperty("defaultRoom"))
            if (!$util.isInteger(message.defaultRoom))
                return "defaultRoom: integer expected";
        if (message.defaultPage != null && message.hasOwnProperty("defaultPage"))
            switch (message.defaultPage) {
            default:
                return "defaultPage: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.screensaverActivationTimeout != null && message.hasOwnProperty("screensaverActivationTimeout"))
            if (!$util.isInteger(message.screensaverActivationTimeout))
                return "screensaverActivationTimeout: integer expected";
        if (message.minButtonPushTime != null && message.hasOwnProperty("minButtonPushTime"))
            if (!$util.isInteger(message.minButtonPushTime))
                return "minButtonPushTime: integer expected";
        if (message.buttonLongPressTime != null && message.hasOwnProperty("buttonLongPressTime"))
            if (!$util.isInteger(message.buttonLongPressTime))
                return "buttonLongPressTime: integer expected";
        if (message.specialModeTriggerTime != null && message.hasOwnProperty("specialModeTriggerTime"))
            if (!$util.isInteger(message.specialModeTriggerTime))
                return "specialModeTriggerTime: integer expected";
        if (message.specialModeReleaseTime != null && message.hasOwnProperty("specialModeReleaseTime"))
            if (!$util.isInteger(message.specialModeReleaseTime))
                return "specialModeReleaseTime: integer expected";
        if (message.screenDimLevel != null && message.hasOwnProperty("screenDimLevel"))
            if (!$util.isInteger(message.screenDimLevel))
                return "screenDimLevel: integer expected";
        if (message.screensaverDimLevel != null && message.hasOwnProperty("screensaverDimLevel"))
            if (!$util.isInteger(message.screensaverDimLevel))
                return "screensaverDimLevel: integer expected";
        if (message.screensaverMode != null && message.hasOwnProperty("screensaverMode"))
            switch (message.screensaverMode) {
            default:
                return "screensaverMode: enum value expected";
            case 0:
            case 1:
            case 3:
            case 4:
            case 5:
                break;
            }
        if (message.showScreensaverInsideTemperature != null && message.hasOwnProperty("showScreensaverInsideTemperature"))
            if (typeof message.showScreensaverInsideTemperature !== "boolean")
                return "showScreensaverInsideTemperature: boolean expected";
        if (message.showScreensaverOutsideTemperature != null && message.hasOwnProperty("showScreensaverOutsideTemperature"))
            if (typeof message.showScreensaverOutsideTemperature !== "boolean")
                return "showScreensaverOutsideTemperature: boolean expected";
        if (message.clockUsStyle != null && message.hasOwnProperty("clockUsStyle"))
            if (typeof message.clockUsStyle !== "boolean")
                return "clockUsStyle: boolean expected";
        if (message.useFahrenheit != null && message.hasOwnProperty("useFahrenheit"))
            if (typeof message.useFahrenheit !== "boolean")
                return "useFahrenheit: boolean expected";
        if (message.isUsPanel != null && message.hasOwnProperty("isUsPanel"))
            if (typeof message.isUsPanel !== "boolean")
                return "isUsPanel: boolean expected";
        if (message.roomInfos != null && message.hasOwnProperty("roomInfos")) {
            if (!Array.isArray(message.roomInfos))
                return "roomInfos: array expected";
            for (let i = 0; i < message.roomInfos.length; ++i) {
                let error = $root.NSPanelConfig.RoomInfo.verify(message.roomInfos[i]);
                if (error)
                    return "roomInfos." + error;
            }
        }
        if (message.reverseRelays != null && message.hasOwnProperty("reverseRelays"))
            if (typeof message.reverseRelays !== "boolean")
                return "reverseRelays: boolean expected";
        if (message.relay1DefaultMode != null && message.hasOwnProperty("relay1DefaultMode"))
            if (typeof message.relay1DefaultMode !== "boolean")
                return "relay1DefaultMode: boolean expected";
        if (message.relay2DefaultMode != null && message.hasOwnProperty("relay2DefaultMode"))
            if (typeof message.relay2DefaultMode !== "boolean")
                return "relay2DefaultMode: boolean expected";
        if (message.temperatureCalibration != null && message.hasOwnProperty("temperatureCalibration"))
            if (!$util.isInteger(message.temperatureCalibration))
                return "temperatureCalibration: integer expected";
        if (message.button1Mode != null && message.hasOwnProperty("button1Mode"))
            switch (message.button1Mode) {
            default:
                return "button1Mode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.button2Mode != null && message.hasOwnProperty("button2Mode"))
            switch (message.button2Mode) {
            default:
                return "button2Mode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.globalSceneEntityPageIds != null && message.hasOwnProperty("globalSceneEntityPageIds")) {
            if (!Array.isArray(message.globalSceneEntityPageIds))
                return "globalSceneEntityPageIds: array expected";
            for (let i = 0; i < message.globalSceneEntityPageIds.length; ++i)
                if (!$util.isInteger(message.globalSceneEntityPageIds[i]))
                    return "globalSceneEntityPageIds: integer[] expected";
        }
        if (message.optimisticMode != null && message.hasOwnProperty("optimisticMode"))
            if (typeof message.optimisticMode !== "boolean")
                return "optimisticMode: boolean expected";
        if (message.raiseLightLevelTo_100Above != null && message.hasOwnProperty("raiseLightLevelTo_100Above"))
            if (!$util.isInteger(message.raiseLightLevelTo_100Above))
                return "raiseLightLevelTo_100Above: integer expected";
        if (message.nspanelId != null && message.hasOwnProperty("nspanelId"))
            if (!$util.isInteger(message.nspanelId))
                return "nspanelId: integer expected";
        if (message.relay1RelayGroup != null && message.hasOwnProperty("relay1RelayGroup")) {
            if (!Array.isArray(message.relay1RelayGroup))
                return "relay1RelayGroup: array expected";
            for (let i = 0; i < message.relay1RelayGroup.length; ++i)
                if (!$util.isInteger(message.relay1RelayGroup[i]))
                    return "relay1RelayGroup: integer[] expected";
        }
        if (message.relay2RelayGroup != null && message.hasOwnProperty("relay2RelayGroup")) {
            if (!Array.isArray(message.relay2RelayGroup))
                return "relay2RelayGroup: array expected";
            for (let i = 0; i < message.relay2RelayGroup.length; ++i)
                if (!$util.isInteger(message.relay2RelayGroup[i]))
                    return "relay2RelayGroup: integer[] expected";
        }
        if (message.defaultLightBrightess != null && message.hasOwnProperty("defaultLightBrightess"))
            if (!$util.isInteger(message.defaultLightBrightess))
                return "defaultLightBrightess: integer expected";
        if (message.lockedToDefaultRoom != null && message.hasOwnProperty("lockedToDefaultRoom"))
            if (typeof message.lockedToDefaultRoom !== "boolean")
                return "lockedToDefaultRoom: boolean expected";
        if (message.insideTemperatureSensorMqttTopic != null && message.hasOwnProperty("insideTemperatureSensorMqttTopic"))
            if (!$util.isString(message.insideTemperatureSensorMqttTopic))
                return "insideTemperatureSensorMqttTopic: string expected";
        if (message.button1LowerTemperature != null && message.hasOwnProperty("button1LowerTemperature"))
            if (!$util.isInteger(message.button1LowerTemperature))
                return "button1LowerTemperature: integer expected";
        if (message.button1UpperTemperature != null && message.hasOwnProperty("button1UpperTemperature"))
            if (!$util.isInteger(message.button1UpperTemperature))
                return "button1UpperTemperature: integer expected";
        if (message.button2LowerTemperature != null && message.hasOwnProperty("button2LowerTemperature"))
            if (!$util.isInteger(message.button2LowerTemperature))
                return "button2LowerTemperature: integer expected";
        if (message.button2UpperTemperature != null && message.hasOwnProperty("button2UpperTemperature"))
            if (!$util.isInteger(message.button2UpperTemperature))
                return "button2UpperTemperature: integer expected";
        return null;
    };

    /**
     * Creates a NSPanelConfig message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NSPanelConfig
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NSPanelConfig} NSPanelConfig
     */
    NSPanelConfig.fromObject = function fromObject(object) {
        if (object instanceof $root.NSPanelConfig)
            return object;
        let message = new $root.NSPanelConfig();
        if (object.name != null)
            message.name = String(object.name);
        if (object.defaultRoom != null)
            message.defaultRoom = object.defaultRoom | 0;
        switch (object.defaultPage) {
        default:
            if (typeof object.defaultPage === "number") {
                message.defaultPage = object.defaultPage;
                break;
            }
            break;
        case "HOME":
        case 0:
            message.defaultPage = 0;
            break;
        case "SCENES":
        case 1:
            message.defaultPage = 1;
            break;
        case "ENTITIES":
        case 2:
            message.defaultPage = 2;
            break;
        }
        if (object.screensaverActivationTimeout != null)
            message.screensaverActivationTimeout = object.screensaverActivationTimeout | 0;
        if (object.minButtonPushTime != null)
            message.minButtonPushTime = object.minButtonPushTime | 0;
        if (object.buttonLongPressTime != null)
            message.buttonLongPressTime = object.buttonLongPressTime | 0;
        if (object.specialModeTriggerTime != null)
            message.specialModeTriggerTime = object.specialModeTriggerTime | 0;
        if (object.specialModeReleaseTime != null)
            message.specialModeReleaseTime = object.specialModeReleaseTime | 0;
        if (object.screenDimLevel != null)
            message.screenDimLevel = object.screenDimLevel | 0;
        if (object.screensaverDimLevel != null)
            message.screensaverDimLevel = object.screensaverDimLevel | 0;
        switch (object.screensaverMode) {
        default:
            if (typeof object.screensaverMode === "number") {
                message.screensaverMode = object.screensaverMode;
                break;
            }
            break;
        case "WEATHER_WITH_BACKGROUND":
        case 0:
            message.screensaverMode = 0;
            break;
        case "WEATHER_WITHOUT_BACKGROUND":
        case 1:
            message.screensaverMode = 1;
            break;
        case "DATETIME_WITH_BACKGROUND":
        case 3:
            message.screensaverMode = 3;
            break;
        case "DATETIME_WITHOUT_BACKGROUND":
        case 4:
            message.screensaverMode = 4;
            break;
        case "NO_SCREENSAVER":
        case 5:
            message.screensaverMode = 5;
            break;
        }
        if (object.showScreensaverInsideTemperature != null)
            message.showScreensaverInsideTemperature = Boolean(object.showScreensaverInsideTemperature);
        if (object.showScreensaverOutsideTemperature != null)
            message.showScreensaverOutsideTemperature = Boolean(object.showScreensaverOutsideTemperature);
        if (object.clockUsStyle != null)
            message.clockUsStyle = Boolean(object.clockUsStyle);
        if (object.useFahrenheit != null)
            message.useFahrenheit = Boolean(object.useFahrenheit);
        if (object.isUsPanel != null)
            message.isUsPanel = Boolean(object.isUsPanel);
        if (object.roomInfos) {
            if (!Array.isArray(object.roomInfos))
                throw TypeError(".NSPanelConfig.roomInfos: array expected");
            message.roomInfos = [];
            for (let i = 0; i < object.roomInfos.length; ++i) {
                if (typeof object.roomInfos[i] !== "object")
                    throw TypeError(".NSPanelConfig.roomInfos: object expected");
                message.roomInfos[i] = $root.NSPanelConfig.RoomInfo.fromObject(object.roomInfos[i]);
            }
        }
        if (object.reverseRelays != null)
            message.reverseRelays = Boolean(object.reverseRelays);
        if (object.relay1DefaultMode != null)
            message.relay1DefaultMode = Boolean(object.relay1DefaultMode);
        if (object.relay2DefaultMode != null)
            message.relay2DefaultMode = Boolean(object.relay2DefaultMode);
        if (object.temperatureCalibration != null)
            message.temperatureCalibration = object.temperatureCalibration | 0;
        switch (object.button1Mode) {
        default:
            if (typeof object.button1Mode === "number") {
                message.button1Mode = object.button1Mode;
                break;
            }
            break;
        case "DIRECT":
        case 0:
            message.button1Mode = 0;
            break;
        case "FOLLOW":
        case 1:
            message.button1Mode = 1;
            break;
        case "NOTIFY_MANAGER":
        case 2:
            message.button1Mode = 2;
            break;
        case "THERMOSTAT_HEAT":
        case 3:
            message.button1Mode = 3;
            break;
        case "THERMOSTAT_COOL":
        case 4:
            message.button1Mode = 4;
            break;
        }
        switch (object.button2Mode) {
        default:
            if (typeof object.button2Mode === "number") {
                message.button2Mode = object.button2Mode;
                break;
            }
            break;
        case "DIRECT":
        case 0:
            message.button2Mode = 0;
            break;
        case "FOLLOW":
        case 1:
            message.button2Mode = 1;
            break;
        case "NOTIFY_MANAGER":
        case 2:
            message.button2Mode = 2;
            break;
        case "THERMOSTAT_HEAT":
        case 3:
            message.button2Mode = 3;
            break;
        case "THERMOSTAT_COOL":
        case 4:
            message.button2Mode = 4;
            break;
        }
        if (object.globalSceneEntityPageIds) {
            if (!Array.isArray(object.globalSceneEntityPageIds))
                throw TypeError(".NSPanelConfig.globalSceneEntityPageIds: array expected");
            message.globalSceneEntityPageIds = [];
            for (let i = 0; i < object.globalSceneEntityPageIds.length; ++i)
                message.globalSceneEntityPageIds[i] = object.globalSceneEntityPageIds[i] | 0;
        }
        if (object.optimisticMode != null)
            message.optimisticMode = Boolean(object.optimisticMode);
        if (object.raiseLightLevelTo_100Above != null)
            message.raiseLightLevelTo_100Above = object.raiseLightLevelTo_100Above | 0;
        if (object.nspanelId != null)
            message.nspanelId = object.nspanelId | 0;
        if (object.relay1RelayGroup) {
            if (!Array.isArray(object.relay1RelayGroup))
                throw TypeError(".NSPanelConfig.relay1RelayGroup: array expected");
            message.relay1RelayGroup = [];
            for (let i = 0; i < object.relay1RelayGroup.length; ++i)
                message.relay1RelayGroup[i] = object.relay1RelayGroup[i] | 0;
        }
        if (object.relay2RelayGroup) {
            if (!Array.isArray(object.relay2RelayGroup))
                throw TypeError(".NSPanelConfig.relay2RelayGroup: array expected");
            message.relay2RelayGroup = [];
            for (let i = 0; i < object.relay2RelayGroup.length; ++i)
                message.relay2RelayGroup[i] = object.relay2RelayGroup[i] | 0;
        }
        if (object.defaultLightBrightess != null)
            message.defaultLightBrightess = object.defaultLightBrightess | 0;
        if (object.lockedToDefaultRoom != null)
            message.lockedToDefaultRoom = Boolean(object.lockedToDefaultRoom);
        if (object.insideTemperatureSensorMqttTopic != null)
            message.insideTemperatureSensorMqttTopic = String(object.insideTemperatureSensorMqttTopic);
        if (object.button1LowerTemperature != null)
            message.button1LowerTemperature = object.button1LowerTemperature | 0;
        if (object.button1UpperTemperature != null)
            message.button1UpperTemperature = object.button1UpperTemperature | 0;
        if (object.button2LowerTemperature != null)
            message.button2LowerTemperature = object.button2LowerTemperature | 0;
        if (object.button2UpperTemperature != null)
            message.button2UpperTemperature = object.button2UpperTemperature | 0;
        return message;
    };

    /**
     * Creates a plain object from a NSPanelConfig message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NSPanelConfig
     * @static
     * @param {NSPanelConfig} message NSPanelConfig
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NSPanelConfig.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.roomInfos = [];
            object.globalSceneEntityPageIds = [];
            object.relay1RelayGroup = [];
            object.relay2RelayGroup = [];
        }
        if (options.defaults) {
            object.name = "";
            object.defaultRoom = 0;
            object.defaultPage = options.enums === String ? "HOME" : 0;
            object.screensaverActivationTimeout = 0;
            object.minButtonPushTime = 0;
            object.buttonLongPressTime = 0;
            object.specialModeTriggerTime = 0;
            object.specialModeReleaseTime = 0;
            object.screenDimLevel = 0;
            object.screensaverDimLevel = 0;
            object.screensaverMode = options.enums === String ? "WEATHER_WITH_BACKGROUND" : 0;
            object.showScreensaverInsideTemperature = false;
            object.showScreensaverOutsideTemperature = false;
            object.clockUsStyle = false;
            object.useFahrenheit = false;
            object.isUsPanel = false;
            object.reverseRelays = false;
            object.relay1DefaultMode = false;
            object.relay2DefaultMode = false;
            object.temperatureCalibration = 0;
            object.button1Mode = options.enums === String ? "DIRECT" : 0;
            object.button2Mode = options.enums === String ? "DIRECT" : 0;
            object.optimisticMode = false;
            object.raiseLightLevelTo_100Above = 0;
            object.nspanelId = 0;
            object.defaultLightBrightess = 0;
            object.lockedToDefaultRoom = false;
            object.insideTemperatureSensorMqttTopic = "";
            object.button1LowerTemperature = 0;
            object.button1UpperTemperature = 0;
            object.button2LowerTemperature = 0;
            object.button2UpperTemperature = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.defaultRoom != null && message.hasOwnProperty("defaultRoom"))
            object.defaultRoom = message.defaultRoom;
        if (message.defaultPage != null && message.hasOwnProperty("defaultPage"))
            object.defaultPage = options.enums === String ? $root.NSPanelConfig.NSPanelDefaultPage[message.defaultPage] === undefined ? message.defaultPage : $root.NSPanelConfig.NSPanelDefaultPage[message.defaultPage] : message.defaultPage;
        if (message.screensaverActivationTimeout != null && message.hasOwnProperty("screensaverActivationTimeout"))
            object.screensaverActivationTimeout = message.screensaverActivationTimeout;
        if (message.minButtonPushTime != null && message.hasOwnProperty("minButtonPushTime"))
            object.minButtonPushTime = message.minButtonPushTime;
        if (message.buttonLongPressTime != null && message.hasOwnProperty("buttonLongPressTime"))
            object.buttonLongPressTime = message.buttonLongPressTime;
        if (message.specialModeTriggerTime != null && message.hasOwnProperty("specialModeTriggerTime"))
            object.specialModeTriggerTime = message.specialModeTriggerTime;
        if (message.specialModeReleaseTime != null && message.hasOwnProperty("specialModeReleaseTime"))
            object.specialModeReleaseTime = message.specialModeReleaseTime;
        if (message.screenDimLevel != null && message.hasOwnProperty("screenDimLevel"))
            object.screenDimLevel = message.screenDimLevel;
        if (message.screensaverDimLevel != null && message.hasOwnProperty("screensaverDimLevel"))
            object.screensaverDimLevel = message.screensaverDimLevel;
        if (message.screensaverMode != null && message.hasOwnProperty("screensaverMode"))
            object.screensaverMode = options.enums === String ? $root.NSPanelConfig.NSPanelScreensaverMode[message.screensaverMode] === undefined ? message.screensaverMode : $root.NSPanelConfig.NSPanelScreensaverMode[message.screensaverMode] : message.screensaverMode;
        if (message.showScreensaverInsideTemperature != null && message.hasOwnProperty("showScreensaverInsideTemperature"))
            object.showScreensaverInsideTemperature = message.showScreensaverInsideTemperature;
        if (message.showScreensaverOutsideTemperature != null && message.hasOwnProperty("showScreensaverOutsideTemperature"))
            object.showScreensaverOutsideTemperature = message.showScreensaverOutsideTemperature;
        if (message.clockUsStyle != null && message.hasOwnProperty("clockUsStyle"))
            object.clockUsStyle = message.clockUsStyle;
        if (message.useFahrenheit != null && message.hasOwnProperty("useFahrenheit"))
            object.useFahrenheit = message.useFahrenheit;
        if (message.isUsPanel != null && message.hasOwnProperty("isUsPanel"))
            object.isUsPanel = message.isUsPanel;
        if (message.roomInfos && message.roomInfos.length) {
            object.roomInfos = [];
            for (let j = 0; j < message.roomInfos.length; ++j)
                object.roomInfos[j] = $root.NSPanelConfig.RoomInfo.toObject(message.roomInfos[j], options);
        }
        if (message.reverseRelays != null && message.hasOwnProperty("reverseRelays"))
            object.reverseRelays = message.reverseRelays;
        if (message.relay1DefaultMode != null && message.hasOwnProperty("relay1DefaultMode"))
            object.relay1DefaultMode = message.relay1DefaultMode;
        if (message.relay2DefaultMode != null && message.hasOwnProperty("relay2DefaultMode"))
            object.relay2DefaultMode = message.relay2DefaultMode;
        if (message.temperatureCalibration != null && message.hasOwnProperty("temperatureCalibration"))
            object.temperatureCalibration = message.temperatureCalibration;
        if (message.button1Mode != null && message.hasOwnProperty("button1Mode"))
            object.button1Mode = options.enums === String ? $root.NSPanelConfig.NSPanelButtonMode[message.button1Mode] === undefined ? message.button1Mode : $root.NSPanelConfig.NSPanelButtonMode[message.button1Mode] : message.button1Mode;
        if (message.button2Mode != null && message.hasOwnProperty("button2Mode"))
            object.button2Mode = options.enums === String ? $root.NSPanelConfig.NSPanelButtonMode[message.button2Mode] === undefined ? message.button2Mode : $root.NSPanelConfig.NSPanelButtonMode[message.button2Mode] : message.button2Mode;
        if (message.globalSceneEntityPageIds && message.globalSceneEntityPageIds.length) {
            object.globalSceneEntityPageIds = [];
            for (let j = 0; j < message.globalSceneEntityPageIds.length; ++j)
                object.globalSceneEntityPageIds[j] = message.globalSceneEntityPageIds[j];
        }
        if (message.optimisticMode != null && message.hasOwnProperty("optimisticMode"))
            object.optimisticMode = message.optimisticMode;
        if (message.raiseLightLevelTo_100Above != null && message.hasOwnProperty("raiseLightLevelTo_100Above"))
            object.raiseLightLevelTo_100Above = message.raiseLightLevelTo_100Above;
        if (message.nspanelId != null && message.hasOwnProperty("nspanelId"))
            object.nspanelId = message.nspanelId;
        if (message.relay1RelayGroup && message.relay1RelayGroup.length) {
            object.relay1RelayGroup = [];
            for (let j = 0; j < message.relay1RelayGroup.length; ++j)
                object.relay1RelayGroup[j] = message.relay1RelayGroup[j];
        }
        if (message.relay2RelayGroup && message.relay2RelayGroup.length) {
            object.relay2RelayGroup = [];
            for (let j = 0; j < message.relay2RelayGroup.length; ++j)
                object.relay2RelayGroup[j] = message.relay2RelayGroup[j];
        }
        if (message.defaultLightBrightess != null && message.hasOwnProperty("defaultLightBrightess"))
            object.defaultLightBrightess = message.defaultLightBrightess;
        if (message.lockedToDefaultRoom != null && message.hasOwnProperty("lockedToDefaultRoom"))
            object.lockedToDefaultRoom = message.lockedToDefaultRoom;
        if (message.insideTemperatureSensorMqttTopic != null && message.hasOwnProperty("insideTemperatureSensorMqttTopic"))
            object.insideTemperatureSensorMqttTopic = message.insideTemperatureSensorMqttTopic;
        if (message.button1LowerTemperature != null && message.hasOwnProperty("button1LowerTemperature"))
            object.button1LowerTemperature = message.button1LowerTemperature;
        if (message.button1UpperTemperature != null && message.hasOwnProperty("button1UpperTemperature"))
            object.button1UpperTemperature = message.button1UpperTemperature;
        if (message.button2LowerTemperature != null && message.hasOwnProperty("button2LowerTemperature"))
            object.button2LowerTemperature = message.button2LowerTemperature;
        if (message.button2UpperTemperature != null && message.hasOwnProperty("button2UpperTemperature"))
            object.button2UpperTemperature = message.button2UpperTemperature;
        return object;
    };

    /**
     * Converts this NSPanelConfig to JSON.
     * @function toJSON
     * @memberof NSPanelConfig
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NSPanelConfig.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NSPanelConfig
     * @function getTypeUrl
     * @memberof NSPanelConfig
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NSPanelConfig.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NSPanelConfig";
    };

    /**
     * NSPanelDefaultPage enum.
     * @name NSPanelConfig.NSPanelDefaultPage
     * @enum {number}
     * @property {number} HOME=0 HOME value
     * @property {number} SCENES=1 SCENES value
     * @property {number} ENTITIES=2 ENTITIES value
     */
    NSPanelConfig.NSPanelDefaultPage = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HOME"] = 0;
        values[valuesById[1] = "SCENES"] = 1;
        values[valuesById[2] = "ENTITIES"] = 2;
        return values;
    })();

    /**
     * NSPanelScreensaverMode enum.
     * @name NSPanelConfig.NSPanelScreensaverMode
     * @enum {number}
     * @property {number} WEATHER_WITH_BACKGROUND=0 WEATHER_WITH_BACKGROUND value
     * @property {number} WEATHER_WITHOUT_BACKGROUND=1 WEATHER_WITHOUT_BACKGROUND value
     * @property {number} DATETIME_WITH_BACKGROUND=3 DATETIME_WITH_BACKGROUND value
     * @property {number} DATETIME_WITHOUT_BACKGROUND=4 DATETIME_WITHOUT_BACKGROUND value
     * @property {number} NO_SCREENSAVER=5 NO_SCREENSAVER value
     */
    NSPanelConfig.NSPanelScreensaverMode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "WEATHER_WITH_BACKGROUND"] = 0;
        values[valuesById[1] = "WEATHER_WITHOUT_BACKGROUND"] = 1;
        values[valuesById[3] = "DATETIME_WITH_BACKGROUND"] = 3;
        values[valuesById[4] = "DATETIME_WITHOUT_BACKGROUND"] = 4;
        values[valuesById[5] = "NO_SCREENSAVER"] = 5;
        return values;
    })();

    NSPanelConfig.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof NSPanelConfig
         * @interface IRoomInfo
         * @property {number|null} [roomId] RoomInfo roomId
         * @property {Array.<number>|null} [entityPageIds] RoomInfo entityPageIds
         * @property {Array.<number>|null} [scenePageIds] RoomInfo scenePageIds
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof NSPanelConfig
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {NSPanelConfig.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            this.entityPageIds = [];
            this.scenePageIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo roomId.
         * @member {number} roomId
         * @memberof NSPanelConfig.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomId = 0;

        /**
         * RoomInfo entityPageIds.
         * @member {Array.<number>} entityPageIds
         * @memberof NSPanelConfig.RoomInfo
         * @instance
         */
        RoomInfo.prototype.entityPageIds = $util.emptyArray;

        /**
         * RoomInfo scenePageIds.
         * @member {Array.<number>} scenePageIds
         * @memberof NSPanelConfig.RoomInfo
         * @instance
         */
        RoomInfo.prototype.scenePageIds = $util.emptyArray;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof NSPanelConfig.RoomInfo
         * @static
         * @param {NSPanelConfig.IRoomInfo=} [properties] Properties to set
         * @returns {NSPanelConfig.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link NSPanelConfig.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof NSPanelConfig.RoomInfo
         * @static
         * @param {NSPanelConfig.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
            if (message.entityPageIds != null && message.entityPageIds.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.entityPageIds.length; ++i)
                    writer.int32(message.entityPageIds[i]);
                writer.ldelim();
            }
            if (message.scenePageIds != null && message.scenePageIds.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.scenePageIds.length; ++i)
                    writer.int32(message.scenePageIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link NSPanelConfig.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelConfig.RoomInfo
         * @static
         * @param {NSPanelConfig.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelConfig.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelConfig.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelConfig.RoomInfo();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.roomId = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.entityPageIds && message.entityPageIds.length))
                            message.entityPageIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.entityPageIds.push(reader.int32());
                        } else
                            message.entityPageIds.push(reader.int32());
                        break;
                    }
                case 3: {
                        if (!(message.scenePageIds && message.scenePageIds.length))
                            message.scenePageIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.scenePageIds.push(reader.int32());
                        } else
                            message.scenePageIds.push(reader.int32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelConfig.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelConfig.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof NSPanelConfig.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isInteger(message.roomId))
                    return "roomId: integer expected";
            if (message.entityPageIds != null && message.hasOwnProperty("entityPageIds")) {
                if (!Array.isArray(message.entityPageIds))
                    return "entityPageIds: array expected";
                for (let i = 0; i < message.entityPageIds.length; ++i)
                    if (!$util.isInteger(message.entityPageIds[i]))
                        return "entityPageIds: integer[] expected";
            }
            if (message.scenePageIds != null && message.hasOwnProperty("scenePageIds")) {
                if (!Array.isArray(message.scenePageIds))
                    return "scenePageIds: array expected";
                for (let i = 0; i < message.scenePageIds.length; ++i)
                    if (!$util.isInteger(message.scenePageIds[i]))
                        return "scenePageIds: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelConfig.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelConfig.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelConfig.RoomInfo)
                return object;
            let message = new $root.NSPanelConfig.RoomInfo();
            if (object.roomId != null)
                message.roomId = object.roomId | 0;
            if (object.entityPageIds) {
                if (!Array.isArray(object.entityPageIds))
                    throw TypeError(".NSPanelConfig.RoomInfo.entityPageIds: array expected");
                message.entityPageIds = [];
                for (let i = 0; i < object.entityPageIds.length; ++i)
                    message.entityPageIds[i] = object.entityPageIds[i] | 0;
            }
            if (object.scenePageIds) {
                if (!Array.isArray(object.scenePageIds))
                    throw TypeError(".NSPanelConfig.RoomInfo.scenePageIds: array expected");
                message.scenePageIds = [];
                for (let i = 0; i < object.scenePageIds.length; ++i)
                    message.scenePageIds[i] = object.scenePageIds[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelConfig.RoomInfo
         * @static
         * @param {NSPanelConfig.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                object.entityPageIds = [];
                object.scenePageIds = [];
            }
            if (options.defaults)
                object.roomId = 0;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            if (message.entityPageIds && message.entityPageIds.length) {
                object.entityPageIds = [];
                for (let j = 0; j < message.entityPageIds.length; ++j)
                    object.entityPageIds[j] = message.entityPageIds[j];
            }
            if (message.scenePageIds && message.scenePageIds.length) {
                object.scenePageIds = [];
                for (let j = 0; j < message.scenePageIds.length; ++j)
                    object.scenePageIds[j] = message.scenePageIds[j];
            }
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof NSPanelConfig.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for RoomInfo
         * @function getTypeUrl
         * @memberof NSPanelConfig.RoomInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelConfig.RoomInfo";
        };

        return RoomInfo;
    })();

    /**
     * NSPanelButtonMode enum.
     * @name NSPanelConfig.NSPanelButtonMode
     * @enum {number}
     * @property {number} DIRECT=0 DIRECT value
     * @property {number} FOLLOW=1 FOLLOW value
     * @property {number} NOTIFY_MANAGER=2 NOTIFY_MANAGER value
     * @property {number} THERMOSTAT_HEAT=3 THERMOSTAT_HEAT value
     * @property {number} THERMOSTAT_COOL=4 THERMOSTAT_COOL value
     */
    NSPanelConfig.NSPanelButtonMode = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "DIRECT"] = 0;
        values[valuesById[1] = "FOLLOW"] = 1;
        values[valuesById[2] = "NOTIFY_MANAGER"] = 2;
        values[valuesById[3] = "THERMOSTAT_HEAT"] = 3;
        values[valuesById[4] = "THERMOSTAT_COOL"] = 4;
        return values;
    })();

    return NSPanelConfig;
})();

/**
 * NSPanelWarningLevel enum.
 * @exports NSPanelWarningLevel
 * @enum {number}
 * @property {number} CRITICAL=0 CRITICAL value
 * @property {number} ERROR=1 ERROR value
 * @property {number} WARNING=2 WARNING value
 * @property {number} INFO=3 INFO value
 * @property {number} DEBUG=4 DEBUG value
 * @property {number} TRACE=5 TRACE value
 */
export const NSPanelWarningLevel = $root.NSPanelWarningLevel = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "CRITICAL"] = 0;
    values[valuesById[1] = "ERROR"] = 1;
    values[valuesById[2] = "WARNING"] = 2;
    values[valuesById[3] = "INFO"] = 3;
    values[valuesById[4] = "DEBUG"] = 4;
    values[valuesById[5] = "TRACE"] = 5;
    return values;
})();

export const NSPanelWarning = $root.NSPanelWarning = (() => {

    /**
     * Properties of a NSPanelWarning.
     * @exports INSPanelWarning
     * @interface INSPanelWarning
     * @property {NSPanelWarningLevel|null} [level] NSPanelWarning level
     * @property {string|null} [text] NSPanelWarning text
     */

    /**
     * Constructs a new NSPanelWarning.
     * @exports NSPanelWarning
     * @classdesc Represents a NSPanelWarning.
     * @implements INSPanelWarning
     * @constructor
     * @param {INSPanelWarning=} [properties] Properties to set
     */
    function NSPanelWarning(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NSPanelWarning level.
     * @member {NSPanelWarningLevel} level
     * @memberof NSPanelWarning
     * @instance
     */
    NSPanelWarning.prototype.level = 0;

    /**
     * NSPanelWarning text.
     * @member {string} text
     * @memberof NSPanelWarning
     * @instance
     */
    NSPanelWarning.prototype.text = "";

    /**
     * Creates a new NSPanelWarning instance using the specified properties.
     * @function create
     * @memberof NSPanelWarning
     * @static
     * @param {INSPanelWarning=} [properties] Properties to set
     * @returns {NSPanelWarning} NSPanelWarning instance
     */
    NSPanelWarning.create = function create(properties) {
        return new NSPanelWarning(properties);
    };

    /**
     * Encodes the specified NSPanelWarning message. Does not implicitly {@link NSPanelWarning.verify|verify} messages.
     * @function encode
     * @memberof NSPanelWarning
     * @static
     * @param {INSPanelWarning} message NSPanelWarning message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelWarning.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.level != null && Object.hasOwnProperty.call(message, "level"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.level);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
        return writer;
    };

    /**
     * Encodes the specified NSPanelWarning message, length delimited. Does not implicitly {@link NSPanelWarning.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NSPanelWarning
     * @static
     * @param {INSPanelWarning} message NSPanelWarning message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelWarning.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NSPanelWarning message from the specified reader or buffer.
     * @function decode
     * @memberof NSPanelWarning
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NSPanelWarning} NSPanelWarning
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelWarning.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelWarning();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.level = reader.int32();
                    break;
                }
            case 2: {
                    message.text = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NSPanelWarning message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NSPanelWarning
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NSPanelWarning} NSPanelWarning
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelWarning.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NSPanelWarning message.
     * @function verify
     * @memberof NSPanelWarning
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NSPanelWarning.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.level != null && message.hasOwnProperty("level"))
            switch (message.level) {
            default:
                return "level: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        return null;
    };

    /**
     * Creates a NSPanelWarning message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NSPanelWarning
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NSPanelWarning} NSPanelWarning
     */
    NSPanelWarning.fromObject = function fromObject(object) {
        if (object instanceof $root.NSPanelWarning)
            return object;
        let message = new $root.NSPanelWarning();
        switch (object.level) {
        default:
            if (typeof object.level === "number") {
                message.level = object.level;
                break;
            }
            break;
        case "CRITICAL":
        case 0:
            message.level = 0;
            break;
        case "ERROR":
        case 1:
            message.level = 1;
            break;
        case "WARNING":
        case 2:
            message.level = 2;
            break;
        case "INFO":
        case 3:
            message.level = 3;
            break;
        case "DEBUG":
        case 4:
            message.level = 4;
            break;
        case "TRACE":
        case 5:
            message.level = 5;
            break;
        }
        if (object.text != null)
            message.text = String(object.text);
        return message;
    };

    /**
     * Creates a plain object from a NSPanelWarning message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NSPanelWarning
     * @static
     * @param {NSPanelWarning} message NSPanelWarning
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NSPanelWarning.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.level = options.enums === String ? "CRITICAL" : 0;
            object.text = "";
        }
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = options.enums === String ? $root.NSPanelWarningLevel[message.level] === undefined ? message.level : $root.NSPanelWarningLevel[message.level] : message.level;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        return object;
    };

    /**
     * Converts this NSPanelWarning to JSON.
     * @function toJSON
     * @memberof NSPanelWarning
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NSPanelWarning.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NSPanelWarning
     * @function getTypeUrl
     * @memberof NSPanelWarning
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NSPanelWarning.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NSPanelWarning";
    };

    return NSPanelWarning;
})();

export const NSPanelStatusReport = $root.NSPanelStatusReport = (() => {

    /**
     * Properties of a NSPanelStatusReport.
     * @exports INSPanelStatusReport
     * @interface INSPanelStatusReport
     * @property {NSPanelStatusReport.state|null} [nspanelState] NSPanelStatusReport nspanelState
     * @property {number|null} [updateProgress] NSPanelStatusReport updateProgress
     * @property {number|null} [rssi] NSPanelStatusReport rssi
     * @property {number|null} [heapUsedPct] NSPanelStatusReport heapUsedPct
     * @property {string|null} [macAddress] NSPanelStatusReport macAddress
     * @property {number|null} [temperature] NSPanelStatusReport temperature
     * @property {string|null} [ipAddress] NSPanelStatusReport ipAddress
     * @property {Array.<INSPanelWarning>|null} [warnings] NSPanelStatusReport warnings
     * @property {string|null} [md5Firmware] NSPanelStatusReport md5Firmware
     * @property {string|null} [md5Littlefs] NSPanelStatusReport md5Littlefs
     * @property {string|null} [md5TftGui] NSPanelStatusReport md5TftGui
     * @property {boolean|null} [hasHumidity] NSPanelStatusReport hasHumidity
     * @property {number|null} [humidity] NSPanelStatusReport humidity
     * @property {boolean|null} [hasPressure] NSPanelStatusReport hasPressure
     * @property {number|null} [pressure] NSPanelStatusReport pressure
     */

    /**
     * Constructs a new NSPanelStatusReport.
     * @exports NSPanelStatusReport
     * @classdesc Represents a NSPanelStatusReport.
     * @implements INSPanelStatusReport
     * @constructor
     * @param {INSPanelStatusReport=} [properties] Properties to set
     */
    function NSPanelStatusReport(properties) {
        this.warnings = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NSPanelStatusReport nspanelState.
     * @member {NSPanelStatusReport.state} nspanelState
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.nspanelState = 0;

    /**
     * NSPanelStatusReport updateProgress.
     * @member {number} updateProgress
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.updateProgress = 0;

    /**
     * NSPanelStatusReport rssi.
     * @member {number} rssi
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.rssi = 0;

    /**
     * NSPanelStatusReport heapUsedPct.
     * @member {number} heapUsedPct
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.heapUsedPct = 0;

    /**
     * NSPanelStatusReport macAddress.
     * @member {string} macAddress
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.macAddress = "";

    /**
     * NSPanelStatusReport temperature.
     * @member {number} temperature
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.temperature = 0;

    /**
     * NSPanelStatusReport ipAddress.
     * @member {string} ipAddress
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.ipAddress = "";

    /**
     * NSPanelStatusReport warnings.
     * @member {Array.<INSPanelWarning>} warnings
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.warnings = $util.emptyArray;

    /**
     * NSPanelStatusReport md5Firmware.
     * @member {string} md5Firmware
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.md5Firmware = "";

    /**
     * NSPanelStatusReport md5Littlefs.
     * @member {string} md5Littlefs
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.md5Littlefs = "";

    /**
     * NSPanelStatusReport md5TftGui.
     * @member {string} md5TftGui
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.md5TftGui = "";

    /**
     * NSPanelStatusReport hasHumidity.
     * @member {boolean} hasHumidity
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.hasHumidity = false;

    /**
     * NSPanelStatusReport humidity.
     * @member {number} humidity
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.humidity = 0;

    /**
     * NSPanelStatusReport hasPressure.
     * @member {boolean} hasPressure
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.hasPressure = false;

    /**
     * NSPanelStatusReport pressure.
     * @member {number} pressure
     * @memberof NSPanelStatusReport
     * @instance
     */
    NSPanelStatusReport.prototype.pressure = 0;

    /**
     * Creates a new NSPanelStatusReport instance using the specified properties.
     * @function create
     * @memberof NSPanelStatusReport
     * @static
     * @param {INSPanelStatusReport=} [properties] Properties to set
     * @returns {NSPanelStatusReport} NSPanelStatusReport instance
     */
    NSPanelStatusReport.create = function create(properties) {
        return new NSPanelStatusReport(properties);
    };

    /**
     * Encodes the specified NSPanelStatusReport message. Does not implicitly {@link NSPanelStatusReport.verify|verify} messages.
     * @function encode
     * @memberof NSPanelStatusReport
     * @static
     * @param {INSPanelStatusReport} message NSPanelStatusReport message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelStatusReport.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.nspanelState != null && Object.hasOwnProperty.call(message, "nspanelState"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.nspanelState);
        if (message.updateProgress != null && Object.hasOwnProperty.call(message, "updateProgress"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.updateProgress);
        if (message.rssi != null && Object.hasOwnProperty.call(message, "rssi"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.rssi);
        if (message.heapUsedPct != null && Object.hasOwnProperty.call(message, "heapUsedPct"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.heapUsedPct);
        if (message.macAddress != null && Object.hasOwnProperty.call(message, "macAddress"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.macAddress);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.temperature);
        if (message.ipAddress != null && Object.hasOwnProperty.call(message, "ipAddress"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.ipAddress);
        if (message.warnings != null && message.warnings.length)
            for (let i = 0; i < message.warnings.length; ++i)
                $root.NSPanelWarning.encode(message.warnings[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.md5Firmware != null && Object.hasOwnProperty.call(message, "md5Firmware"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.md5Firmware);
        if (message.md5Littlefs != null && Object.hasOwnProperty.call(message, "md5Littlefs"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.md5Littlefs);
        if (message.md5TftGui != null && Object.hasOwnProperty.call(message, "md5TftGui"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.md5TftGui);
        if (message.hasHumidity != null && Object.hasOwnProperty.call(message, "hasHumidity"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.hasHumidity);
        if (message.humidity != null && Object.hasOwnProperty.call(message, "humidity"))
            writer.uint32(/* id 13, wireType 5 =*/109).float(message.humidity);
        if (message.hasPressure != null && Object.hasOwnProperty.call(message, "hasPressure"))
            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.hasPressure);
        if (message.pressure != null && Object.hasOwnProperty.call(message, "pressure"))
            writer.uint32(/* id 15, wireType 5 =*/125).float(message.pressure);
        return writer;
    };

    /**
     * Encodes the specified NSPanelStatusReport message, length delimited. Does not implicitly {@link NSPanelStatusReport.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NSPanelStatusReport
     * @static
     * @param {INSPanelStatusReport} message NSPanelStatusReport message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelStatusReport.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NSPanelStatusReport message from the specified reader or buffer.
     * @function decode
     * @memberof NSPanelStatusReport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NSPanelStatusReport} NSPanelStatusReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelStatusReport.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelStatusReport();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.nspanelState = reader.int32();
                    break;
                }
            case 2: {
                    message.updateProgress = reader.int32();
                    break;
                }
            case 3: {
                    message.rssi = reader.int32();
                    break;
                }
            case 4: {
                    message.heapUsedPct = reader.int32();
                    break;
                }
            case 5: {
                    message.macAddress = reader.string();
                    break;
                }
            case 6: {
                    message.temperature = reader.float();
                    break;
                }
            case 7: {
                    message.ipAddress = reader.string();
                    break;
                }
            case 8: {
                    if (!(message.warnings && message.warnings.length))
                        message.warnings = [];
                    message.warnings.push($root.NSPanelWarning.decode(reader, reader.uint32()));
                    break;
                }
            case 9: {
                    message.md5Firmware = reader.string();
                    break;
                }
            case 10: {
                    message.md5Littlefs = reader.string();
                    break;
                }
            case 11: {
                    message.md5TftGui = reader.string();
                    break;
                }
            case 12: {
                    message.hasHumidity = reader.bool();
                    break;
                }
            case 13: {
                    message.humidity = reader.float();
                    break;
                }
            case 14: {
                    message.hasPressure = reader.bool();
                    break;
                }
            case 15: {
                    message.pressure = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NSPanelStatusReport message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NSPanelStatusReport
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NSPanelStatusReport} NSPanelStatusReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelStatusReport.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NSPanelStatusReport message.
     * @function verify
     * @memberof NSPanelStatusReport
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NSPanelStatusReport.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.nspanelState != null && message.hasOwnProperty("nspanelState"))
            switch (message.nspanelState) {
            default:
                return "nspanelState: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.updateProgress != null && message.hasOwnProperty("updateProgress"))
            if (!$util.isInteger(message.updateProgress))
                return "updateProgress: integer expected";
        if (message.rssi != null && message.hasOwnProperty("rssi"))
            if (!$util.isInteger(message.rssi))
                return "rssi: integer expected";
        if (message.heapUsedPct != null && message.hasOwnProperty("heapUsedPct"))
            if (!$util.isInteger(message.heapUsedPct))
                return "heapUsedPct: integer expected";
        if (message.macAddress != null && message.hasOwnProperty("macAddress"))
            if (!$util.isString(message.macAddress))
                return "macAddress: string expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
            if (!$util.isString(message.ipAddress))
                return "ipAddress: string expected";
        if (message.warnings != null && message.hasOwnProperty("warnings")) {
            if (!Array.isArray(message.warnings))
                return "warnings: array expected";
            for (let i = 0; i < message.warnings.length; ++i) {
                let error = $root.NSPanelWarning.verify(message.warnings[i]);
                if (error)
                    return "warnings." + error;
            }
        }
        if (message.md5Firmware != null && message.hasOwnProperty("md5Firmware"))
            if (!$util.isString(message.md5Firmware))
                return "md5Firmware: string expected";
        if (message.md5Littlefs != null && message.hasOwnProperty("md5Littlefs"))
            if (!$util.isString(message.md5Littlefs))
                return "md5Littlefs: string expected";
        if (message.md5TftGui != null && message.hasOwnProperty("md5TftGui"))
            if (!$util.isString(message.md5TftGui))
                return "md5TftGui: string expected";
        if (message.hasHumidity != null && message.hasOwnProperty("hasHumidity"))
            if (typeof message.hasHumidity !== "boolean")
                return "hasHumidity: boolean expected";
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            if (typeof message.humidity !== "number")
                return "humidity: number expected";
        if (message.hasPressure != null && message.hasOwnProperty("hasPressure"))
            if (typeof message.hasPressure !== "boolean")
                return "hasPressure: boolean expected";
        if (message.pressure != null && message.hasOwnProperty("pressure"))
            if (typeof message.pressure !== "number")
                return "pressure: number expected";
        return null;
    };

    /**
     * Creates a NSPanelStatusReport message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NSPanelStatusReport
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NSPanelStatusReport} NSPanelStatusReport
     */
    NSPanelStatusReport.fromObject = function fromObject(object) {
        if (object instanceof $root.NSPanelStatusReport)
            return object;
        let message = new $root.NSPanelStatusReport();
        switch (object.nspanelState) {
        default:
            if (typeof object.nspanelState === "number") {
                message.nspanelState = object.nspanelState;
                break;
            }
            break;
        case "ONLINE":
        case 0:
            message.nspanelState = 0;
            break;
        case "OFFLINE":
        case 1:
            message.nspanelState = 1;
            break;
        case "UPDATING_TFT":
        case 2:
            message.nspanelState = 2;
            break;
        case "UPDATING_FIRMWARE":
        case 3:
            message.nspanelState = 3;
            break;
        case "UPDATING_LITTLEFS":
        case 4:
            message.nspanelState = 4;
            break;
        }
        if (object.updateProgress != null)
            message.updateProgress = object.updateProgress | 0;
        if (object.rssi != null)
            message.rssi = object.rssi | 0;
        if (object.heapUsedPct != null)
            message.heapUsedPct = object.heapUsedPct | 0;
        if (object.macAddress != null)
            message.macAddress = String(object.macAddress);
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        if (object.ipAddress != null)
            message.ipAddress = String(object.ipAddress);
        if (object.warnings) {
            if (!Array.isArray(object.warnings))
                throw TypeError(".NSPanelStatusReport.warnings: array expected");
            message.warnings = [];
            for (let i = 0; i < object.warnings.length; ++i) {
                if (typeof object.warnings[i] !== "object")
                    throw TypeError(".NSPanelStatusReport.warnings: object expected");
                message.warnings[i] = $root.NSPanelWarning.fromObject(object.warnings[i]);
            }
        }
        if (object.md5Firmware != null)
            message.md5Firmware = String(object.md5Firmware);
        if (object.md5Littlefs != null)
            message.md5Littlefs = String(object.md5Littlefs);
        if (object.md5TftGui != null)
            message.md5TftGui = String(object.md5TftGui);
        if (object.hasHumidity != null)
            message.hasHumidity = Boolean(object.hasHumidity);
        if (object.humidity != null)
            message.humidity = Number(object.humidity);
        if (object.hasPressure != null)
            message.hasPressure = Boolean(object.hasPressure);
        if (object.pressure != null)
            message.pressure = Number(object.pressure);
        return message;
    };

    /**
     * Creates a plain object from a NSPanelStatusReport message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NSPanelStatusReport
     * @static
     * @param {NSPanelStatusReport} message NSPanelStatusReport
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NSPanelStatusReport.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.warnings = [];
        if (options.defaults) {
            object.nspanelState = options.enums === String ? "ONLINE" : 0;
            object.updateProgress = 0;
            object.rssi = 0;
            object.heapUsedPct = 0;
            object.macAddress = "";
            object.temperature = 0;
            object.ipAddress = "";
            object.md5Firmware = "";
            object.md5Littlefs = "";
            object.md5TftGui = "";
            object.hasHumidity = false;
            object.humidity = 0;
            object.hasPressure = false;
            object.pressure = 0;
        }
        if (message.nspanelState != null && message.hasOwnProperty("nspanelState"))
            object.nspanelState = options.enums === String ? $root.NSPanelStatusReport.state[message.nspanelState] === undefined ? message.nspanelState : $root.NSPanelStatusReport.state[message.nspanelState] : message.nspanelState;
        if (message.updateProgress != null && message.hasOwnProperty("updateProgress"))
            object.updateProgress = message.updateProgress;
        if (message.rssi != null && message.hasOwnProperty("rssi"))
            object.rssi = message.rssi;
        if (message.heapUsedPct != null && message.hasOwnProperty("heapUsedPct"))
            object.heapUsedPct = message.heapUsedPct;
        if (message.macAddress != null && message.hasOwnProperty("macAddress"))
            object.macAddress = message.macAddress;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        if (message.ipAddress != null && message.hasOwnProperty("ipAddress"))
            object.ipAddress = message.ipAddress;
        if (message.warnings && message.warnings.length) {
            object.warnings = [];
            for (let j = 0; j < message.warnings.length; ++j)
                object.warnings[j] = $root.NSPanelWarning.toObject(message.warnings[j], options);
        }
        if (message.md5Firmware != null && message.hasOwnProperty("md5Firmware"))
            object.md5Firmware = message.md5Firmware;
        if (message.md5Littlefs != null && message.hasOwnProperty("md5Littlefs"))
            object.md5Littlefs = message.md5Littlefs;
        if (message.md5TftGui != null && message.hasOwnProperty("md5TftGui"))
            object.md5TftGui = message.md5TftGui;
        if (message.hasHumidity != null && message.hasOwnProperty("hasHumidity"))
            object.hasHumidity = message.hasHumidity;
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            object.humidity = options.json && !isFinite(message.humidity) ? String(message.humidity) : message.humidity;
        if (message.hasPressure != null && message.hasOwnProperty("hasPressure"))
            object.hasPressure = message.hasPressure;
        if (message.pressure != null && message.hasOwnProperty("pressure"))
            object.pressure = options.json && !isFinite(message.pressure) ? String(message.pressure) : message.pressure;
        return object;
    };

    /**
     * Converts this NSPanelStatusReport to JSON.
     * @function toJSON
     * @memberof NSPanelStatusReport
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NSPanelStatusReport.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NSPanelStatusReport
     * @function getTypeUrl
     * @memberof NSPanelStatusReport
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NSPanelStatusReport.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NSPanelStatusReport";
    };

    /**
     * state enum.
     * @name NSPanelStatusReport.state
     * @enum {number}
     * @property {number} ONLINE=0 ONLINE value
     * @property {number} OFFLINE=1 OFFLINE value
     * @property {number} UPDATING_TFT=2 UPDATING_TFT value
     * @property {number} UPDATING_FIRMWARE=3 UPDATING_FIRMWARE value
     * @property {number} UPDATING_LITTLEFS=4 UPDATING_LITTLEFS value
     */
    NSPanelStatusReport.state = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ONLINE"] = 0;
        values[valuesById[1] = "OFFLINE"] = 1;
        values[valuesById[2] = "UPDATING_TFT"] = 2;
        values[valuesById[3] = "UPDATING_FIRMWARE"] = 3;
        values[valuesById[4] = "UPDATING_LITTLEFS"] = 4;
        return values;
    })();

    return NSPanelStatusReport;
})();

export const NSPanelRoomEntitiesPage = $root.NSPanelRoomEntitiesPage = (() => {

    /**
     * Properties of a NSPanelRoomEntitiesPage.
     * @exports INSPanelRoomEntitiesPage
     * @interface INSPanelRoomEntitiesPage
     * @property {number|null} [id] NSPanelRoomEntitiesPage id
     * @property {number|null} [pageType] NSPanelRoomEntitiesPage pageType
     * @property {string|null} [headerText] NSPanelRoomEntitiesPage headerText
     * @property {Array.<NSPanelRoomEntitiesPage.IEntitySlot>|null} [entities] NSPanelRoomEntitiesPage entities
     */

    /**
     * Constructs a new NSPanelRoomEntitiesPage.
     * @exports NSPanelRoomEntitiesPage
     * @classdesc Represents a NSPanelRoomEntitiesPage.
     * @implements INSPanelRoomEntitiesPage
     * @constructor
     * @param {INSPanelRoomEntitiesPage=} [properties] Properties to set
     */
    function NSPanelRoomEntitiesPage(properties) {
        this.entities = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NSPanelRoomEntitiesPage id.
     * @member {number} id
     * @memberof NSPanelRoomEntitiesPage
     * @instance
     */
    NSPanelRoomEntitiesPage.prototype.id = 0;

    /**
     * NSPanelRoomEntitiesPage pageType.
     * @member {number} pageType
     * @memberof NSPanelRoomEntitiesPage
     * @instance
     */
    NSPanelRoomEntitiesPage.prototype.pageType = 0;

    /**
     * NSPanelRoomEntitiesPage headerText.
     * @member {string} headerText
     * @memberof NSPanelRoomEntitiesPage
     * @instance
     */
    NSPanelRoomEntitiesPage.prototype.headerText = "";

    /**
     * NSPanelRoomEntitiesPage entities.
     * @member {Array.<NSPanelRoomEntitiesPage.IEntitySlot>} entities
     * @memberof NSPanelRoomEntitiesPage
     * @instance
     */
    NSPanelRoomEntitiesPage.prototype.entities = $util.emptyArray;

    /**
     * Creates a new NSPanelRoomEntitiesPage instance using the specified properties.
     * @function create
     * @memberof NSPanelRoomEntitiesPage
     * @static
     * @param {INSPanelRoomEntitiesPage=} [properties] Properties to set
     * @returns {NSPanelRoomEntitiesPage} NSPanelRoomEntitiesPage instance
     */
    NSPanelRoomEntitiesPage.create = function create(properties) {
        return new NSPanelRoomEntitiesPage(properties);
    };

    /**
     * Encodes the specified NSPanelRoomEntitiesPage message. Does not implicitly {@link NSPanelRoomEntitiesPage.verify|verify} messages.
     * @function encode
     * @memberof NSPanelRoomEntitiesPage
     * @static
     * @param {INSPanelRoomEntitiesPage} message NSPanelRoomEntitiesPage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelRoomEntitiesPage.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.pageType != null && Object.hasOwnProperty.call(message, "pageType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pageType);
        if (message.headerText != null && Object.hasOwnProperty.call(message, "headerText"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.headerText);
        if (message.entities != null && message.entities.length)
            for (let i = 0; i < message.entities.length; ++i)
                $root.NSPanelRoomEntitiesPage.EntitySlot.encode(message.entities[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified NSPanelRoomEntitiesPage message, length delimited. Does not implicitly {@link NSPanelRoomEntitiesPage.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NSPanelRoomEntitiesPage
     * @static
     * @param {INSPanelRoomEntitiesPage} message NSPanelRoomEntitiesPage message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelRoomEntitiesPage.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NSPanelRoomEntitiesPage message from the specified reader or buffer.
     * @function decode
     * @memberof NSPanelRoomEntitiesPage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NSPanelRoomEntitiesPage} NSPanelRoomEntitiesPage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelRoomEntitiesPage.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelRoomEntitiesPage();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int32();
                    break;
                }
            case 2: {
                    message.pageType = reader.int32();
                    break;
                }
            case 3: {
                    message.headerText = reader.string();
                    break;
                }
            case 4: {
                    if (!(message.entities && message.entities.length))
                        message.entities = [];
                    message.entities.push($root.NSPanelRoomEntitiesPage.EntitySlot.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NSPanelRoomEntitiesPage message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NSPanelRoomEntitiesPage
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NSPanelRoomEntitiesPage} NSPanelRoomEntitiesPage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelRoomEntitiesPage.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NSPanelRoomEntitiesPage message.
     * @function verify
     * @memberof NSPanelRoomEntitiesPage
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NSPanelRoomEntitiesPage.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.pageType != null && message.hasOwnProperty("pageType"))
            if (!$util.isInteger(message.pageType))
                return "pageType: integer expected";
        if (message.headerText != null && message.hasOwnProperty("headerText"))
            if (!$util.isString(message.headerText))
                return "headerText: string expected";
        if (message.entities != null && message.hasOwnProperty("entities")) {
            if (!Array.isArray(message.entities))
                return "entities: array expected";
            for (let i = 0; i < message.entities.length; ++i) {
                let error = $root.NSPanelRoomEntitiesPage.EntitySlot.verify(message.entities[i]);
                if (error)
                    return "entities." + error;
            }
        }
        return null;
    };

    /**
     * Creates a NSPanelRoomEntitiesPage message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NSPanelRoomEntitiesPage
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NSPanelRoomEntitiesPage} NSPanelRoomEntitiesPage
     */
    NSPanelRoomEntitiesPage.fromObject = function fromObject(object) {
        if (object instanceof $root.NSPanelRoomEntitiesPage)
            return object;
        let message = new $root.NSPanelRoomEntitiesPage();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.pageType != null)
            message.pageType = object.pageType | 0;
        if (object.headerText != null)
            message.headerText = String(object.headerText);
        if (object.entities) {
            if (!Array.isArray(object.entities))
                throw TypeError(".NSPanelRoomEntitiesPage.entities: array expected");
            message.entities = [];
            for (let i = 0; i < object.entities.length; ++i) {
                if (typeof object.entities[i] !== "object")
                    throw TypeError(".NSPanelRoomEntitiesPage.entities: object expected");
                message.entities[i] = $root.NSPanelRoomEntitiesPage.EntitySlot.fromObject(object.entities[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a NSPanelRoomEntitiesPage message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NSPanelRoomEntitiesPage
     * @static
     * @param {NSPanelRoomEntitiesPage} message NSPanelRoomEntitiesPage
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NSPanelRoomEntitiesPage.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.entities = [];
        if (options.defaults) {
            object.id = 0;
            object.pageType = 0;
            object.headerText = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.pageType != null && message.hasOwnProperty("pageType"))
            object.pageType = message.pageType;
        if (message.headerText != null && message.hasOwnProperty("headerText"))
            object.headerText = message.headerText;
        if (message.entities && message.entities.length) {
            object.entities = [];
            for (let j = 0; j < message.entities.length; ++j)
                object.entities[j] = $root.NSPanelRoomEntitiesPage.EntitySlot.toObject(message.entities[j], options);
        }
        return object;
    };

    /**
     * Converts this NSPanelRoomEntitiesPage to JSON.
     * @function toJSON
     * @memberof NSPanelRoomEntitiesPage
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NSPanelRoomEntitiesPage.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NSPanelRoomEntitiesPage
     * @function getTypeUrl
     * @memberof NSPanelRoomEntitiesPage
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NSPanelRoomEntitiesPage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NSPanelRoomEntitiesPage";
    };

    NSPanelRoomEntitiesPage.EntitySlot = (function() {

        /**
         * Properties of an EntitySlot.
         * @memberof NSPanelRoomEntitiesPage
         * @interface IEntitySlot
         * @property {number|null} [roomViewPosition] EntitySlot roomViewPosition
         * @property {string|null} [name] EntitySlot name
         * @property {string|null} [icon] EntitySlot icon
         * @property {number|null} [pco] EntitySlot pco
         * @property {number|null} [pco2] EntitySlot pco2
         * @property {boolean|null} [canSaveScene] EntitySlot canSaveScene
         * @property {string|null} [mqttStateTopic] EntitySlot mqttStateTopic
         */

        /**
         * Constructs a new EntitySlot.
         * @memberof NSPanelRoomEntitiesPage
         * @classdesc Represents an EntitySlot.
         * @implements IEntitySlot
         * @constructor
         * @param {NSPanelRoomEntitiesPage.IEntitySlot=} [properties] Properties to set
         */
        function EntitySlot(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntitySlot roomViewPosition.
         * @member {number} roomViewPosition
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @instance
         */
        EntitySlot.prototype.roomViewPosition = 0;

        /**
         * EntitySlot name.
         * @member {string} name
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @instance
         */
        EntitySlot.prototype.name = "";

        /**
         * EntitySlot icon.
         * @member {string} icon
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @instance
         */
        EntitySlot.prototype.icon = "";

        /**
         * EntitySlot pco.
         * @member {number} pco
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @instance
         */
        EntitySlot.prototype.pco = 0;

        /**
         * EntitySlot pco2.
         * @member {number} pco2
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @instance
         */
        EntitySlot.prototype.pco2 = 0;

        /**
         * EntitySlot canSaveScene.
         * @member {boolean} canSaveScene
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @instance
         */
        EntitySlot.prototype.canSaveScene = false;

        /**
         * EntitySlot mqttStateTopic.
         * @member {string} mqttStateTopic
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @instance
         */
        EntitySlot.prototype.mqttStateTopic = "";

        /**
         * Creates a new EntitySlot instance using the specified properties.
         * @function create
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @static
         * @param {NSPanelRoomEntitiesPage.IEntitySlot=} [properties] Properties to set
         * @returns {NSPanelRoomEntitiesPage.EntitySlot} EntitySlot instance
         */
        EntitySlot.create = function create(properties) {
            return new EntitySlot(properties);
        };

        /**
         * Encodes the specified EntitySlot message. Does not implicitly {@link NSPanelRoomEntitiesPage.EntitySlot.verify|verify} messages.
         * @function encode
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @static
         * @param {NSPanelRoomEntitiesPage.IEntitySlot} message EntitySlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntitySlot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomViewPosition != null && Object.hasOwnProperty.call(message, "roomViewPosition"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomViewPosition);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.icon != null && Object.hasOwnProperty.call(message, "icon"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.icon);
            if (message.pco != null && Object.hasOwnProperty.call(message, "pco"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.pco);
            if (message.pco2 != null && Object.hasOwnProperty.call(message, "pco2"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.pco2);
            if (message.canSaveScene != null && Object.hasOwnProperty.call(message, "canSaveScene"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.canSaveScene);
            if (message.mqttStateTopic != null && Object.hasOwnProperty.call(message, "mqttStateTopic"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.mqttStateTopic);
            return writer;
        };

        /**
         * Encodes the specified EntitySlot message, length delimited. Does not implicitly {@link NSPanelRoomEntitiesPage.EntitySlot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @static
         * @param {NSPanelRoomEntitiesPage.IEntitySlot} message EntitySlot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntitySlot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntitySlot message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelRoomEntitiesPage.EntitySlot} EntitySlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntitySlot.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelRoomEntitiesPage.EntitySlot();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.roomViewPosition = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.icon = reader.string();
                        break;
                    }
                case 4: {
                        message.pco = reader.int32();
                        break;
                    }
                case 5: {
                        message.pco2 = reader.int32();
                        break;
                    }
                case 6: {
                        message.canSaveScene = reader.bool();
                        break;
                    }
                case 7: {
                        message.mqttStateTopic = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntitySlot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelRoomEntitiesPage.EntitySlot} EntitySlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntitySlot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntitySlot message.
         * @function verify
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntitySlot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomViewPosition != null && message.hasOwnProperty("roomViewPosition"))
                if (!$util.isInteger(message.roomViewPosition))
                    return "roomViewPosition: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.icon != null && message.hasOwnProperty("icon"))
                if (!$util.isString(message.icon))
                    return "icon: string expected";
            if (message.pco != null && message.hasOwnProperty("pco"))
                if (!$util.isInteger(message.pco))
                    return "pco: integer expected";
            if (message.pco2 != null && message.hasOwnProperty("pco2"))
                if (!$util.isInteger(message.pco2))
                    return "pco2: integer expected";
            if (message.canSaveScene != null && message.hasOwnProperty("canSaveScene"))
                if (typeof message.canSaveScene !== "boolean")
                    return "canSaveScene: boolean expected";
            if (message.mqttStateTopic != null && message.hasOwnProperty("mqttStateTopic"))
                if (!$util.isString(message.mqttStateTopic))
                    return "mqttStateTopic: string expected";
            return null;
        };

        /**
         * Creates an EntitySlot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelRoomEntitiesPage.EntitySlot} EntitySlot
         */
        EntitySlot.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelRoomEntitiesPage.EntitySlot)
                return object;
            let message = new $root.NSPanelRoomEntitiesPage.EntitySlot();
            if (object.roomViewPosition != null)
                message.roomViewPosition = object.roomViewPosition | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.icon != null)
                message.icon = String(object.icon);
            if (object.pco != null)
                message.pco = object.pco | 0;
            if (object.pco2 != null)
                message.pco2 = object.pco2 | 0;
            if (object.canSaveScene != null)
                message.canSaveScene = Boolean(object.canSaveScene);
            if (object.mqttStateTopic != null)
                message.mqttStateTopic = String(object.mqttStateTopic);
            return message;
        };

        /**
         * Creates a plain object from an EntitySlot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @static
         * @param {NSPanelRoomEntitiesPage.EntitySlot} message EntitySlot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntitySlot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.roomViewPosition = 0;
                object.name = "";
                object.icon = "";
                object.pco = 0;
                object.pco2 = 0;
                object.canSaveScene = false;
                object.mqttStateTopic = "";
            }
            if (message.roomViewPosition != null && message.hasOwnProperty("roomViewPosition"))
                object.roomViewPosition = message.roomViewPosition;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.icon != null && message.hasOwnProperty("icon"))
                object.icon = message.icon;
            if (message.pco != null && message.hasOwnProperty("pco"))
                object.pco = message.pco;
            if (message.pco2 != null && message.hasOwnProperty("pco2"))
                object.pco2 = message.pco2;
            if (message.canSaveScene != null && message.hasOwnProperty("canSaveScene"))
                object.canSaveScene = message.canSaveScene;
            if (message.mqttStateTopic != null && message.hasOwnProperty("mqttStateTopic"))
                object.mqttStateTopic = message.mqttStateTopic;
            return object;
        };

        /**
         * Converts this EntitySlot to JSON.
         * @function toJSON
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntitySlot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EntitySlot
         * @function getTypeUrl
         * @memberof NSPanelRoomEntitiesPage.EntitySlot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EntitySlot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelRoomEntitiesPage.EntitySlot";
        };

        return EntitySlot;
    })();

    return NSPanelRoomEntitiesPage;
})();

export const NSPanelRoomStatus = $root.NSPanelRoomStatus = (() => {

    /**
     * Properties of a NSPanelRoomStatus.
     * @exports INSPanelRoomStatus
     * @interface INSPanelRoomStatus
     * @property {number|null} [id] NSPanelRoomStatus id
     * @property {string|null} [name] NSPanelRoomStatus name
     * @property {number|null} [averageDimLevel] NSPanelRoomStatus averageDimLevel
     * @property {number|null} [ceilingLightsDimLevel] NSPanelRoomStatus ceilingLightsDimLevel
     * @property {number|null} [tableLightsDimLevel] NSPanelRoomStatus tableLightsDimLevel
     * @property {number|null} [averageColorTemperature] NSPanelRoomStatus averageColorTemperature
     * @property {number|null} [ceilingLightsColorTemperatureValue] NSPanelRoomStatus ceilingLightsColorTemperatureValue
     * @property {number|null} [tableLightsColorTemperatureValue] NSPanelRoomStatus tableLightsColorTemperatureValue
     * @property {number|null} [numCeilingLights] NSPanelRoomStatus numCeilingLights
     * @property {number|null} [numTableLights] NSPanelRoomStatus numTableLights
     * @property {number|null} [numCeilingLightsOn] NSPanelRoomStatus numCeilingLightsOn
     * @property {number|null} [numTableLightsOn] NSPanelRoomStatus numTableLightsOn
     * @property {Array.<number>|null} [entityPageIds] NSPanelRoomStatus entityPageIds
     */

    /**
     * Constructs a new NSPanelRoomStatus.
     * @exports NSPanelRoomStatus
     * @classdesc Represents a NSPanelRoomStatus.
     * @implements INSPanelRoomStatus
     * @constructor
     * @param {INSPanelRoomStatus=} [properties] Properties to set
     */
    function NSPanelRoomStatus(properties) {
        this.entityPageIds = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NSPanelRoomStatus id.
     * @member {number} id
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.id = 0;

    /**
     * NSPanelRoomStatus name.
     * @member {string} name
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.name = "";

    /**
     * NSPanelRoomStatus averageDimLevel.
     * @member {number} averageDimLevel
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.averageDimLevel = 0;

    /**
     * NSPanelRoomStatus ceilingLightsDimLevel.
     * @member {number} ceilingLightsDimLevel
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.ceilingLightsDimLevel = 0;

    /**
     * NSPanelRoomStatus tableLightsDimLevel.
     * @member {number} tableLightsDimLevel
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.tableLightsDimLevel = 0;

    /**
     * NSPanelRoomStatus averageColorTemperature.
     * @member {number} averageColorTemperature
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.averageColorTemperature = 0;

    /**
     * NSPanelRoomStatus ceilingLightsColorTemperatureValue.
     * @member {number} ceilingLightsColorTemperatureValue
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.ceilingLightsColorTemperatureValue = 0;

    /**
     * NSPanelRoomStatus tableLightsColorTemperatureValue.
     * @member {number} tableLightsColorTemperatureValue
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.tableLightsColorTemperatureValue = 0;

    /**
     * NSPanelRoomStatus numCeilingLights.
     * @member {number} numCeilingLights
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.numCeilingLights = 0;

    /**
     * NSPanelRoomStatus numTableLights.
     * @member {number} numTableLights
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.numTableLights = 0;

    /**
     * NSPanelRoomStatus numCeilingLightsOn.
     * @member {number} numCeilingLightsOn
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.numCeilingLightsOn = 0;

    /**
     * NSPanelRoomStatus numTableLightsOn.
     * @member {number} numTableLightsOn
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.numTableLightsOn = 0;

    /**
     * NSPanelRoomStatus entityPageIds.
     * @member {Array.<number>} entityPageIds
     * @memberof NSPanelRoomStatus
     * @instance
     */
    NSPanelRoomStatus.prototype.entityPageIds = $util.emptyArray;

    /**
     * Creates a new NSPanelRoomStatus instance using the specified properties.
     * @function create
     * @memberof NSPanelRoomStatus
     * @static
     * @param {INSPanelRoomStatus=} [properties] Properties to set
     * @returns {NSPanelRoomStatus} NSPanelRoomStatus instance
     */
    NSPanelRoomStatus.create = function create(properties) {
        return new NSPanelRoomStatus(properties);
    };

    /**
     * Encodes the specified NSPanelRoomStatus message. Does not implicitly {@link NSPanelRoomStatus.verify|verify} messages.
     * @function encode
     * @memberof NSPanelRoomStatus
     * @static
     * @param {INSPanelRoomStatus} message NSPanelRoomStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelRoomStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.averageDimLevel != null && Object.hasOwnProperty.call(message, "averageDimLevel"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.averageDimLevel);
        if (message.ceilingLightsDimLevel != null && Object.hasOwnProperty.call(message, "ceilingLightsDimLevel"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ceilingLightsDimLevel);
        if (message.tableLightsDimLevel != null && Object.hasOwnProperty.call(message, "tableLightsDimLevel"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.tableLightsDimLevel);
        if (message.averageColorTemperature != null && Object.hasOwnProperty.call(message, "averageColorTemperature"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.averageColorTemperature);
        if (message.ceilingLightsColorTemperatureValue != null && Object.hasOwnProperty.call(message, "ceilingLightsColorTemperatureValue"))
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ceilingLightsColorTemperatureValue);
        if (message.tableLightsColorTemperatureValue != null && Object.hasOwnProperty.call(message, "tableLightsColorTemperatureValue"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.tableLightsColorTemperatureValue);
        if (message.numCeilingLights != null && Object.hasOwnProperty.call(message, "numCeilingLights"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.numCeilingLights);
        if (message.numTableLights != null && Object.hasOwnProperty.call(message, "numTableLights"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.numTableLights);
        if (message.numCeilingLightsOn != null && Object.hasOwnProperty.call(message, "numCeilingLightsOn"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.numCeilingLightsOn);
        if (message.numTableLightsOn != null && Object.hasOwnProperty.call(message, "numTableLightsOn"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.numTableLightsOn);
        if (message.entityPageIds != null && message.entityPageIds.length) {
            writer.uint32(/* id 13, wireType 2 =*/106).fork();
            for (let i = 0; i < message.entityPageIds.length; ++i)
                writer.int32(message.entityPageIds[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified NSPanelRoomStatus message, length delimited. Does not implicitly {@link NSPanelRoomStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NSPanelRoomStatus
     * @static
     * @param {INSPanelRoomStatus} message NSPanelRoomStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelRoomStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NSPanelRoomStatus message from the specified reader or buffer.
     * @function decode
     * @memberof NSPanelRoomStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NSPanelRoomStatus} NSPanelRoomStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelRoomStatus.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelRoomStatus();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int32();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.averageDimLevel = reader.int32();
                    break;
                }
            case 4: {
                    message.ceilingLightsDimLevel = reader.int32();
                    break;
                }
            case 5: {
                    message.tableLightsDimLevel = reader.int32();
                    break;
                }
            case 6: {
                    message.averageColorTemperature = reader.int32();
                    break;
                }
            case 7: {
                    message.ceilingLightsColorTemperatureValue = reader.int32();
                    break;
                }
            case 8: {
                    message.tableLightsColorTemperatureValue = reader.int32();
                    break;
                }
            case 9: {
                    message.numCeilingLights = reader.int32();
                    break;
                }
            case 10: {
                    message.numTableLights = reader.int32();
                    break;
                }
            case 11: {
                    message.numCeilingLightsOn = reader.int32();
                    break;
                }
            case 12: {
                    message.numTableLightsOn = reader.int32();
                    break;
                }
            case 13: {
                    if (!(message.entityPageIds && message.entityPageIds.length))
                        message.entityPageIds = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.entityPageIds.push(reader.int32());
                    } else
                        message.entityPageIds.push(reader.int32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NSPanelRoomStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NSPanelRoomStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NSPanelRoomStatus} NSPanelRoomStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelRoomStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NSPanelRoomStatus message.
     * @function verify
     * @memberof NSPanelRoomStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NSPanelRoomStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.averageDimLevel != null && message.hasOwnProperty("averageDimLevel"))
            if (!$util.isInteger(message.averageDimLevel))
                return "averageDimLevel: integer expected";
        if (message.ceilingLightsDimLevel != null && message.hasOwnProperty("ceilingLightsDimLevel"))
            if (!$util.isInteger(message.ceilingLightsDimLevel))
                return "ceilingLightsDimLevel: integer expected";
        if (message.tableLightsDimLevel != null && message.hasOwnProperty("tableLightsDimLevel"))
            if (!$util.isInteger(message.tableLightsDimLevel))
                return "tableLightsDimLevel: integer expected";
        if (message.averageColorTemperature != null && message.hasOwnProperty("averageColorTemperature"))
            if (!$util.isInteger(message.averageColorTemperature))
                return "averageColorTemperature: integer expected";
        if (message.ceilingLightsColorTemperatureValue != null && message.hasOwnProperty("ceilingLightsColorTemperatureValue"))
            if (!$util.isInteger(message.ceilingLightsColorTemperatureValue))
                return "ceilingLightsColorTemperatureValue: integer expected";
        if (message.tableLightsColorTemperatureValue != null && message.hasOwnProperty("tableLightsColorTemperatureValue"))
            if (!$util.isInteger(message.tableLightsColorTemperatureValue))
                return "tableLightsColorTemperatureValue: integer expected";
        if (message.numCeilingLights != null && message.hasOwnProperty("numCeilingLights"))
            if (!$util.isInteger(message.numCeilingLights))
                return "numCeilingLights: integer expected";
        if (message.numTableLights != null && message.hasOwnProperty("numTableLights"))
            if (!$util.isInteger(message.numTableLights))
                return "numTableLights: integer expected";
        if (message.numCeilingLightsOn != null && message.hasOwnProperty("numCeilingLightsOn"))
            if (!$util.isInteger(message.numCeilingLightsOn))
                return "numCeilingLightsOn: integer expected";
        if (message.numTableLightsOn != null && message.hasOwnProperty("numTableLightsOn"))
            if (!$util.isInteger(message.numTableLightsOn))
                return "numTableLightsOn: integer expected";
        if (message.entityPageIds != null && message.hasOwnProperty("entityPageIds")) {
            if (!Array.isArray(message.entityPageIds))
                return "entityPageIds: array expected";
            for (let i = 0; i < message.entityPageIds.length; ++i)
                if (!$util.isInteger(message.entityPageIds[i]))
                    return "entityPageIds: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a NSPanelRoomStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NSPanelRoomStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NSPanelRoomStatus} NSPanelRoomStatus
     */
    NSPanelRoomStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.NSPanelRoomStatus)
            return object;
        let message = new $root.NSPanelRoomStatus();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.name != null)
            message.name = String(object.name);
        if (object.averageDimLevel != null)
            message.averageDimLevel = object.averageDimLevel | 0;
        if (object.ceilingLightsDimLevel != null)
            message.ceilingLightsDimLevel = object.ceilingLightsDimLevel | 0;
        if (object.tableLightsDimLevel != null)
            message.tableLightsDimLevel = object.tableLightsDimLevel | 0;
        if (object.averageColorTemperature != null)
            message.averageColorTemperature = object.averageColorTemperature | 0;
        if (object.ceilingLightsColorTemperatureValue != null)
            message.ceilingLightsColorTemperatureValue = object.ceilingLightsColorTemperatureValue | 0;
        if (object.tableLightsColorTemperatureValue != null)
            message.tableLightsColorTemperatureValue = object.tableLightsColorTemperatureValue | 0;
        if (object.numCeilingLights != null)
            message.numCeilingLights = object.numCeilingLights | 0;
        if (object.numTableLights != null)
            message.numTableLights = object.numTableLights | 0;
        if (object.numCeilingLightsOn != null)
            message.numCeilingLightsOn = object.numCeilingLightsOn | 0;
        if (object.numTableLightsOn != null)
            message.numTableLightsOn = object.numTableLightsOn | 0;
        if (object.entityPageIds) {
            if (!Array.isArray(object.entityPageIds))
                throw TypeError(".NSPanelRoomStatus.entityPageIds: array expected");
            message.entityPageIds = [];
            for (let i = 0; i < object.entityPageIds.length; ++i)
                message.entityPageIds[i] = object.entityPageIds[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a NSPanelRoomStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NSPanelRoomStatus
     * @static
     * @param {NSPanelRoomStatus} message NSPanelRoomStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NSPanelRoomStatus.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.entityPageIds = [];
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.averageDimLevel = 0;
            object.ceilingLightsDimLevel = 0;
            object.tableLightsDimLevel = 0;
            object.averageColorTemperature = 0;
            object.ceilingLightsColorTemperatureValue = 0;
            object.tableLightsColorTemperatureValue = 0;
            object.numCeilingLights = 0;
            object.numTableLights = 0;
            object.numCeilingLightsOn = 0;
            object.numTableLightsOn = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.averageDimLevel != null && message.hasOwnProperty("averageDimLevel"))
            object.averageDimLevel = message.averageDimLevel;
        if (message.ceilingLightsDimLevel != null && message.hasOwnProperty("ceilingLightsDimLevel"))
            object.ceilingLightsDimLevel = message.ceilingLightsDimLevel;
        if (message.tableLightsDimLevel != null && message.hasOwnProperty("tableLightsDimLevel"))
            object.tableLightsDimLevel = message.tableLightsDimLevel;
        if (message.averageColorTemperature != null && message.hasOwnProperty("averageColorTemperature"))
            object.averageColorTemperature = message.averageColorTemperature;
        if (message.ceilingLightsColorTemperatureValue != null && message.hasOwnProperty("ceilingLightsColorTemperatureValue"))
            object.ceilingLightsColorTemperatureValue = message.ceilingLightsColorTemperatureValue;
        if (message.tableLightsColorTemperatureValue != null && message.hasOwnProperty("tableLightsColorTemperatureValue"))
            object.tableLightsColorTemperatureValue = message.tableLightsColorTemperatureValue;
        if (message.numCeilingLights != null && message.hasOwnProperty("numCeilingLights"))
            object.numCeilingLights = message.numCeilingLights;
        if (message.numTableLights != null && message.hasOwnProperty("numTableLights"))
            object.numTableLights = message.numTableLights;
        if (message.numCeilingLightsOn != null && message.hasOwnProperty("numCeilingLightsOn"))
            object.numCeilingLightsOn = message.numCeilingLightsOn;
        if (message.numTableLightsOn != null && message.hasOwnProperty("numTableLightsOn"))
            object.numTableLightsOn = message.numTableLightsOn;
        if (message.entityPageIds && message.entityPageIds.length) {
            object.entityPageIds = [];
            for (let j = 0; j < message.entityPageIds.length; ++j)
                object.entityPageIds[j] = message.entityPageIds[j];
        }
        return object;
    };

    /**
     * Converts this NSPanelRoomStatus to JSON.
     * @function toJSON
     * @memberof NSPanelRoomStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NSPanelRoomStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NSPanelRoomStatus
     * @function getTypeUrl
     * @memberof NSPanelRoomStatus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NSPanelRoomStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NSPanelRoomStatus";
    };

    return NSPanelRoomStatus;
})();

export const NSPanelWeatherUpdate = $root.NSPanelWeatherUpdate = (() => {

    /**
     * Properties of a NSPanelWeatherUpdate.
     * @exports INSPanelWeatherUpdate
     * @interface INSPanelWeatherUpdate
     * @property {Array.<NSPanelWeatherUpdate.IForecastItem>|null} [forecastItems] NSPanelWeatherUpdate forecastItems
     * @property {string|null} [currentWeatherIcon] NSPanelWeatherUpdate currentWeatherIcon
     * @property {string|null} [currentTemperatureString] NSPanelWeatherUpdate currentTemperatureString
     * @property {string|null} [currentMaxminTemperature] NSPanelWeatherUpdate currentMaxminTemperature
     * @property {string|null} [currentWindString] NSPanelWeatherUpdate currentWindString
     * @property {string|null} [sunriseString] NSPanelWeatherUpdate sunriseString
     * @property {string|null} [sunsetString] NSPanelWeatherUpdate sunsetString
     * @property {string|null} [currentPrecipitationString] NSPanelWeatherUpdate currentPrecipitationString
     */

    /**
     * Constructs a new NSPanelWeatherUpdate.
     * @exports NSPanelWeatherUpdate
     * @classdesc Represents a NSPanelWeatherUpdate.
     * @implements INSPanelWeatherUpdate
     * @constructor
     * @param {INSPanelWeatherUpdate=} [properties] Properties to set
     */
    function NSPanelWeatherUpdate(properties) {
        this.forecastItems = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NSPanelWeatherUpdate forecastItems.
     * @member {Array.<NSPanelWeatherUpdate.IForecastItem>} forecastItems
     * @memberof NSPanelWeatherUpdate
     * @instance
     */
    NSPanelWeatherUpdate.prototype.forecastItems = $util.emptyArray;

    /**
     * NSPanelWeatherUpdate currentWeatherIcon.
     * @member {string} currentWeatherIcon
     * @memberof NSPanelWeatherUpdate
     * @instance
     */
    NSPanelWeatherUpdate.prototype.currentWeatherIcon = "";

    /**
     * NSPanelWeatherUpdate currentTemperatureString.
     * @member {string} currentTemperatureString
     * @memberof NSPanelWeatherUpdate
     * @instance
     */
    NSPanelWeatherUpdate.prototype.currentTemperatureString = "";

    /**
     * NSPanelWeatherUpdate currentMaxminTemperature.
     * @member {string} currentMaxminTemperature
     * @memberof NSPanelWeatherUpdate
     * @instance
     */
    NSPanelWeatherUpdate.prototype.currentMaxminTemperature = "";

    /**
     * NSPanelWeatherUpdate currentWindString.
     * @member {string} currentWindString
     * @memberof NSPanelWeatherUpdate
     * @instance
     */
    NSPanelWeatherUpdate.prototype.currentWindString = "";

    /**
     * NSPanelWeatherUpdate sunriseString.
     * @member {string} sunriseString
     * @memberof NSPanelWeatherUpdate
     * @instance
     */
    NSPanelWeatherUpdate.prototype.sunriseString = "";

    /**
     * NSPanelWeatherUpdate sunsetString.
     * @member {string} sunsetString
     * @memberof NSPanelWeatherUpdate
     * @instance
     */
    NSPanelWeatherUpdate.prototype.sunsetString = "";

    /**
     * NSPanelWeatherUpdate currentPrecipitationString.
     * @member {string} currentPrecipitationString
     * @memberof NSPanelWeatherUpdate
     * @instance
     */
    NSPanelWeatherUpdate.prototype.currentPrecipitationString = "";

    /**
     * Creates a new NSPanelWeatherUpdate instance using the specified properties.
     * @function create
     * @memberof NSPanelWeatherUpdate
     * @static
     * @param {INSPanelWeatherUpdate=} [properties] Properties to set
     * @returns {NSPanelWeatherUpdate} NSPanelWeatherUpdate instance
     */
    NSPanelWeatherUpdate.create = function create(properties) {
        return new NSPanelWeatherUpdate(properties);
    };

    /**
     * Encodes the specified NSPanelWeatherUpdate message. Does not implicitly {@link NSPanelWeatherUpdate.verify|verify} messages.
     * @function encode
     * @memberof NSPanelWeatherUpdate
     * @static
     * @param {INSPanelWeatherUpdate} message NSPanelWeatherUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelWeatherUpdate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.forecastItems != null && message.forecastItems.length)
            for (let i = 0; i < message.forecastItems.length; ++i)
                $root.NSPanelWeatherUpdate.ForecastItem.encode(message.forecastItems[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.currentWeatherIcon != null && Object.hasOwnProperty.call(message, "currentWeatherIcon"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.currentWeatherIcon);
        if (message.currentTemperatureString != null && Object.hasOwnProperty.call(message, "currentTemperatureString"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.currentTemperatureString);
        if (message.currentMaxminTemperature != null && Object.hasOwnProperty.call(message, "currentMaxminTemperature"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.currentMaxminTemperature);
        if (message.currentWindString != null && Object.hasOwnProperty.call(message, "currentWindString"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.currentWindString);
        if (message.sunriseString != null && Object.hasOwnProperty.call(message, "sunriseString"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.sunriseString);
        if (message.sunsetString != null && Object.hasOwnProperty.call(message, "sunsetString"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.sunsetString);
        if (message.currentPrecipitationString != null && Object.hasOwnProperty.call(message, "currentPrecipitationString"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.currentPrecipitationString);
        return writer;
    };

    /**
     * Encodes the specified NSPanelWeatherUpdate message, length delimited. Does not implicitly {@link NSPanelWeatherUpdate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NSPanelWeatherUpdate
     * @static
     * @param {INSPanelWeatherUpdate} message NSPanelWeatherUpdate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelWeatherUpdate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NSPanelWeatherUpdate message from the specified reader or buffer.
     * @function decode
     * @memberof NSPanelWeatherUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NSPanelWeatherUpdate} NSPanelWeatherUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelWeatherUpdate.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelWeatherUpdate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.forecastItems && message.forecastItems.length))
                        message.forecastItems = [];
                    message.forecastItems.push($root.NSPanelWeatherUpdate.ForecastItem.decode(reader, reader.uint32()));
                    break;
                }
            case 2: {
                    message.currentWeatherIcon = reader.string();
                    break;
                }
            case 3: {
                    message.currentTemperatureString = reader.string();
                    break;
                }
            case 4: {
                    message.currentMaxminTemperature = reader.string();
                    break;
                }
            case 5: {
                    message.currentWindString = reader.string();
                    break;
                }
            case 6: {
                    message.sunriseString = reader.string();
                    break;
                }
            case 7: {
                    message.sunsetString = reader.string();
                    break;
                }
            case 8: {
                    message.currentPrecipitationString = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NSPanelWeatherUpdate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NSPanelWeatherUpdate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NSPanelWeatherUpdate} NSPanelWeatherUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelWeatherUpdate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NSPanelWeatherUpdate message.
     * @function verify
     * @memberof NSPanelWeatherUpdate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NSPanelWeatherUpdate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.forecastItems != null && message.hasOwnProperty("forecastItems")) {
            if (!Array.isArray(message.forecastItems))
                return "forecastItems: array expected";
            for (let i = 0; i < message.forecastItems.length; ++i) {
                let error = $root.NSPanelWeatherUpdate.ForecastItem.verify(message.forecastItems[i]);
                if (error)
                    return "forecastItems." + error;
            }
        }
        if (message.currentWeatherIcon != null && message.hasOwnProperty("currentWeatherIcon"))
            if (!$util.isString(message.currentWeatherIcon))
                return "currentWeatherIcon: string expected";
        if (message.currentTemperatureString != null && message.hasOwnProperty("currentTemperatureString"))
            if (!$util.isString(message.currentTemperatureString))
                return "currentTemperatureString: string expected";
        if (message.currentMaxminTemperature != null && message.hasOwnProperty("currentMaxminTemperature"))
            if (!$util.isString(message.currentMaxminTemperature))
                return "currentMaxminTemperature: string expected";
        if (message.currentWindString != null && message.hasOwnProperty("currentWindString"))
            if (!$util.isString(message.currentWindString))
                return "currentWindString: string expected";
        if (message.sunriseString != null && message.hasOwnProperty("sunriseString"))
            if (!$util.isString(message.sunriseString))
                return "sunriseString: string expected";
        if (message.sunsetString != null && message.hasOwnProperty("sunsetString"))
            if (!$util.isString(message.sunsetString))
                return "sunsetString: string expected";
        if (message.currentPrecipitationString != null && message.hasOwnProperty("currentPrecipitationString"))
            if (!$util.isString(message.currentPrecipitationString))
                return "currentPrecipitationString: string expected";
        return null;
    };

    /**
     * Creates a NSPanelWeatherUpdate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NSPanelWeatherUpdate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NSPanelWeatherUpdate} NSPanelWeatherUpdate
     */
    NSPanelWeatherUpdate.fromObject = function fromObject(object) {
        if (object instanceof $root.NSPanelWeatherUpdate)
            return object;
        let message = new $root.NSPanelWeatherUpdate();
        if (object.forecastItems) {
            if (!Array.isArray(object.forecastItems))
                throw TypeError(".NSPanelWeatherUpdate.forecastItems: array expected");
            message.forecastItems = [];
            for (let i = 0; i < object.forecastItems.length; ++i) {
                if (typeof object.forecastItems[i] !== "object")
                    throw TypeError(".NSPanelWeatherUpdate.forecastItems: object expected");
                message.forecastItems[i] = $root.NSPanelWeatherUpdate.ForecastItem.fromObject(object.forecastItems[i]);
            }
        }
        if (object.currentWeatherIcon != null)
            message.currentWeatherIcon = String(object.currentWeatherIcon);
        if (object.currentTemperatureString != null)
            message.currentTemperatureString = String(object.currentTemperatureString);
        if (object.currentMaxminTemperature != null)
            message.currentMaxminTemperature = String(object.currentMaxminTemperature);
        if (object.currentWindString != null)
            message.currentWindString = String(object.currentWindString);
        if (object.sunriseString != null)
            message.sunriseString = String(object.sunriseString);
        if (object.sunsetString != null)
            message.sunsetString = String(object.sunsetString);
        if (object.currentPrecipitationString != null)
            message.currentPrecipitationString = String(object.currentPrecipitationString);
        return message;
    };

    /**
     * Creates a plain object from a NSPanelWeatherUpdate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NSPanelWeatherUpdate
     * @static
     * @param {NSPanelWeatherUpdate} message NSPanelWeatherUpdate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NSPanelWeatherUpdate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.forecastItems = [];
        if (options.defaults) {
            object.currentWeatherIcon = "";
            object.currentTemperatureString = "";
            object.currentMaxminTemperature = "";
            object.currentWindString = "";
            object.sunriseString = "";
            object.sunsetString = "";
            object.currentPrecipitationString = "";
        }
        if (message.forecastItems && message.forecastItems.length) {
            object.forecastItems = [];
            for (let j = 0; j < message.forecastItems.length; ++j)
                object.forecastItems[j] = $root.NSPanelWeatherUpdate.ForecastItem.toObject(message.forecastItems[j], options);
        }
        if (message.currentWeatherIcon != null && message.hasOwnProperty("currentWeatherIcon"))
            object.currentWeatherIcon = message.currentWeatherIcon;
        if (message.currentTemperatureString != null && message.hasOwnProperty("currentTemperatureString"))
            object.currentTemperatureString = message.currentTemperatureString;
        if (message.currentMaxminTemperature != null && message.hasOwnProperty("currentMaxminTemperature"))
            object.currentMaxminTemperature = message.currentMaxminTemperature;
        if (message.currentWindString != null && message.hasOwnProperty("currentWindString"))
            object.currentWindString = message.currentWindString;
        if (message.sunriseString != null && message.hasOwnProperty("sunriseString"))
            object.sunriseString = message.sunriseString;
        if (message.sunsetString != null && message.hasOwnProperty("sunsetString"))
            object.sunsetString = message.sunsetString;
        if (message.currentPrecipitationString != null && message.hasOwnProperty("currentPrecipitationString"))
            object.currentPrecipitationString = message.currentPrecipitationString;
        return object;
    };

    /**
     * Converts this NSPanelWeatherUpdate to JSON.
     * @function toJSON
     * @memberof NSPanelWeatherUpdate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NSPanelWeatherUpdate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NSPanelWeatherUpdate
     * @function getTypeUrl
     * @memberof NSPanelWeatherUpdate
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NSPanelWeatherUpdate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NSPanelWeatherUpdate";
    };

    NSPanelWeatherUpdate.ForecastItem = (function() {

        /**
         * Properties of a ForecastItem.
         * @memberof NSPanelWeatherUpdate
         * @interface IForecastItem
         * @property {string|null} [weatherIcon] ForecastItem weatherIcon
         * @property {string|null} [precipitationString] ForecastItem precipitationString
         * @property {string|null} [temperatureMaxminString] ForecastItem temperatureMaxminString
         * @property {string|null} [windString] ForecastItem windString
         * @property {string|null} [displayString] ForecastItem displayString
         */

        /**
         * Constructs a new ForecastItem.
         * @memberof NSPanelWeatherUpdate
         * @classdesc Represents a ForecastItem.
         * @implements IForecastItem
         * @constructor
         * @param {NSPanelWeatherUpdate.IForecastItem=} [properties] Properties to set
         */
        function ForecastItem(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ForecastItem weatherIcon.
         * @member {string} weatherIcon
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @instance
         */
        ForecastItem.prototype.weatherIcon = "";

        /**
         * ForecastItem precipitationString.
         * @member {string} precipitationString
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @instance
         */
        ForecastItem.prototype.precipitationString = "";

        /**
         * ForecastItem temperatureMaxminString.
         * @member {string} temperatureMaxminString
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @instance
         */
        ForecastItem.prototype.temperatureMaxminString = "";

        /**
         * ForecastItem windString.
         * @member {string} windString
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @instance
         */
        ForecastItem.prototype.windString = "";

        /**
         * ForecastItem displayString.
         * @member {string} displayString
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @instance
         */
        ForecastItem.prototype.displayString = "";

        /**
         * Creates a new ForecastItem instance using the specified properties.
         * @function create
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @static
         * @param {NSPanelWeatherUpdate.IForecastItem=} [properties] Properties to set
         * @returns {NSPanelWeatherUpdate.ForecastItem} ForecastItem instance
         */
        ForecastItem.create = function create(properties) {
            return new ForecastItem(properties);
        };

        /**
         * Encodes the specified ForecastItem message. Does not implicitly {@link NSPanelWeatherUpdate.ForecastItem.verify|verify} messages.
         * @function encode
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @static
         * @param {NSPanelWeatherUpdate.IForecastItem} message ForecastItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForecastItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.weatherIcon != null && Object.hasOwnProperty.call(message, "weatherIcon"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.weatherIcon);
            if (message.precipitationString != null && Object.hasOwnProperty.call(message, "precipitationString"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.precipitationString);
            if (message.temperatureMaxminString != null && Object.hasOwnProperty.call(message, "temperatureMaxminString"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.temperatureMaxminString);
            if (message.windString != null && Object.hasOwnProperty.call(message, "windString"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.windString);
            if (message.displayString != null && Object.hasOwnProperty.call(message, "displayString"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.displayString);
            return writer;
        };

        /**
         * Encodes the specified ForecastItem message, length delimited. Does not implicitly {@link NSPanelWeatherUpdate.ForecastItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @static
         * @param {NSPanelWeatherUpdate.IForecastItem} message ForecastItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ForecastItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ForecastItem message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelWeatherUpdate.ForecastItem} ForecastItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForecastItem.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelWeatherUpdate.ForecastItem();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.weatherIcon = reader.string();
                        break;
                    }
                case 2: {
                        message.precipitationString = reader.string();
                        break;
                    }
                case 3: {
                        message.temperatureMaxminString = reader.string();
                        break;
                    }
                case 4: {
                        message.windString = reader.string();
                        break;
                    }
                case 5: {
                        message.displayString = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ForecastItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelWeatherUpdate.ForecastItem} ForecastItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ForecastItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ForecastItem message.
         * @function verify
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ForecastItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.weatherIcon != null && message.hasOwnProperty("weatherIcon"))
                if (!$util.isString(message.weatherIcon))
                    return "weatherIcon: string expected";
            if (message.precipitationString != null && message.hasOwnProperty("precipitationString"))
                if (!$util.isString(message.precipitationString))
                    return "precipitationString: string expected";
            if (message.temperatureMaxminString != null && message.hasOwnProperty("temperatureMaxminString"))
                if (!$util.isString(message.temperatureMaxminString))
                    return "temperatureMaxminString: string expected";
            if (message.windString != null && message.hasOwnProperty("windString"))
                if (!$util.isString(message.windString))
                    return "windString: string expected";
            if (message.displayString != null && message.hasOwnProperty("displayString"))
                if (!$util.isString(message.displayString))
                    return "displayString: string expected";
            return null;
        };

        /**
         * Creates a ForecastItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelWeatherUpdate.ForecastItem} ForecastItem
         */
        ForecastItem.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelWeatherUpdate.ForecastItem)
                return object;
            let message = new $root.NSPanelWeatherUpdate.ForecastItem();
            if (object.weatherIcon != null)
                message.weatherIcon = String(object.weatherIcon);
            if (object.precipitationString != null)
                message.precipitationString = String(object.precipitationString);
            if (object.temperatureMaxminString != null)
                message.temperatureMaxminString = String(object.temperatureMaxminString);
            if (object.windString != null)
                message.windString = String(object.windString);
            if (object.displayString != null)
                message.displayString = String(object.displayString);
            return message;
        };

        /**
         * Creates a plain object from a ForecastItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @static
         * @param {NSPanelWeatherUpdate.ForecastItem} message ForecastItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ForecastItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.weatherIcon = "";
                object.precipitationString = "";
                object.temperatureMaxminString = "";
                object.windString = "";
                object.displayString = "";
            }
            if (message.weatherIcon != null && message.hasOwnProperty("weatherIcon"))
                object.weatherIcon = message.weatherIcon;
            if (message.precipitationString != null && message.hasOwnProperty("precipitationString"))
                object.precipitationString = message.precipitationString;
            if (message.temperatureMaxminString != null && message.hasOwnProperty("temperatureMaxminString"))
                object.temperatureMaxminString = message.temperatureMaxminString;
            if (message.windString != null && message.hasOwnProperty("windString"))
                object.windString = message.windString;
            if (message.displayString != null && message.hasOwnProperty("displayString"))
                object.displayString = message.displayString;
            return object;
        };

        /**
         * Converts this ForecastItem to JSON.
         * @function toJSON
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ForecastItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ForecastItem
         * @function getTypeUrl
         * @memberof NSPanelWeatherUpdate.ForecastItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ForecastItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelWeatherUpdate.ForecastItem";
        };

        return ForecastItem;
    })();

    return NSPanelWeatherUpdate;
})();

export const NSPanelMQTTManagerCommand = $root.NSPanelMQTTManagerCommand = (() => {

    /**
     * Properties of a NSPanelMQTTManagerCommand.
     * @exports INSPanelMQTTManagerCommand
     * @interface INSPanelMQTTManagerCommand
     * @property {NSPanelMQTTManagerCommand.IFirstPageTurnLightOn|null} [firstPageTurnOn] NSPanelMQTTManagerCommand firstPageTurnOn
     * @property {NSPanelMQTTManagerCommand.IFirstPageTurnLightOff|null} [firstPageTurnOff] NSPanelMQTTManagerCommand firstPageTurnOff
     * @property {NSPanelMQTTManagerCommand.ILightCommand|null} [lightCommand] NSPanelMQTTManagerCommand lightCommand
     * @property {NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage|null} [toggleEntityFromEntitiesPage] NSPanelMQTTManagerCommand toggleEntityFromEntitiesPage
     * @property {NSPanelMQTTManagerCommand.ISaveSceneCommand|null} [saveSceneCommand] NSPanelMQTTManagerCommand saveSceneCommand
     * @property {NSPanelMQTTManagerCommand.IButtonPressed|null} [buttonPressed] NSPanelMQTTManagerCommand buttonPressed
     * @property {NSPanelMQTTManagerCommand.IThermostatTemperatureCommand|null} [thermostatTemperatureCommand] NSPanelMQTTManagerCommand thermostatTemperatureCommand
     * @property {NSPanelMQTTManagerCommand.IThermostatCommand|null} [thermostatCommand] NSPanelMQTTManagerCommand thermostatCommand
     * @property {number|null} [nspanelId] NSPanelMQTTManagerCommand nspanelId
     */

    /**
     * Constructs a new NSPanelMQTTManagerCommand.
     * @exports NSPanelMQTTManagerCommand
     * @classdesc Represents a NSPanelMQTTManagerCommand.
     * @implements INSPanelMQTTManagerCommand
     * @constructor
     * @param {INSPanelMQTTManagerCommand=} [properties] Properties to set
     */
    function NSPanelMQTTManagerCommand(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NSPanelMQTTManagerCommand firstPageTurnOn.
     * @member {NSPanelMQTTManagerCommand.IFirstPageTurnLightOn|null|undefined} firstPageTurnOn
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    NSPanelMQTTManagerCommand.prototype.firstPageTurnOn = null;

    /**
     * NSPanelMQTTManagerCommand firstPageTurnOff.
     * @member {NSPanelMQTTManagerCommand.IFirstPageTurnLightOff|null|undefined} firstPageTurnOff
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    NSPanelMQTTManagerCommand.prototype.firstPageTurnOff = null;

    /**
     * NSPanelMQTTManagerCommand lightCommand.
     * @member {NSPanelMQTTManagerCommand.ILightCommand|null|undefined} lightCommand
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    NSPanelMQTTManagerCommand.prototype.lightCommand = null;

    /**
     * NSPanelMQTTManagerCommand toggleEntityFromEntitiesPage.
     * @member {NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage|null|undefined} toggleEntityFromEntitiesPage
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    NSPanelMQTTManagerCommand.prototype.toggleEntityFromEntitiesPage = null;

    /**
     * NSPanelMQTTManagerCommand saveSceneCommand.
     * @member {NSPanelMQTTManagerCommand.ISaveSceneCommand|null|undefined} saveSceneCommand
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    NSPanelMQTTManagerCommand.prototype.saveSceneCommand = null;

    /**
     * NSPanelMQTTManagerCommand buttonPressed.
     * @member {NSPanelMQTTManagerCommand.IButtonPressed|null|undefined} buttonPressed
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    NSPanelMQTTManagerCommand.prototype.buttonPressed = null;

    /**
     * NSPanelMQTTManagerCommand thermostatTemperatureCommand.
     * @member {NSPanelMQTTManagerCommand.IThermostatTemperatureCommand|null|undefined} thermostatTemperatureCommand
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    NSPanelMQTTManagerCommand.prototype.thermostatTemperatureCommand = null;

    /**
     * NSPanelMQTTManagerCommand thermostatCommand.
     * @member {NSPanelMQTTManagerCommand.IThermostatCommand|null|undefined} thermostatCommand
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    NSPanelMQTTManagerCommand.prototype.thermostatCommand = null;

    /**
     * NSPanelMQTTManagerCommand nspanelId.
     * @member {number} nspanelId
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    NSPanelMQTTManagerCommand.prototype.nspanelId = 0;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * NSPanelMQTTManagerCommand CommandData.
     * @member {"firstPageTurnOn"|"firstPageTurnOff"|"lightCommand"|"toggleEntityFromEntitiesPage"|"saveSceneCommand"|"buttonPressed"|"thermostatTemperatureCommand"|"thermostatCommand"|undefined} CommandData
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     */
    Object.defineProperty(NSPanelMQTTManagerCommand.prototype, "CommandData", {
        get: $util.oneOfGetter($oneOfFields = ["firstPageTurnOn", "firstPageTurnOff", "lightCommand", "toggleEntityFromEntitiesPage", "saveSceneCommand", "buttonPressed", "thermostatTemperatureCommand", "thermostatCommand"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new NSPanelMQTTManagerCommand instance using the specified properties.
     * @function create
     * @memberof NSPanelMQTTManagerCommand
     * @static
     * @param {INSPanelMQTTManagerCommand=} [properties] Properties to set
     * @returns {NSPanelMQTTManagerCommand} NSPanelMQTTManagerCommand instance
     */
    NSPanelMQTTManagerCommand.create = function create(properties) {
        return new NSPanelMQTTManagerCommand(properties);
    };

    /**
     * Encodes the specified NSPanelMQTTManagerCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.verify|verify} messages.
     * @function encode
     * @memberof NSPanelMQTTManagerCommand
     * @static
     * @param {INSPanelMQTTManagerCommand} message NSPanelMQTTManagerCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelMQTTManagerCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.firstPageTurnOn != null && Object.hasOwnProperty.call(message, "firstPageTurnOn"))
            $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOn.encode(message.firstPageTurnOn, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.firstPageTurnOff != null && Object.hasOwnProperty.call(message, "firstPageTurnOff"))
            $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOff.encode(message.firstPageTurnOff, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.lightCommand != null && Object.hasOwnProperty.call(message, "lightCommand"))
            $root.NSPanelMQTTManagerCommand.LightCommand.encode(message.lightCommand, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.toggleEntityFromEntitiesPage != null && Object.hasOwnProperty.call(message, "toggleEntityFromEntitiesPage"))
            $root.NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage.encode(message.toggleEntityFromEntitiesPage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.saveSceneCommand != null && Object.hasOwnProperty.call(message, "saveSceneCommand"))
            $root.NSPanelMQTTManagerCommand.SaveSceneCommand.encode(message.saveSceneCommand, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.buttonPressed != null && Object.hasOwnProperty.call(message, "buttonPressed"))
            $root.NSPanelMQTTManagerCommand.ButtonPressed.encode(message.buttonPressed, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.thermostatTemperatureCommand != null && Object.hasOwnProperty.call(message, "thermostatTemperatureCommand"))
            $root.NSPanelMQTTManagerCommand.ThermostatTemperatureCommand.encode(message.thermostatTemperatureCommand, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.thermostatCommand != null && Object.hasOwnProperty.call(message, "thermostatCommand"))
            $root.NSPanelMQTTManagerCommand.ThermostatCommand.encode(message.thermostatCommand, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.nspanelId != null && Object.hasOwnProperty.call(message, "nspanelId"))
            writer.uint32(/* id 100, wireType 0 =*/800).int32(message.nspanelId);
        return writer;
    };

    /**
     * Encodes the specified NSPanelMQTTManagerCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NSPanelMQTTManagerCommand
     * @static
     * @param {INSPanelMQTTManagerCommand} message NSPanelMQTTManagerCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NSPanelMQTTManagerCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NSPanelMQTTManagerCommand message from the specified reader or buffer.
     * @function decode
     * @memberof NSPanelMQTTManagerCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NSPanelMQTTManagerCommand} NSPanelMQTTManagerCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelMQTTManagerCommand.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelMQTTManagerCommand();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.firstPageTurnOn = $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOn.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.firstPageTurnOff = $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOff.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.lightCommand = $root.NSPanelMQTTManagerCommand.LightCommand.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.toggleEntityFromEntitiesPage = $root.NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.saveSceneCommand = $root.NSPanelMQTTManagerCommand.SaveSceneCommand.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.buttonPressed = $root.NSPanelMQTTManagerCommand.ButtonPressed.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.thermostatTemperatureCommand = $root.NSPanelMQTTManagerCommand.ThermostatTemperatureCommand.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.thermostatCommand = $root.NSPanelMQTTManagerCommand.ThermostatCommand.decode(reader, reader.uint32());
                    break;
                }
            case 100: {
                    message.nspanelId = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NSPanelMQTTManagerCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NSPanelMQTTManagerCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NSPanelMQTTManagerCommand} NSPanelMQTTManagerCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NSPanelMQTTManagerCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NSPanelMQTTManagerCommand message.
     * @function verify
     * @memberof NSPanelMQTTManagerCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NSPanelMQTTManagerCommand.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.firstPageTurnOn != null && message.hasOwnProperty("firstPageTurnOn")) {
            properties.CommandData = 1;
            {
                let error = $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOn.verify(message.firstPageTurnOn);
                if (error)
                    return "firstPageTurnOn." + error;
            }
        }
        if (message.firstPageTurnOff != null && message.hasOwnProperty("firstPageTurnOff")) {
            if (properties.CommandData === 1)
                return "CommandData: multiple values";
            properties.CommandData = 1;
            {
                let error = $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOff.verify(message.firstPageTurnOff);
                if (error)
                    return "firstPageTurnOff." + error;
            }
        }
        if (message.lightCommand != null && message.hasOwnProperty("lightCommand")) {
            if (properties.CommandData === 1)
                return "CommandData: multiple values";
            properties.CommandData = 1;
            {
                let error = $root.NSPanelMQTTManagerCommand.LightCommand.verify(message.lightCommand);
                if (error)
                    return "lightCommand." + error;
            }
        }
        if (message.toggleEntityFromEntitiesPage != null && message.hasOwnProperty("toggleEntityFromEntitiesPage")) {
            if (properties.CommandData === 1)
                return "CommandData: multiple values";
            properties.CommandData = 1;
            {
                let error = $root.NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage.verify(message.toggleEntityFromEntitiesPage);
                if (error)
                    return "toggleEntityFromEntitiesPage." + error;
            }
        }
        if (message.saveSceneCommand != null && message.hasOwnProperty("saveSceneCommand")) {
            if (properties.CommandData === 1)
                return "CommandData: multiple values";
            properties.CommandData = 1;
            {
                let error = $root.NSPanelMQTTManagerCommand.SaveSceneCommand.verify(message.saveSceneCommand);
                if (error)
                    return "saveSceneCommand." + error;
            }
        }
        if (message.buttonPressed != null && message.hasOwnProperty("buttonPressed")) {
            if (properties.CommandData === 1)
                return "CommandData: multiple values";
            properties.CommandData = 1;
            {
                let error = $root.NSPanelMQTTManagerCommand.ButtonPressed.verify(message.buttonPressed);
                if (error)
                    return "buttonPressed." + error;
            }
        }
        if (message.thermostatTemperatureCommand != null && message.hasOwnProperty("thermostatTemperatureCommand")) {
            if (properties.CommandData === 1)
                return "CommandData: multiple values";
            properties.CommandData = 1;
            {
                let error = $root.NSPanelMQTTManagerCommand.ThermostatTemperatureCommand.verify(message.thermostatTemperatureCommand);
                if (error)
                    return "thermostatTemperatureCommand." + error;
            }
        }
        if (message.thermostatCommand != null && message.hasOwnProperty("thermostatCommand")) {
            if (properties.CommandData === 1)
                return "CommandData: multiple values";
            properties.CommandData = 1;
            {
                let error = $root.NSPanelMQTTManagerCommand.ThermostatCommand.verify(message.thermostatCommand);
                if (error)
                    return "thermostatCommand." + error;
            }
        }
        if (message.nspanelId != null && message.hasOwnProperty("nspanelId"))
            if (!$util.isInteger(message.nspanelId))
                return "nspanelId: integer expected";
        return null;
    };

    /**
     * Creates a NSPanelMQTTManagerCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NSPanelMQTTManagerCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NSPanelMQTTManagerCommand} NSPanelMQTTManagerCommand
     */
    NSPanelMQTTManagerCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.NSPanelMQTTManagerCommand)
            return object;
        let message = new $root.NSPanelMQTTManagerCommand();
        if (object.firstPageTurnOn != null) {
            if (typeof object.firstPageTurnOn !== "object")
                throw TypeError(".NSPanelMQTTManagerCommand.firstPageTurnOn: object expected");
            message.firstPageTurnOn = $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOn.fromObject(object.firstPageTurnOn);
        }
        if (object.firstPageTurnOff != null) {
            if (typeof object.firstPageTurnOff !== "object")
                throw TypeError(".NSPanelMQTTManagerCommand.firstPageTurnOff: object expected");
            message.firstPageTurnOff = $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOff.fromObject(object.firstPageTurnOff);
        }
        if (object.lightCommand != null) {
            if (typeof object.lightCommand !== "object")
                throw TypeError(".NSPanelMQTTManagerCommand.lightCommand: object expected");
            message.lightCommand = $root.NSPanelMQTTManagerCommand.LightCommand.fromObject(object.lightCommand);
        }
        if (object.toggleEntityFromEntitiesPage != null) {
            if (typeof object.toggleEntityFromEntitiesPage !== "object")
                throw TypeError(".NSPanelMQTTManagerCommand.toggleEntityFromEntitiesPage: object expected");
            message.toggleEntityFromEntitiesPage = $root.NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage.fromObject(object.toggleEntityFromEntitiesPage);
        }
        if (object.saveSceneCommand != null) {
            if (typeof object.saveSceneCommand !== "object")
                throw TypeError(".NSPanelMQTTManagerCommand.saveSceneCommand: object expected");
            message.saveSceneCommand = $root.NSPanelMQTTManagerCommand.SaveSceneCommand.fromObject(object.saveSceneCommand);
        }
        if (object.buttonPressed != null) {
            if (typeof object.buttonPressed !== "object")
                throw TypeError(".NSPanelMQTTManagerCommand.buttonPressed: object expected");
            message.buttonPressed = $root.NSPanelMQTTManagerCommand.ButtonPressed.fromObject(object.buttonPressed);
        }
        if (object.thermostatTemperatureCommand != null) {
            if (typeof object.thermostatTemperatureCommand !== "object")
                throw TypeError(".NSPanelMQTTManagerCommand.thermostatTemperatureCommand: object expected");
            message.thermostatTemperatureCommand = $root.NSPanelMQTTManagerCommand.ThermostatTemperatureCommand.fromObject(object.thermostatTemperatureCommand);
        }
        if (object.thermostatCommand != null) {
            if (typeof object.thermostatCommand !== "object")
                throw TypeError(".NSPanelMQTTManagerCommand.thermostatCommand: object expected");
            message.thermostatCommand = $root.NSPanelMQTTManagerCommand.ThermostatCommand.fromObject(object.thermostatCommand);
        }
        if (object.nspanelId != null)
            message.nspanelId = object.nspanelId | 0;
        return message;
    };

    /**
     * Creates a plain object from a NSPanelMQTTManagerCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NSPanelMQTTManagerCommand
     * @static
     * @param {NSPanelMQTTManagerCommand} message NSPanelMQTTManagerCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NSPanelMQTTManagerCommand.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.nspanelId = 0;
        if (message.firstPageTurnOn != null && message.hasOwnProperty("firstPageTurnOn")) {
            object.firstPageTurnOn = $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOn.toObject(message.firstPageTurnOn, options);
            if (options.oneofs)
                object.CommandData = "firstPageTurnOn";
        }
        if (message.firstPageTurnOff != null && message.hasOwnProperty("firstPageTurnOff")) {
            object.firstPageTurnOff = $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOff.toObject(message.firstPageTurnOff, options);
            if (options.oneofs)
                object.CommandData = "firstPageTurnOff";
        }
        if (message.lightCommand != null && message.hasOwnProperty("lightCommand")) {
            object.lightCommand = $root.NSPanelMQTTManagerCommand.LightCommand.toObject(message.lightCommand, options);
            if (options.oneofs)
                object.CommandData = "lightCommand";
        }
        if (message.toggleEntityFromEntitiesPage != null && message.hasOwnProperty("toggleEntityFromEntitiesPage")) {
            object.toggleEntityFromEntitiesPage = $root.NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage.toObject(message.toggleEntityFromEntitiesPage, options);
            if (options.oneofs)
                object.CommandData = "toggleEntityFromEntitiesPage";
        }
        if (message.saveSceneCommand != null && message.hasOwnProperty("saveSceneCommand")) {
            object.saveSceneCommand = $root.NSPanelMQTTManagerCommand.SaveSceneCommand.toObject(message.saveSceneCommand, options);
            if (options.oneofs)
                object.CommandData = "saveSceneCommand";
        }
        if (message.buttonPressed != null && message.hasOwnProperty("buttonPressed")) {
            object.buttonPressed = $root.NSPanelMQTTManagerCommand.ButtonPressed.toObject(message.buttonPressed, options);
            if (options.oneofs)
                object.CommandData = "buttonPressed";
        }
        if (message.thermostatTemperatureCommand != null && message.hasOwnProperty("thermostatTemperatureCommand")) {
            object.thermostatTemperatureCommand = $root.NSPanelMQTTManagerCommand.ThermostatTemperatureCommand.toObject(message.thermostatTemperatureCommand, options);
            if (options.oneofs)
                object.CommandData = "thermostatTemperatureCommand";
        }
        if (message.thermostatCommand != null && message.hasOwnProperty("thermostatCommand")) {
            object.thermostatCommand = $root.NSPanelMQTTManagerCommand.ThermostatCommand.toObject(message.thermostatCommand, options);
            if (options.oneofs)
                object.CommandData = "thermostatCommand";
        }
        if (message.nspanelId != null && message.hasOwnProperty("nspanelId"))
            object.nspanelId = message.nspanelId;
        return object;
    };

    /**
     * Converts this NSPanelMQTTManagerCommand to JSON.
     * @function toJSON
     * @memberof NSPanelMQTTManagerCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NSPanelMQTTManagerCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NSPanelMQTTManagerCommand
     * @function getTypeUrl
     * @memberof NSPanelMQTTManagerCommand
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NSPanelMQTTManagerCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NSPanelMQTTManagerCommand";
    };

    /**
     * AffectLightsOptions enum.
     * @name NSPanelMQTTManagerCommand.AffectLightsOptions
     * @enum {number}
     * @property {number} ALL=0 ALL value
     * @property {number} TABLE_LIGHTS=1 TABLE_LIGHTS value
     * @property {number} CEILING_LIGHTS=2 CEILING_LIGHTS value
     */
    NSPanelMQTTManagerCommand.AffectLightsOptions = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ALL"] = 0;
        values[valuesById[1] = "TABLE_LIGHTS"] = 1;
        values[valuesById[2] = "CEILING_LIGHTS"] = 2;
        return values;
    })();

    NSPanelMQTTManagerCommand.FirstPageTurnLightOn = (function() {

        /**
         * Properties of a FirstPageTurnLightOn.
         * @memberof NSPanelMQTTManagerCommand
         * @interface IFirstPageTurnLightOn
         * @property {NSPanelMQTTManagerCommand.AffectLightsOptions|null} [affectLights] FirstPageTurnLightOn affectLights
         * @property {number|null} [brightnessSliderValue] FirstPageTurnLightOn brightnessSliderValue
         * @property {number|null} [kelvinSliderValue] FirstPageTurnLightOn kelvinSliderValue
         * @property {number|null} [selectedRoom] FirstPageTurnLightOn selectedRoom
         * @property {boolean|null} [global] FirstPageTurnLightOn global
         * @property {boolean|null} [hasBrightnessValue] FirstPageTurnLightOn hasBrightnessValue
         * @property {boolean|null} [hasKelvinValue] FirstPageTurnLightOn hasKelvinValue
         */

        /**
         * Constructs a new FirstPageTurnLightOn.
         * @memberof NSPanelMQTTManagerCommand
         * @classdesc Represents a FirstPageTurnLightOn.
         * @implements IFirstPageTurnLightOn
         * @constructor
         * @param {NSPanelMQTTManagerCommand.IFirstPageTurnLightOn=} [properties] Properties to set
         */
        function FirstPageTurnLightOn(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FirstPageTurnLightOn affectLights.
         * @member {NSPanelMQTTManagerCommand.AffectLightsOptions} affectLights
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @instance
         */
        FirstPageTurnLightOn.prototype.affectLights = 0;

        /**
         * FirstPageTurnLightOn brightnessSliderValue.
         * @member {number} brightnessSliderValue
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @instance
         */
        FirstPageTurnLightOn.prototype.brightnessSliderValue = 0;

        /**
         * FirstPageTurnLightOn kelvinSliderValue.
         * @member {number} kelvinSliderValue
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @instance
         */
        FirstPageTurnLightOn.prototype.kelvinSliderValue = 0;

        /**
         * FirstPageTurnLightOn selectedRoom.
         * @member {number} selectedRoom
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @instance
         */
        FirstPageTurnLightOn.prototype.selectedRoom = 0;

        /**
         * FirstPageTurnLightOn global.
         * @member {boolean} global
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @instance
         */
        FirstPageTurnLightOn.prototype.global = false;

        /**
         * FirstPageTurnLightOn hasBrightnessValue.
         * @member {boolean} hasBrightnessValue
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @instance
         */
        FirstPageTurnLightOn.prototype.hasBrightnessValue = false;

        /**
         * FirstPageTurnLightOn hasKelvinValue.
         * @member {boolean} hasKelvinValue
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @instance
         */
        FirstPageTurnLightOn.prototype.hasKelvinValue = false;

        /**
         * Creates a new FirstPageTurnLightOn instance using the specified properties.
         * @function create
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @static
         * @param {NSPanelMQTTManagerCommand.IFirstPageTurnLightOn=} [properties] Properties to set
         * @returns {NSPanelMQTTManagerCommand.FirstPageTurnLightOn} FirstPageTurnLightOn instance
         */
        FirstPageTurnLightOn.create = function create(properties) {
            return new FirstPageTurnLightOn(properties);
        };

        /**
         * Encodes the specified FirstPageTurnLightOn message. Does not implicitly {@link NSPanelMQTTManagerCommand.FirstPageTurnLightOn.verify|verify} messages.
         * @function encode
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @static
         * @param {NSPanelMQTTManagerCommand.IFirstPageTurnLightOn} message FirstPageTurnLightOn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FirstPageTurnLightOn.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.affectLights != null && Object.hasOwnProperty.call(message, "affectLights"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.affectLights);
            if (message.brightnessSliderValue != null && Object.hasOwnProperty.call(message, "brightnessSliderValue"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.brightnessSliderValue);
            if (message.kelvinSliderValue != null && Object.hasOwnProperty.call(message, "kelvinSliderValue"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.kelvinSliderValue);
            if (message.selectedRoom != null && Object.hasOwnProperty.call(message, "selectedRoom"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.selectedRoom);
            if (message.global != null && Object.hasOwnProperty.call(message, "global"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.global);
            if (message.hasBrightnessValue != null && Object.hasOwnProperty.call(message, "hasBrightnessValue"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.hasBrightnessValue);
            if (message.hasKelvinValue != null && Object.hasOwnProperty.call(message, "hasKelvinValue"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.hasKelvinValue);
            return writer;
        };

        /**
         * Encodes the specified FirstPageTurnLightOn message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.FirstPageTurnLightOn.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @static
         * @param {NSPanelMQTTManagerCommand.IFirstPageTurnLightOn} message FirstPageTurnLightOn message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FirstPageTurnLightOn.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FirstPageTurnLightOn message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelMQTTManagerCommand.FirstPageTurnLightOn} FirstPageTurnLightOn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FirstPageTurnLightOn.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOn();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.affectLights = reader.int32();
                        break;
                    }
                case 2: {
                        message.brightnessSliderValue = reader.int32();
                        break;
                    }
                case 3: {
                        message.kelvinSliderValue = reader.int32();
                        break;
                    }
                case 4: {
                        message.selectedRoom = reader.int32();
                        break;
                    }
                case 5: {
                        message.global = reader.bool();
                        break;
                    }
                case 6: {
                        message.hasBrightnessValue = reader.bool();
                        break;
                    }
                case 7: {
                        message.hasKelvinValue = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FirstPageTurnLightOn message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelMQTTManagerCommand.FirstPageTurnLightOn} FirstPageTurnLightOn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FirstPageTurnLightOn.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FirstPageTurnLightOn message.
         * @function verify
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FirstPageTurnLightOn.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.affectLights != null && message.hasOwnProperty("affectLights"))
                switch (message.affectLights) {
                default:
                    return "affectLights: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.brightnessSliderValue != null && message.hasOwnProperty("brightnessSliderValue"))
                if (!$util.isInteger(message.brightnessSliderValue))
                    return "brightnessSliderValue: integer expected";
            if (message.kelvinSliderValue != null && message.hasOwnProperty("kelvinSliderValue"))
                if (!$util.isInteger(message.kelvinSliderValue))
                    return "kelvinSliderValue: integer expected";
            if (message.selectedRoom != null && message.hasOwnProperty("selectedRoom"))
                if (!$util.isInteger(message.selectedRoom))
                    return "selectedRoom: integer expected";
            if (message.global != null && message.hasOwnProperty("global"))
                if (typeof message.global !== "boolean")
                    return "global: boolean expected";
            if (message.hasBrightnessValue != null && message.hasOwnProperty("hasBrightnessValue"))
                if (typeof message.hasBrightnessValue !== "boolean")
                    return "hasBrightnessValue: boolean expected";
            if (message.hasKelvinValue != null && message.hasOwnProperty("hasKelvinValue"))
                if (typeof message.hasKelvinValue !== "boolean")
                    return "hasKelvinValue: boolean expected";
            return null;
        };

        /**
         * Creates a FirstPageTurnLightOn message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelMQTTManagerCommand.FirstPageTurnLightOn} FirstPageTurnLightOn
         */
        FirstPageTurnLightOn.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOn)
                return object;
            let message = new $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOn();
            switch (object.affectLights) {
            default:
                if (typeof object.affectLights === "number") {
                    message.affectLights = object.affectLights;
                    break;
                }
                break;
            case "ALL":
            case 0:
                message.affectLights = 0;
                break;
            case "TABLE_LIGHTS":
            case 1:
                message.affectLights = 1;
                break;
            case "CEILING_LIGHTS":
            case 2:
                message.affectLights = 2;
                break;
            }
            if (object.brightnessSliderValue != null)
                message.brightnessSliderValue = object.brightnessSliderValue | 0;
            if (object.kelvinSliderValue != null)
                message.kelvinSliderValue = object.kelvinSliderValue | 0;
            if (object.selectedRoom != null)
                message.selectedRoom = object.selectedRoom | 0;
            if (object.global != null)
                message.global = Boolean(object.global);
            if (object.hasBrightnessValue != null)
                message.hasBrightnessValue = Boolean(object.hasBrightnessValue);
            if (object.hasKelvinValue != null)
                message.hasKelvinValue = Boolean(object.hasKelvinValue);
            return message;
        };

        /**
         * Creates a plain object from a FirstPageTurnLightOn message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @static
         * @param {NSPanelMQTTManagerCommand.FirstPageTurnLightOn} message FirstPageTurnLightOn
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FirstPageTurnLightOn.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.affectLights = options.enums === String ? "ALL" : 0;
                object.brightnessSliderValue = 0;
                object.kelvinSliderValue = 0;
                object.selectedRoom = 0;
                object.global = false;
                object.hasBrightnessValue = false;
                object.hasKelvinValue = false;
            }
            if (message.affectLights != null && message.hasOwnProperty("affectLights"))
                object.affectLights = options.enums === String ? $root.NSPanelMQTTManagerCommand.AffectLightsOptions[message.affectLights] === undefined ? message.affectLights : $root.NSPanelMQTTManagerCommand.AffectLightsOptions[message.affectLights] : message.affectLights;
            if (message.brightnessSliderValue != null && message.hasOwnProperty("brightnessSliderValue"))
                object.brightnessSliderValue = message.brightnessSliderValue;
            if (message.kelvinSliderValue != null && message.hasOwnProperty("kelvinSliderValue"))
                object.kelvinSliderValue = message.kelvinSliderValue;
            if (message.selectedRoom != null && message.hasOwnProperty("selectedRoom"))
                object.selectedRoom = message.selectedRoom;
            if (message.global != null && message.hasOwnProperty("global"))
                object.global = message.global;
            if (message.hasBrightnessValue != null && message.hasOwnProperty("hasBrightnessValue"))
                object.hasBrightnessValue = message.hasBrightnessValue;
            if (message.hasKelvinValue != null && message.hasOwnProperty("hasKelvinValue"))
                object.hasKelvinValue = message.hasKelvinValue;
            return object;
        };

        /**
         * Converts this FirstPageTurnLightOn to JSON.
         * @function toJSON
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FirstPageTurnLightOn.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FirstPageTurnLightOn
         * @function getTypeUrl
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOn
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FirstPageTurnLightOn.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelMQTTManagerCommand.FirstPageTurnLightOn";
        };

        return FirstPageTurnLightOn;
    })();

    NSPanelMQTTManagerCommand.FirstPageTurnLightOff = (function() {

        /**
         * Properties of a FirstPageTurnLightOff.
         * @memberof NSPanelMQTTManagerCommand
         * @interface IFirstPageTurnLightOff
         * @property {NSPanelMQTTManagerCommand.AffectLightsOptions|null} [affectLights] FirstPageTurnLightOff affectLights
         * @property {boolean|null} [global] FirstPageTurnLightOff global
         */

        /**
         * Constructs a new FirstPageTurnLightOff.
         * @memberof NSPanelMQTTManagerCommand
         * @classdesc Represents a FirstPageTurnLightOff.
         * @implements IFirstPageTurnLightOff
         * @constructor
         * @param {NSPanelMQTTManagerCommand.IFirstPageTurnLightOff=} [properties] Properties to set
         */
        function FirstPageTurnLightOff(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FirstPageTurnLightOff affectLights.
         * @member {NSPanelMQTTManagerCommand.AffectLightsOptions} affectLights
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @instance
         */
        FirstPageTurnLightOff.prototype.affectLights = 0;

        /**
         * FirstPageTurnLightOff global.
         * @member {boolean} global
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @instance
         */
        FirstPageTurnLightOff.prototype.global = false;

        /**
         * Creates a new FirstPageTurnLightOff instance using the specified properties.
         * @function create
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @static
         * @param {NSPanelMQTTManagerCommand.IFirstPageTurnLightOff=} [properties] Properties to set
         * @returns {NSPanelMQTTManagerCommand.FirstPageTurnLightOff} FirstPageTurnLightOff instance
         */
        FirstPageTurnLightOff.create = function create(properties) {
            return new FirstPageTurnLightOff(properties);
        };

        /**
         * Encodes the specified FirstPageTurnLightOff message. Does not implicitly {@link NSPanelMQTTManagerCommand.FirstPageTurnLightOff.verify|verify} messages.
         * @function encode
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @static
         * @param {NSPanelMQTTManagerCommand.IFirstPageTurnLightOff} message FirstPageTurnLightOff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FirstPageTurnLightOff.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.affectLights != null && Object.hasOwnProperty.call(message, "affectLights"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.affectLights);
            if (message.global != null && Object.hasOwnProperty.call(message, "global"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.global);
            return writer;
        };

        /**
         * Encodes the specified FirstPageTurnLightOff message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.FirstPageTurnLightOff.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @static
         * @param {NSPanelMQTTManagerCommand.IFirstPageTurnLightOff} message FirstPageTurnLightOff message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FirstPageTurnLightOff.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FirstPageTurnLightOff message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelMQTTManagerCommand.FirstPageTurnLightOff} FirstPageTurnLightOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FirstPageTurnLightOff.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOff();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.affectLights = reader.int32();
                        break;
                    }
                case 2: {
                        message.global = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a FirstPageTurnLightOff message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelMQTTManagerCommand.FirstPageTurnLightOff} FirstPageTurnLightOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FirstPageTurnLightOff.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FirstPageTurnLightOff message.
         * @function verify
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FirstPageTurnLightOff.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.affectLights != null && message.hasOwnProperty("affectLights"))
                switch (message.affectLights) {
                default:
                    return "affectLights: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.global != null && message.hasOwnProperty("global"))
                if (typeof message.global !== "boolean")
                    return "global: boolean expected";
            return null;
        };

        /**
         * Creates a FirstPageTurnLightOff message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelMQTTManagerCommand.FirstPageTurnLightOff} FirstPageTurnLightOff
         */
        FirstPageTurnLightOff.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOff)
                return object;
            let message = new $root.NSPanelMQTTManagerCommand.FirstPageTurnLightOff();
            switch (object.affectLights) {
            default:
                if (typeof object.affectLights === "number") {
                    message.affectLights = object.affectLights;
                    break;
                }
                break;
            case "ALL":
            case 0:
                message.affectLights = 0;
                break;
            case "TABLE_LIGHTS":
            case 1:
                message.affectLights = 1;
                break;
            case "CEILING_LIGHTS":
            case 2:
                message.affectLights = 2;
                break;
            }
            if (object.global != null)
                message.global = Boolean(object.global);
            return message;
        };

        /**
         * Creates a plain object from a FirstPageTurnLightOff message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @static
         * @param {NSPanelMQTTManagerCommand.FirstPageTurnLightOff} message FirstPageTurnLightOff
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FirstPageTurnLightOff.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.affectLights = options.enums === String ? "ALL" : 0;
                object.global = false;
            }
            if (message.affectLights != null && message.hasOwnProperty("affectLights"))
                object.affectLights = options.enums === String ? $root.NSPanelMQTTManagerCommand.AffectLightsOptions[message.affectLights] === undefined ? message.affectLights : $root.NSPanelMQTTManagerCommand.AffectLightsOptions[message.affectLights] : message.affectLights;
            if (message.global != null && message.hasOwnProperty("global"))
                object.global = message.global;
            return object;
        };

        /**
         * Converts this FirstPageTurnLightOff to JSON.
         * @function toJSON
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FirstPageTurnLightOff.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FirstPageTurnLightOff
         * @function getTypeUrl
         * @memberof NSPanelMQTTManagerCommand.FirstPageTurnLightOff
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FirstPageTurnLightOff.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelMQTTManagerCommand.FirstPageTurnLightOff";
        };

        return FirstPageTurnLightOff;
    })();

    NSPanelMQTTManagerCommand.LightCommand = (function() {

        /**
         * Properties of a LightCommand.
         * @memberof NSPanelMQTTManagerCommand
         * @interface ILightCommand
         * @property {Array.<number>|null} [lightIds] LightCommand lightIds
         * @property {boolean|null} [hasBrightness] LightCommand hasBrightness
         * @property {number|null} [brightness] LightCommand brightness
         * @property {boolean|null} [hasColorTemperature] LightCommand hasColorTemperature
         * @property {number|null} [colorTemperature] LightCommand colorTemperature
         * @property {boolean|null} [hasHue] LightCommand hasHue
         * @property {number|null} [hue] LightCommand hue
         * @property {boolean|null} [hasSaturation] LightCommand hasSaturation
         * @property {number|null} [saturation] LightCommand saturation
         */

        /**
         * Constructs a new LightCommand.
         * @memberof NSPanelMQTTManagerCommand
         * @classdesc Represents a LightCommand.
         * @implements ILightCommand
         * @constructor
         * @param {NSPanelMQTTManagerCommand.ILightCommand=} [properties] Properties to set
         */
        function LightCommand(properties) {
            this.lightIds = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LightCommand lightIds.
         * @member {Array.<number>} lightIds
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         */
        LightCommand.prototype.lightIds = $util.emptyArray;

        /**
         * LightCommand hasBrightness.
         * @member {boolean} hasBrightness
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         */
        LightCommand.prototype.hasBrightness = false;

        /**
         * LightCommand brightness.
         * @member {number} brightness
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         */
        LightCommand.prototype.brightness = 0;

        /**
         * LightCommand hasColorTemperature.
         * @member {boolean} hasColorTemperature
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         */
        LightCommand.prototype.hasColorTemperature = false;

        /**
         * LightCommand colorTemperature.
         * @member {number} colorTemperature
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         */
        LightCommand.prototype.colorTemperature = 0;

        /**
         * LightCommand hasHue.
         * @member {boolean} hasHue
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         */
        LightCommand.prototype.hasHue = false;

        /**
         * LightCommand hue.
         * @member {number} hue
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         */
        LightCommand.prototype.hue = 0;

        /**
         * LightCommand hasSaturation.
         * @member {boolean} hasSaturation
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         */
        LightCommand.prototype.hasSaturation = false;

        /**
         * LightCommand saturation.
         * @member {number} saturation
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         */
        LightCommand.prototype.saturation = 0;

        /**
         * Creates a new LightCommand instance using the specified properties.
         * @function create
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.ILightCommand=} [properties] Properties to set
         * @returns {NSPanelMQTTManagerCommand.LightCommand} LightCommand instance
         */
        LightCommand.create = function create(properties) {
            return new LightCommand(properties);
        };

        /**
         * Encodes the specified LightCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.LightCommand.verify|verify} messages.
         * @function encode
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.ILightCommand} message LightCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LightCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lightIds != null && message.lightIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (let i = 0; i < message.lightIds.length; ++i)
                    writer.int32(message.lightIds[i]);
                writer.ldelim();
            }
            if (message.hasBrightness != null && Object.hasOwnProperty.call(message, "hasBrightness"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.hasBrightness);
            if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.brightness);
            if (message.hasColorTemperature != null && Object.hasOwnProperty.call(message, "hasColorTemperature"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasColorTemperature);
            if (message.colorTemperature != null && Object.hasOwnProperty.call(message, "colorTemperature"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.colorTemperature);
            if (message.hasHue != null && Object.hasOwnProperty.call(message, "hasHue"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.hasHue);
            if (message.hue != null && Object.hasOwnProperty.call(message, "hue"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.hue);
            if (message.hasSaturation != null && Object.hasOwnProperty.call(message, "hasSaturation"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.hasSaturation);
            if (message.saturation != null && Object.hasOwnProperty.call(message, "saturation"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.saturation);
            return writer;
        };

        /**
         * Encodes the specified LightCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.LightCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.ILightCommand} message LightCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LightCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LightCommand message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelMQTTManagerCommand.LightCommand} LightCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LightCommand.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelMQTTManagerCommand.LightCommand();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.lightIds && message.lightIds.length))
                            message.lightIds = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.lightIds.push(reader.int32());
                        } else
                            message.lightIds.push(reader.int32());
                        break;
                    }
                case 2: {
                        message.hasBrightness = reader.bool();
                        break;
                    }
                case 3: {
                        message.brightness = reader.int32();
                        break;
                    }
                case 4: {
                        message.hasColorTemperature = reader.bool();
                        break;
                    }
                case 5: {
                        message.colorTemperature = reader.int32();
                        break;
                    }
                case 6: {
                        message.hasHue = reader.bool();
                        break;
                    }
                case 7: {
                        message.hue = reader.int32();
                        break;
                    }
                case 8: {
                        message.hasSaturation = reader.bool();
                        break;
                    }
                case 9: {
                        message.saturation = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LightCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelMQTTManagerCommand.LightCommand} LightCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LightCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LightCommand message.
         * @function verify
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LightCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.lightIds != null && message.hasOwnProperty("lightIds")) {
                if (!Array.isArray(message.lightIds))
                    return "lightIds: array expected";
                for (let i = 0; i < message.lightIds.length; ++i)
                    if (!$util.isInteger(message.lightIds[i]))
                        return "lightIds: integer[] expected";
            }
            if (message.hasBrightness != null && message.hasOwnProperty("hasBrightness"))
                if (typeof message.hasBrightness !== "boolean")
                    return "hasBrightness: boolean expected";
            if (message.brightness != null && message.hasOwnProperty("brightness"))
                if (!$util.isInteger(message.brightness))
                    return "brightness: integer expected";
            if (message.hasColorTemperature != null && message.hasOwnProperty("hasColorTemperature"))
                if (typeof message.hasColorTemperature !== "boolean")
                    return "hasColorTemperature: boolean expected";
            if (message.colorTemperature != null && message.hasOwnProperty("colorTemperature"))
                if (!$util.isInteger(message.colorTemperature))
                    return "colorTemperature: integer expected";
            if (message.hasHue != null && message.hasOwnProperty("hasHue"))
                if (typeof message.hasHue !== "boolean")
                    return "hasHue: boolean expected";
            if (message.hue != null && message.hasOwnProperty("hue"))
                if (!$util.isInteger(message.hue))
                    return "hue: integer expected";
            if (message.hasSaturation != null && message.hasOwnProperty("hasSaturation"))
                if (typeof message.hasSaturation !== "boolean")
                    return "hasSaturation: boolean expected";
            if (message.saturation != null && message.hasOwnProperty("saturation"))
                if (!$util.isInteger(message.saturation))
                    return "saturation: integer expected";
            return null;
        };

        /**
         * Creates a LightCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelMQTTManagerCommand.LightCommand} LightCommand
         */
        LightCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelMQTTManagerCommand.LightCommand)
                return object;
            let message = new $root.NSPanelMQTTManagerCommand.LightCommand();
            if (object.lightIds) {
                if (!Array.isArray(object.lightIds))
                    throw TypeError(".NSPanelMQTTManagerCommand.LightCommand.lightIds: array expected");
                message.lightIds = [];
                for (let i = 0; i < object.lightIds.length; ++i)
                    message.lightIds[i] = object.lightIds[i] | 0;
            }
            if (object.hasBrightness != null)
                message.hasBrightness = Boolean(object.hasBrightness);
            if (object.brightness != null)
                message.brightness = object.brightness | 0;
            if (object.hasColorTemperature != null)
                message.hasColorTemperature = Boolean(object.hasColorTemperature);
            if (object.colorTemperature != null)
                message.colorTemperature = object.colorTemperature | 0;
            if (object.hasHue != null)
                message.hasHue = Boolean(object.hasHue);
            if (object.hue != null)
                message.hue = object.hue | 0;
            if (object.hasSaturation != null)
                message.hasSaturation = Boolean(object.hasSaturation);
            if (object.saturation != null)
                message.saturation = object.saturation | 0;
            return message;
        };

        /**
         * Creates a plain object from a LightCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.LightCommand} message LightCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LightCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.lightIds = [];
            if (options.defaults) {
                object.hasBrightness = false;
                object.brightness = 0;
                object.hasColorTemperature = false;
                object.colorTemperature = 0;
                object.hasHue = false;
                object.hue = 0;
                object.hasSaturation = false;
                object.saturation = 0;
            }
            if (message.lightIds && message.lightIds.length) {
                object.lightIds = [];
                for (let j = 0; j < message.lightIds.length; ++j)
                    object.lightIds[j] = message.lightIds[j];
            }
            if (message.hasBrightness != null && message.hasOwnProperty("hasBrightness"))
                object.hasBrightness = message.hasBrightness;
            if (message.brightness != null && message.hasOwnProperty("brightness"))
                object.brightness = message.brightness;
            if (message.hasColorTemperature != null && message.hasOwnProperty("hasColorTemperature"))
                object.hasColorTemperature = message.hasColorTemperature;
            if (message.colorTemperature != null && message.hasOwnProperty("colorTemperature"))
                object.colorTemperature = message.colorTemperature;
            if (message.hasHue != null && message.hasOwnProperty("hasHue"))
                object.hasHue = message.hasHue;
            if (message.hue != null && message.hasOwnProperty("hue"))
                object.hue = message.hue;
            if (message.hasSaturation != null && message.hasOwnProperty("hasSaturation"))
                object.hasSaturation = message.hasSaturation;
            if (message.saturation != null && message.hasOwnProperty("saturation"))
                object.saturation = message.saturation;
            return object;
        };

        /**
         * Converts this LightCommand to JSON.
         * @function toJSON
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LightCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LightCommand
         * @function getTypeUrl
         * @memberof NSPanelMQTTManagerCommand.LightCommand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LightCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelMQTTManagerCommand.LightCommand";
        };

        return LightCommand;
    })();

    NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage = (function() {

        /**
         * Properties of a ToggleEntityFromEntitiesPage.
         * @memberof NSPanelMQTTManagerCommand
         * @interface IToggleEntityFromEntitiesPage
         * @property {number|null} [entityPageId] ToggleEntityFromEntitiesPage entityPageId
         * @property {number|null} [entitySlot] ToggleEntityFromEntitiesPage entitySlot
         */

        /**
         * Constructs a new ToggleEntityFromEntitiesPage.
         * @memberof NSPanelMQTTManagerCommand
         * @classdesc Represents a ToggleEntityFromEntitiesPage.
         * @implements IToggleEntityFromEntitiesPage
         * @constructor
         * @param {NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage=} [properties] Properties to set
         */
        function ToggleEntityFromEntitiesPage(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ToggleEntityFromEntitiesPage entityPageId.
         * @member {number} entityPageId
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @instance
         */
        ToggleEntityFromEntitiesPage.prototype.entityPageId = 0;

        /**
         * ToggleEntityFromEntitiesPage entitySlot.
         * @member {number} entitySlot
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @instance
         */
        ToggleEntityFromEntitiesPage.prototype.entitySlot = 0;

        /**
         * Creates a new ToggleEntityFromEntitiesPage instance using the specified properties.
         * @function create
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @static
         * @param {NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage=} [properties] Properties to set
         * @returns {NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage} ToggleEntityFromEntitiesPage instance
         */
        ToggleEntityFromEntitiesPage.create = function create(properties) {
            return new ToggleEntityFromEntitiesPage(properties);
        };

        /**
         * Encodes the specified ToggleEntityFromEntitiesPage message. Does not implicitly {@link NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage.verify|verify} messages.
         * @function encode
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @static
         * @param {NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage} message ToggleEntityFromEntitiesPage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToggleEntityFromEntitiesPage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entityPageId != null && Object.hasOwnProperty.call(message, "entityPageId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.entityPageId);
            if (message.entitySlot != null && Object.hasOwnProperty.call(message, "entitySlot"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.entitySlot);
            return writer;
        };

        /**
         * Encodes the specified ToggleEntityFromEntitiesPage message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @static
         * @param {NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage} message ToggleEntityFromEntitiesPage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ToggleEntityFromEntitiesPage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ToggleEntityFromEntitiesPage message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage} ToggleEntityFromEntitiesPage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToggleEntityFromEntitiesPage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.entityPageId = reader.int32();
                        break;
                    }
                case 2: {
                        message.entitySlot = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ToggleEntityFromEntitiesPage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage} ToggleEntityFromEntitiesPage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ToggleEntityFromEntitiesPage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ToggleEntityFromEntitiesPage message.
         * @function verify
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ToggleEntityFromEntitiesPage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entityPageId != null && message.hasOwnProperty("entityPageId"))
                if (!$util.isInteger(message.entityPageId))
                    return "entityPageId: integer expected";
            if (message.entitySlot != null && message.hasOwnProperty("entitySlot"))
                if (!$util.isInteger(message.entitySlot))
                    return "entitySlot: integer expected";
            return null;
        };

        /**
         * Creates a ToggleEntityFromEntitiesPage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage} ToggleEntityFromEntitiesPage
         */
        ToggleEntityFromEntitiesPage.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage)
                return object;
            let message = new $root.NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage();
            if (object.entityPageId != null)
                message.entityPageId = object.entityPageId | 0;
            if (object.entitySlot != null)
                message.entitySlot = object.entitySlot | 0;
            return message;
        };

        /**
         * Creates a plain object from a ToggleEntityFromEntitiesPage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @static
         * @param {NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage} message ToggleEntityFromEntitiesPage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ToggleEntityFromEntitiesPage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.entityPageId = 0;
                object.entitySlot = 0;
            }
            if (message.entityPageId != null && message.hasOwnProperty("entityPageId"))
                object.entityPageId = message.entityPageId;
            if (message.entitySlot != null && message.hasOwnProperty("entitySlot"))
                object.entitySlot = message.entitySlot;
            return object;
        };

        /**
         * Converts this ToggleEntityFromEntitiesPage to JSON.
         * @function toJSON
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ToggleEntityFromEntitiesPage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ToggleEntityFromEntitiesPage
         * @function getTypeUrl
         * @memberof NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ToggleEntityFromEntitiesPage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage";
        };

        return ToggleEntityFromEntitiesPage;
    })();

    NSPanelMQTTManagerCommand.SaveSceneCommand = (function() {

        /**
         * Properties of a SaveSceneCommand.
         * @memberof NSPanelMQTTManagerCommand
         * @interface ISaveSceneCommand
         * @property {number|null} [entityPageId] SaveSceneCommand entityPageId
         * @property {number|null} [entitySlot] SaveSceneCommand entitySlot
         */

        /**
         * Constructs a new SaveSceneCommand.
         * @memberof NSPanelMQTTManagerCommand
         * @classdesc Represents a SaveSceneCommand.
         * @implements ISaveSceneCommand
         * @constructor
         * @param {NSPanelMQTTManagerCommand.ISaveSceneCommand=} [properties] Properties to set
         */
        function SaveSceneCommand(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SaveSceneCommand entityPageId.
         * @member {number} entityPageId
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @instance
         */
        SaveSceneCommand.prototype.entityPageId = 0;

        /**
         * SaveSceneCommand entitySlot.
         * @member {number} entitySlot
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @instance
         */
        SaveSceneCommand.prototype.entitySlot = 0;

        /**
         * Creates a new SaveSceneCommand instance using the specified properties.
         * @function create
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.ISaveSceneCommand=} [properties] Properties to set
         * @returns {NSPanelMQTTManagerCommand.SaveSceneCommand} SaveSceneCommand instance
         */
        SaveSceneCommand.create = function create(properties) {
            return new SaveSceneCommand(properties);
        };

        /**
         * Encodes the specified SaveSceneCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.SaveSceneCommand.verify|verify} messages.
         * @function encode
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.ISaveSceneCommand} message SaveSceneCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveSceneCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.entityPageId != null && Object.hasOwnProperty.call(message, "entityPageId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.entityPageId);
            if (message.entitySlot != null && Object.hasOwnProperty.call(message, "entitySlot"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.entitySlot);
            return writer;
        };

        /**
         * Encodes the specified SaveSceneCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.SaveSceneCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.ISaveSceneCommand} message SaveSceneCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SaveSceneCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SaveSceneCommand message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelMQTTManagerCommand.SaveSceneCommand} SaveSceneCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveSceneCommand.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelMQTTManagerCommand.SaveSceneCommand();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.entityPageId = reader.int32();
                        break;
                    }
                case 2: {
                        message.entitySlot = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SaveSceneCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelMQTTManagerCommand.SaveSceneCommand} SaveSceneCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SaveSceneCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SaveSceneCommand message.
         * @function verify
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SaveSceneCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.entityPageId != null && message.hasOwnProperty("entityPageId"))
                if (!$util.isInteger(message.entityPageId))
                    return "entityPageId: integer expected";
            if (message.entitySlot != null && message.hasOwnProperty("entitySlot"))
                if (!$util.isInteger(message.entitySlot))
                    return "entitySlot: integer expected";
            return null;
        };

        /**
         * Creates a SaveSceneCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelMQTTManagerCommand.SaveSceneCommand} SaveSceneCommand
         */
        SaveSceneCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelMQTTManagerCommand.SaveSceneCommand)
                return object;
            let message = new $root.NSPanelMQTTManagerCommand.SaveSceneCommand();
            if (object.entityPageId != null)
                message.entityPageId = object.entityPageId | 0;
            if (object.entitySlot != null)
                message.entitySlot = object.entitySlot | 0;
            return message;
        };

        /**
         * Creates a plain object from a SaveSceneCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.SaveSceneCommand} message SaveSceneCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SaveSceneCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.entityPageId = 0;
                object.entitySlot = 0;
            }
            if (message.entityPageId != null && message.hasOwnProperty("entityPageId"))
                object.entityPageId = message.entityPageId;
            if (message.entitySlot != null && message.hasOwnProperty("entitySlot"))
                object.entitySlot = message.entitySlot;
            return object;
        };

        /**
         * Converts this SaveSceneCommand to JSON.
         * @function toJSON
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SaveSceneCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SaveSceneCommand
         * @function getTypeUrl
         * @memberof NSPanelMQTTManagerCommand.SaveSceneCommand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SaveSceneCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelMQTTManagerCommand.SaveSceneCommand";
        };

        return SaveSceneCommand;
    })();

    NSPanelMQTTManagerCommand.ButtonPressed = (function() {

        /**
         * Properties of a ButtonPressed.
         * @memberof NSPanelMQTTManagerCommand
         * @interface IButtonPressed
         * @property {number|null} [buttonId] ButtonPressed buttonId
         */

        /**
         * Constructs a new ButtonPressed.
         * @memberof NSPanelMQTTManagerCommand
         * @classdesc Represents a ButtonPressed.
         * @implements IButtonPressed
         * @constructor
         * @param {NSPanelMQTTManagerCommand.IButtonPressed=} [properties] Properties to set
         */
        function ButtonPressed(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ButtonPressed buttonId.
         * @member {number} buttonId
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @instance
         */
        ButtonPressed.prototype.buttonId = 0;

        /**
         * Creates a new ButtonPressed instance using the specified properties.
         * @function create
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @static
         * @param {NSPanelMQTTManagerCommand.IButtonPressed=} [properties] Properties to set
         * @returns {NSPanelMQTTManagerCommand.ButtonPressed} ButtonPressed instance
         */
        ButtonPressed.create = function create(properties) {
            return new ButtonPressed(properties);
        };

        /**
         * Encodes the specified ButtonPressed message. Does not implicitly {@link NSPanelMQTTManagerCommand.ButtonPressed.verify|verify} messages.
         * @function encode
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @static
         * @param {NSPanelMQTTManagerCommand.IButtonPressed} message ButtonPressed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonPressed.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.buttonId != null && Object.hasOwnProperty.call(message, "buttonId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.buttonId);
            return writer;
        };

        /**
         * Encodes the specified ButtonPressed message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.ButtonPressed.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @static
         * @param {NSPanelMQTTManagerCommand.IButtonPressed} message ButtonPressed message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ButtonPressed.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ButtonPressed message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelMQTTManagerCommand.ButtonPressed} ButtonPressed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonPressed.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelMQTTManagerCommand.ButtonPressed();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 2: {
                        message.buttonId = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ButtonPressed message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelMQTTManagerCommand.ButtonPressed} ButtonPressed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ButtonPressed.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ButtonPressed message.
         * @function verify
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ButtonPressed.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.buttonId != null && message.hasOwnProperty("buttonId"))
                if (!$util.isInteger(message.buttonId))
                    return "buttonId: integer expected";
            return null;
        };

        /**
         * Creates a ButtonPressed message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelMQTTManagerCommand.ButtonPressed} ButtonPressed
         */
        ButtonPressed.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelMQTTManagerCommand.ButtonPressed)
                return object;
            let message = new $root.NSPanelMQTTManagerCommand.ButtonPressed();
            if (object.buttonId != null)
                message.buttonId = object.buttonId | 0;
            return message;
        };

        /**
         * Creates a plain object from a ButtonPressed message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @static
         * @param {NSPanelMQTTManagerCommand.ButtonPressed} message ButtonPressed
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ButtonPressed.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults)
                object.buttonId = 0;
            if (message.buttonId != null && message.hasOwnProperty("buttonId"))
                object.buttonId = message.buttonId;
            return object;
        };

        /**
         * Converts this ButtonPressed to JSON.
         * @function toJSON
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ButtonPressed.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ButtonPressed
         * @function getTypeUrl
         * @memberof NSPanelMQTTManagerCommand.ButtonPressed
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ButtonPressed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelMQTTManagerCommand.ButtonPressed";
        };

        return ButtonPressed;
    })();

    NSPanelMQTTManagerCommand.ThermostatTemperatureCommand = (function() {

        /**
         * Properties of a ThermostatTemperatureCommand.
         * @memberof NSPanelMQTTManagerCommand
         * @interface IThermostatTemperatureCommand
         * @property {number|null} [thermostatId] ThermostatTemperatureCommand thermostatId
         * @property {number|null} [temperature] ThermostatTemperatureCommand temperature
         */

        /**
         * Constructs a new ThermostatTemperatureCommand.
         * @memberof NSPanelMQTTManagerCommand
         * @classdesc Represents a ThermostatTemperatureCommand.
         * @implements IThermostatTemperatureCommand
         * @constructor
         * @param {NSPanelMQTTManagerCommand.IThermostatTemperatureCommand=} [properties] Properties to set
         */
        function ThermostatTemperatureCommand(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ThermostatTemperatureCommand thermostatId.
         * @member {number} thermostatId
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @instance
         */
        ThermostatTemperatureCommand.prototype.thermostatId = 0;

        /**
         * ThermostatTemperatureCommand temperature.
         * @member {number} temperature
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @instance
         */
        ThermostatTemperatureCommand.prototype.temperature = 0;

        /**
         * Creates a new ThermostatTemperatureCommand instance using the specified properties.
         * @function create
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.IThermostatTemperatureCommand=} [properties] Properties to set
         * @returns {NSPanelMQTTManagerCommand.ThermostatTemperatureCommand} ThermostatTemperatureCommand instance
         */
        ThermostatTemperatureCommand.create = function create(properties) {
            return new ThermostatTemperatureCommand(properties);
        };

        /**
         * Encodes the specified ThermostatTemperatureCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.ThermostatTemperatureCommand.verify|verify} messages.
         * @function encode
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.IThermostatTemperatureCommand} message ThermostatTemperatureCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThermostatTemperatureCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.thermostatId != null && Object.hasOwnProperty.call(message, "thermostatId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.thermostatId);
            if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
                writer.uint32(/* id 2, wireType 5 =*/21).float(message.temperature);
            return writer;
        };

        /**
         * Encodes the specified ThermostatTemperatureCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.ThermostatTemperatureCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.IThermostatTemperatureCommand} message ThermostatTemperatureCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThermostatTemperatureCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ThermostatTemperatureCommand message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelMQTTManagerCommand.ThermostatTemperatureCommand} ThermostatTemperatureCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThermostatTemperatureCommand.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelMQTTManagerCommand.ThermostatTemperatureCommand();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.thermostatId = reader.int32();
                        break;
                    }
                case 2: {
                        message.temperature = reader.float();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ThermostatTemperatureCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelMQTTManagerCommand.ThermostatTemperatureCommand} ThermostatTemperatureCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThermostatTemperatureCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ThermostatTemperatureCommand message.
         * @function verify
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ThermostatTemperatureCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.thermostatId != null && message.hasOwnProperty("thermostatId"))
                if (!$util.isInteger(message.thermostatId))
                    return "thermostatId: integer expected";
            if (message.temperature != null && message.hasOwnProperty("temperature"))
                if (typeof message.temperature !== "number")
                    return "temperature: number expected";
            return null;
        };

        /**
         * Creates a ThermostatTemperatureCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelMQTTManagerCommand.ThermostatTemperatureCommand} ThermostatTemperatureCommand
         */
        ThermostatTemperatureCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelMQTTManagerCommand.ThermostatTemperatureCommand)
                return object;
            let message = new $root.NSPanelMQTTManagerCommand.ThermostatTemperatureCommand();
            if (object.thermostatId != null)
                message.thermostatId = object.thermostatId | 0;
            if (object.temperature != null)
                message.temperature = Number(object.temperature);
            return message;
        };

        /**
         * Creates a plain object from a ThermostatTemperatureCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.ThermostatTemperatureCommand} message ThermostatTemperatureCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ThermostatTemperatureCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.thermostatId = 0;
                object.temperature = 0;
            }
            if (message.thermostatId != null && message.hasOwnProperty("thermostatId"))
                object.thermostatId = message.thermostatId;
            if (message.temperature != null && message.hasOwnProperty("temperature"))
                object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
            return object;
        };

        /**
         * Converts this ThermostatTemperatureCommand to JSON.
         * @function toJSON
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ThermostatTemperatureCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ThermostatTemperatureCommand
         * @function getTypeUrl
         * @memberof NSPanelMQTTManagerCommand.ThermostatTemperatureCommand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ThermostatTemperatureCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelMQTTManagerCommand.ThermostatTemperatureCommand";
        };

        return ThermostatTemperatureCommand;
    })();

    NSPanelMQTTManagerCommand.ThermostatCommand = (function() {

        /**
         * Properties of a ThermostatCommand.
         * @memberof NSPanelMQTTManagerCommand
         * @interface IThermostatCommand
         * @property {number|null} [thermostatId] ThermostatCommand thermostatId
         * @property {string|null} [option] ThermostatCommand option
         * @property {string|null} [newValue] ThermostatCommand newValue
         */

        /**
         * Constructs a new ThermostatCommand.
         * @memberof NSPanelMQTTManagerCommand
         * @classdesc Represents a ThermostatCommand.
         * @implements IThermostatCommand
         * @constructor
         * @param {NSPanelMQTTManagerCommand.IThermostatCommand=} [properties] Properties to set
         */
        function ThermostatCommand(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ThermostatCommand thermostatId.
         * @member {number} thermostatId
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @instance
         */
        ThermostatCommand.prototype.thermostatId = 0;

        /**
         * ThermostatCommand option.
         * @member {string} option
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @instance
         */
        ThermostatCommand.prototype.option = "";

        /**
         * ThermostatCommand newValue.
         * @member {string} newValue
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @instance
         */
        ThermostatCommand.prototype.newValue = "";

        /**
         * Creates a new ThermostatCommand instance using the specified properties.
         * @function create
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.IThermostatCommand=} [properties] Properties to set
         * @returns {NSPanelMQTTManagerCommand.ThermostatCommand} ThermostatCommand instance
         */
        ThermostatCommand.create = function create(properties) {
            return new ThermostatCommand(properties);
        };

        /**
         * Encodes the specified ThermostatCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.ThermostatCommand.verify|verify} messages.
         * @function encode
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.IThermostatCommand} message ThermostatCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThermostatCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.thermostatId != null && Object.hasOwnProperty.call(message, "thermostatId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.thermostatId);
            if (message.option != null && Object.hasOwnProperty.call(message, "option"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.option);
            if (message.newValue != null && Object.hasOwnProperty.call(message, "newValue"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.newValue);
            return writer;
        };

        /**
         * Encodes the specified ThermostatCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.ThermostatCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.IThermostatCommand} message ThermostatCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThermostatCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ThermostatCommand message from the specified reader or buffer.
         * @function decode
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NSPanelMQTTManagerCommand.ThermostatCommand} ThermostatCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThermostatCommand.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NSPanelMQTTManagerCommand.ThermostatCommand();
            while (reader.pos < end) {
                let tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.thermostatId = reader.int32();
                        break;
                    }
                case 2: {
                        message.option = reader.string();
                        break;
                    }
                case 3: {
                        message.newValue = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ThermostatCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NSPanelMQTTManagerCommand.ThermostatCommand} ThermostatCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThermostatCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ThermostatCommand message.
         * @function verify
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ThermostatCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.thermostatId != null && message.hasOwnProperty("thermostatId"))
                if (!$util.isInteger(message.thermostatId))
                    return "thermostatId: integer expected";
            if (message.option != null && message.hasOwnProperty("option"))
                if (!$util.isString(message.option))
                    return "option: string expected";
            if (message.newValue != null && message.hasOwnProperty("newValue"))
                if (!$util.isString(message.newValue))
                    return "newValue: string expected";
            return null;
        };

        /**
         * Creates a ThermostatCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NSPanelMQTTManagerCommand.ThermostatCommand} ThermostatCommand
         */
        ThermostatCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.NSPanelMQTTManagerCommand.ThermostatCommand)
                return object;
            let message = new $root.NSPanelMQTTManagerCommand.ThermostatCommand();
            if (object.thermostatId != null)
                message.thermostatId = object.thermostatId | 0;
            if (object.option != null)
                message.option = String(object.option);
            if (object.newValue != null)
                message.newValue = String(object.newValue);
            return message;
        };

        /**
         * Creates a plain object from a ThermostatCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @static
         * @param {NSPanelMQTTManagerCommand.ThermostatCommand} message ThermostatCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ThermostatCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.thermostatId = 0;
                object.option = "";
                object.newValue = "";
            }
            if (message.thermostatId != null && message.hasOwnProperty("thermostatId"))
                object.thermostatId = message.thermostatId;
            if (message.option != null && message.hasOwnProperty("option"))
                object.option = message.option;
            if (message.newValue != null && message.hasOwnProperty("newValue"))
                object.newValue = message.newValue;
            return object;
        };

        /**
         * Converts this ThermostatCommand to JSON.
         * @function toJSON
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ThermostatCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ThermostatCommand
         * @function getTypeUrl
         * @memberof NSPanelMQTTManagerCommand.ThermostatCommand
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ThermostatCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NSPanelMQTTManagerCommand.ThermostatCommand";
        };

        return ThermostatCommand;
    })();

    return NSPanelMQTTManagerCommand;
})();

export { $root as default };
