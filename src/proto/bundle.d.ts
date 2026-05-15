import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a NSPanelEntityState. */
export interface INSPanelEntityState {

    /** NSPanelEntityState light */
    light?: (NSPanelEntityState.ILight|null);

    /** NSPanelEntityState thermostat */
    thermostat?: (NSPanelEntityState.IThermostat|null);
}

/** Represents a NSPanelEntityState. */
export class NSPanelEntityState implements INSPanelEntityState {

    /**
     * Constructs a new NSPanelEntityState.
     * @param [properties] Properties to set
     */
    constructor(properties?: INSPanelEntityState);

    /** NSPanelEntityState light. */
    public light?: (NSPanelEntityState.ILight|null);

    /** NSPanelEntityState thermostat. */
    public thermostat?: (NSPanelEntityState.IThermostat|null);

    /** NSPanelEntityState entity. */
    public entity?: ("light"|"thermostat");

    /**
     * Creates a new NSPanelEntityState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NSPanelEntityState instance
     */
    public static create(properties?: INSPanelEntityState): NSPanelEntityState;

    /**
     * Encodes the specified NSPanelEntityState message. Does not implicitly {@link NSPanelEntityState.verify|verify} messages.
     * @param message NSPanelEntityState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INSPanelEntityState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NSPanelEntityState message, length delimited. Does not implicitly {@link NSPanelEntityState.verify|verify} messages.
     * @param message NSPanelEntityState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INSPanelEntityState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NSPanelEntityState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NSPanelEntityState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelEntityState;

    /**
     * Decodes a NSPanelEntityState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NSPanelEntityState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelEntityState;

    /**
     * Verifies a NSPanelEntityState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NSPanelEntityState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NSPanelEntityState
     */
    public static fromObject(object: { [k: string]: any }): NSPanelEntityState;

    /**
     * Creates a plain object from a NSPanelEntityState message. Also converts values to other types if specified.
     * @param message NSPanelEntityState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NSPanelEntityState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NSPanelEntityState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NSPanelEntityState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace NSPanelEntityState {

    /** Properties of a Light. */
    interface ILight {

        /** Light lightId */
        lightId?: (number|null);

        /** Light name */
        name?: (string|null);

        /** Light brightness */
        brightness?: (number|null);

        /** Light colorTemp */
        colorTemp?: (number|null);

        /** Light hue */
        hue?: (number|null);

        /** Light saturation */
        saturation?: (number|null);

        /** Light canColorTemp */
        canColorTemp?: (boolean|null);

        /** Light canColor */
        canColor?: (boolean|null);

        /** Light currentLightMode */
        currentLightMode?: (NSPanelEntityState.Light.LightMode|null);

        /** Light state */
        state?: (boolean|null);
    }

    /** Represents a Light. */
    class Light implements ILight {

        /**
         * Constructs a new Light.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelEntityState.ILight);

        /** Light lightId. */
        public lightId: number;

        /** Light name. */
        public name: string;

        /** Light brightness. */
        public brightness: number;

        /** Light colorTemp. */
        public colorTemp: number;

        /** Light hue. */
        public hue: number;

        /** Light saturation. */
        public saturation: number;

        /** Light canColorTemp. */
        public canColorTemp: boolean;

        /** Light canColor. */
        public canColor: boolean;

        /** Light currentLightMode. */
        public currentLightMode: NSPanelEntityState.Light.LightMode;

        /** Light state. */
        public state: boolean;

        /**
         * Creates a new Light instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Light instance
         */
        public static create(properties?: NSPanelEntityState.ILight): NSPanelEntityState.Light;

        /**
         * Encodes the specified Light message. Does not implicitly {@link NSPanelEntityState.Light.verify|verify} messages.
         * @param message Light message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelEntityState.ILight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Light message, length delimited. Does not implicitly {@link NSPanelEntityState.Light.verify|verify} messages.
         * @param message Light message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelEntityState.ILight, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Light message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Light
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelEntityState.Light;

        /**
         * Decodes a Light message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Light
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelEntityState.Light;

        /**
         * Verifies a Light message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Light message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Light
         */
        public static fromObject(object: { [k: string]: any }): NSPanelEntityState.Light;

        /**
         * Creates a plain object from a Light message. Also converts values to other types if specified.
         * @param message Light
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelEntityState.Light, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Light to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Light
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Light {

        /** LightMode enum. */
        enum LightMode {
            COLOR_TEMP = 0,
            RGB = 1
        }
    }

    /** Properties of a Thermostat. */
    interface IThermostat {

        /** Thermostat thermostatId */
        thermostatId?: (number|null);

        /** Thermostat name */
        name?: (string|null);

        /** Thermostat currentTemperature */
        currentTemperature?: (number|null);

        /** Thermostat hasCurrentTemperature */
        hasCurrentTemperature?: (boolean|null);

        /** Thermostat setTemperature */
        setTemperature?: (number|null);

        /** Thermostat stepSize */
        stepSize?: (number|null);

        /** Thermostat options */
        options?: (NSPanelEntityState.Thermostat.IThermostatOption[]|null);
    }

    /** Represents a Thermostat. */
    class Thermostat implements IThermostat {

        /**
         * Constructs a new Thermostat.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelEntityState.IThermostat);

        /** Thermostat thermostatId. */
        public thermostatId: number;

        /** Thermostat name. */
        public name: string;

        /** Thermostat currentTemperature. */
        public currentTemperature: number;

        /** Thermostat hasCurrentTemperature. */
        public hasCurrentTemperature: boolean;

        /** Thermostat setTemperature. */
        public setTemperature: number;

        /** Thermostat stepSize. */
        public stepSize: number;

        /** Thermostat options. */
        public options: NSPanelEntityState.Thermostat.IThermostatOption[];

        /**
         * Creates a new Thermostat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Thermostat instance
         */
        public static create(properties?: NSPanelEntityState.IThermostat): NSPanelEntityState.Thermostat;

        /**
         * Encodes the specified Thermostat message. Does not implicitly {@link NSPanelEntityState.Thermostat.verify|verify} messages.
         * @param message Thermostat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelEntityState.IThermostat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Thermostat message, length delimited. Does not implicitly {@link NSPanelEntityState.Thermostat.verify|verify} messages.
         * @param message Thermostat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelEntityState.IThermostat, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Thermostat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Thermostat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelEntityState.Thermostat;

        /**
         * Decodes a Thermostat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Thermostat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelEntityState.Thermostat;

        /**
         * Verifies a Thermostat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Thermostat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Thermostat
         */
        public static fromObject(object: { [k: string]: any }): NSPanelEntityState.Thermostat;

        /**
         * Creates a plain object from a Thermostat message. Also converts values to other types if specified.
         * @param message Thermostat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelEntityState.Thermostat, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Thermostat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Thermostat
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Thermostat {

        /** Properties of a ThermostatOption. */
        interface IThermostatOption {

            /** ThermostatOption name */
            name?: (string|null);

            /** ThermostatOption currentValue */
            currentValue?: (string|null);

            /** ThermostatOption currentIcon */
            currentIcon?: (string|null);

            /** ThermostatOption options */
            options?: (NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue[]|null);
        }

        /** Represents a ThermostatOption. */
        class ThermostatOption implements IThermostatOption {

            /**
             * Constructs a new ThermostatOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: NSPanelEntityState.Thermostat.IThermostatOption);

            /** ThermostatOption name. */
            public name: string;

            /** ThermostatOption currentValue. */
            public currentValue: string;

            /** ThermostatOption currentIcon. */
            public currentIcon: string;

            /** ThermostatOption options. */
            public options: NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue[];

            /**
             * Creates a new ThermostatOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ThermostatOption instance
             */
            public static create(properties?: NSPanelEntityState.Thermostat.IThermostatOption): NSPanelEntityState.Thermostat.ThermostatOption;

            /**
             * Encodes the specified ThermostatOption message. Does not implicitly {@link NSPanelEntityState.Thermostat.ThermostatOption.verify|verify} messages.
             * @param message ThermostatOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: NSPanelEntityState.Thermostat.IThermostatOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ThermostatOption message, length delimited. Does not implicitly {@link NSPanelEntityState.Thermostat.ThermostatOption.verify|verify} messages.
             * @param message ThermostatOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: NSPanelEntityState.Thermostat.IThermostatOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ThermostatOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ThermostatOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelEntityState.Thermostat.ThermostatOption;

            /**
             * Decodes a ThermostatOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ThermostatOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelEntityState.Thermostat.ThermostatOption;

            /**
             * Verifies a ThermostatOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ThermostatOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ThermostatOption
             */
            public static fromObject(object: { [k: string]: any }): NSPanelEntityState.Thermostat.ThermostatOption;

            /**
             * Creates a plain object from a ThermostatOption message. Also converts values to other types if specified.
             * @param message ThermostatOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: NSPanelEntityState.Thermostat.ThermostatOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ThermostatOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ThermostatOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ThermostatOption {

            /** Properties of a ThermostatOptionValue. */
            interface IThermostatOptionValue {

                /** ThermostatOptionValue value */
                value?: (string|null);

                /** ThermostatOptionValue icon */
                icon?: (string|null);
            }

            /** Represents a ThermostatOptionValue. */
            class ThermostatOptionValue implements IThermostatOptionValue {

                /**
                 * Constructs a new ThermostatOptionValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue);

                /** ThermostatOptionValue value. */
                public value: string;

                /** ThermostatOptionValue icon. */
                public icon: string;

                /**
                 * Creates a new ThermostatOptionValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ThermostatOptionValue instance
                 */
                public static create(properties?: NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue): NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue;

                /**
                 * Encodes the specified ThermostatOptionValue message. Does not implicitly {@link NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue.verify|verify} messages.
                 * @param message ThermostatOptionValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ThermostatOptionValue message, length delimited. Does not implicitly {@link NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue.verify|verify} messages.
                 * @param message ThermostatOptionValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: NSPanelEntityState.Thermostat.ThermostatOption.IThermostatOptionValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ThermostatOptionValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ThermostatOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue;

                /**
                 * Decodes a ThermostatOptionValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ThermostatOptionValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue;

                /**
                 * Verifies a ThermostatOptionValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ThermostatOptionValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ThermostatOptionValue
                 */
                public static fromObject(object: { [k: string]: any }): NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue;

                /**
                 * Creates a plain object from a ThermostatOptionValue message. Also converts values to other types if specified.
                 * @param message ThermostatOptionValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: NSPanelEntityState.Thermostat.ThermostatOption.ThermostatOptionValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ThermostatOptionValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ThermostatOptionValue
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }
    }
}

/** Properties of a NSPanelConfig. */
export interface INSPanelConfig {

    /** NSPanelConfig name */
    name?: (string|null);

    /** NSPanelConfig defaultRoom */
    defaultRoom?: (number|null);

    /** NSPanelConfig defaultPage */
    defaultPage?: (NSPanelConfig.NSPanelDefaultPage|null);

    /** NSPanelConfig screensaverActivationTimeout */
    screensaverActivationTimeout?: (number|null);

    /** NSPanelConfig minButtonPushTime */
    minButtonPushTime?: (number|null);

    /** NSPanelConfig buttonLongPressTime */
    buttonLongPressTime?: (number|null);

    /** NSPanelConfig specialModeTriggerTime */
    specialModeTriggerTime?: (number|null);

    /** NSPanelConfig specialModeReleaseTime */
    specialModeReleaseTime?: (number|null);

    /** NSPanelConfig screenDimLevel */
    screenDimLevel?: (number|null);

    /** NSPanelConfig screensaverDimLevel */
    screensaverDimLevel?: (number|null);

    /** NSPanelConfig screensaverMode */
    screensaverMode?: (NSPanelConfig.NSPanelScreensaverMode|null);

    /** NSPanelConfig showScreensaverInsideTemperature */
    showScreensaverInsideTemperature?: (boolean|null);

    /** NSPanelConfig showScreensaverOutsideTemperature */
    showScreensaverOutsideTemperature?: (boolean|null);

    /** NSPanelConfig clockUsStyle */
    clockUsStyle?: (boolean|null);

    /** NSPanelConfig useFahrenheit */
    useFahrenheit?: (boolean|null);

    /** NSPanelConfig isUsPanel */
    isUsPanel?: (boolean|null);

    /** NSPanelConfig roomInfos */
    roomInfos?: (NSPanelConfig.IRoomInfo[]|null);

    /** NSPanelConfig reverseRelays */
    reverseRelays?: (boolean|null);

    /** NSPanelConfig relay1DefaultMode */
    relay1DefaultMode?: (boolean|null);

    /** NSPanelConfig relay2DefaultMode */
    relay2DefaultMode?: (boolean|null);

    /** NSPanelConfig temperatureCalibration */
    temperatureCalibration?: (number|null);

    /** NSPanelConfig button1Mode */
    button1Mode?: (NSPanelConfig.NSPanelButtonMode|null);

    /** NSPanelConfig button2Mode */
    button2Mode?: (NSPanelConfig.NSPanelButtonMode|null);

    /** NSPanelConfig globalSceneEntityPageIds */
    globalSceneEntityPageIds?: (number[]|null);

    /** NSPanelConfig optimisticMode */
    optimisticMode?: (boolean|null);

    /** NSPanelConfig raiseLightLevelTo_100Above */
    raiseLightLevelTo_100Above?: (number|null);

    /** NSPanelConfig nspanelId */
    nspanelId?: (number|null);

    /** NSPanelConfig relay1RelayGroup */
    relay1RelayGroup?: (number[]|null);

    /** NSPanelConfig relay2RelayGroup */
    relay2RelayGroup?: (number[]|null);

    /** NSPanelConfig defaultLightBrightess */
    defaultLightBrightess?: (number|null);

    /** NSPanelConfig lockedToDefaultRoom */
    lockedToDefaultRoom?: (boolean|null);

    /** NSPanelConfig insideTemperatureSensorMqttTopic */
    insideTemperatureSensorMqttTopic?: (string|null);

    /** NSPanelConfig button1LowerTemperature */
    button1LowerTemperature?: (number|null);

    /** NSPanelConfig button1UpperTemperature */
    button1UpperTemperature?: (number|null);

    /** NSPanelConfig button2LowerTemperature */
    button2LowerTemperature?: (number|null);

    /** NSPanelConfig button2UpperTemperature */
    button2UpperTemperature?: (number|null);
}

/** Represents a NSPanelConfig. */
export class NSPanelConfig implements INSPanelConfig {

    /**
     * Constructs a new NSPanelConfig.
     * @param [properties] Properties to set
     */
    constructor(properties?: INSPanelConfig);

    /** NSPanelConfig name. */
    public name: string;

    /** NSPanelConfig defaultRoom. */
    public defaultRoom: number;

    /** NSPanelConfig defaultPage. */
    public defaultPage: NSPanelConfig.NSPanelDefaultPage;

    /** NSPanelConfig screensaverActivationTimeout. */
    public screensaverActivationTimeout: number;

    /** NSPanelConfig minButtonPushTime. */
    public minButtonPushTime: number;

    /** NSPanelConfig buttonLongPressTime. */
    public buttonLongPressTime: number;

    /** NSPanelConfig specialModeTriggerTime. */
    public specialModeTriggerTime: number;

    /** NSPanelConfig specialModeReleaseTime. */
    public specialModeReleaseTime: number;

    /** NSPanelConfig screenDimLevel. */
    public screenDimLevel: number;

    /** NSPanelConfig screensaverDimLevel. */
    public screensaverDimLevel: number;

    /** NSPanelConfig screensaverMode. */
    public screensaverMode: NSPanelConfig.NSPanelScreensaverMode;

    /** NSPanelConfig showScreensaverInsideTemperature. */
    public showScreensaverInsideTemperature: boolean;

    /** NSPanelConfig showScreensaverOutsideTemperature. */
    public showScreensaverOutsideTemperature: boolean;

    /** NSPanelConfig clockUsStyle. */
    public clockUsStyle: boolean;

    /** NSPanelConfig useFahrenheit. */
    public useFahrenheit: boolean;

    /** NSPanelConfig isUsPanel. */
    public isUsPanel: boolean;

    /** NSPanelConfig roomInfos. */
    public roomInfos: NSPanelConfig.IRoomInfo[];

    /** NSPanelConfig reverseRelays. */
    public reverseRelays: boolean;

    /** NSPanelConfig relay1DefaultMode. */
    public relay1DefaultMode: boolean;

    /** NSPanelConfig relay2DefaultMode. */
    public relay2DefaultMode: boolean;

    /** NSPanelConfig temperatureCalibration. */
    public temperatureCalibration: number;

    /** NSPanelConfig button1Mode. */
    public button1Mode: NSPanelConfig.NSPanelButtonMode;

    /** NSPanelConfig button2Mode. */
    public button2Mode: NSPanelConfig.NSPanelButtonMode;

    /** NSPanelConfig globalSceneEntityPageIds. */
    public globalSceneEntityPageIds: number[];

    /** NSPanelConfig optimisticMode. */
    public optimisticMode: boolean;

    /** NSPanelConfig raiseLightLevelTo_100Above. */
    public raiseLightLevelTo_100Above: number;

    /** NSPanelConfig nspanelId. */
    public nspanelId: number;

    /** NSPanelConfig relay1RelayGroup. */
    public relay1RelayGroup: number[];

    /** NSPanelConfig relay2RelayGroup. */
    public relay2RelayGroup: number[];

    /** NSPanelConfig defaultLightBrightess. */
    public defaultLightBrightess: number;

    /** NSPanelConfig lockedToDefaultRoom. */
    public lockedToDefaultRoom: boolean;

    /** NSPanelConfig insideTemperatureSensorMqttTopic. */
    public insideTemperatureSensorMqttTopic: string;

    /** NSPanelConfig button1LowerTemperature. */
    public button1LowerTemperature: number;

    /** NSPanelConfig button1UpperTemperature. */
    public button1UpperTemperature: number;

    /** NSPanelConfig button2LowerTemperature. */
    public button2LowerTemperature: number;

    /** NSPanelConfig button2UpperTemperature. */
    public button2UpperTemperature: number;

    /**
     * Creates a new NSPanelConfig instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NSPanelConfig instance
     */
    public static create(properties?: INSPanelConfig): NSPanelConfig;

    /**
     * Encodes the specified NSPanelConfig message. Does not implicitly {@link NSPanelConfig.verify|verify} messages.
     * @param message NSPanelConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INSPanelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NSPanelConfig message, length delimited. Does not implicitly {@link NSPanelConfig.verify|verify} messages.
     * @param message NSPanelConfig message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INSPanelConfig, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NSPanelConfig message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NSPanelConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelConfig;

    /**
     * Decodes a NSPanelConfig message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NSPanelConfig
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelConfig;

    /**
     * Verifies a NSPanelConfig message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NSPanelConfig message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NSPanelConfig
     */
    public static fromObject(object: { [k: string]: any }): NSPanelConfig;

    /**
     * Creates a plain object from a NSPanelConfig message. Also converts values to other types if specified.
     * @param message NSPanelConfig
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NSPanelConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NSPanelConfig to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NSPanelConfig
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace NSPanelConfig {

    /** NSPanelDefaultPage enum. */
    enum NSPanelDefaultPage {
        HOME = 0,
        SCENES = 1,
        ENTITIES = 2
    }

    /** NSPanelScreensaverMode enum. */
    enum NSPanelScreensaverMode {
        WEATHER_WITH_BACKGROUND = 0,
        WEATHER_WITHOUT_BACKGROUND = 1,
        DATETIME_WITH_BACKGROUND = 3,
        DATETIME_WITHOUT_BACKGROUND = 4,
        NO_SCREENSAVER = 5
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo roomId */
        roomId?: (number|null);

        /** RoomInfo entityPageIds */
        entityPageIds?: (number[]|null);

        /** RoomInfo scenePageIds */
        scenePageIds?: (number[]|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelConfig.IRoomInfo);

        /** RoomInfo roomId. */
        public roomId: number;

        /** RoomInfo entityPageIds. */
        public entityPageIds: number[];

        /** RoomInfo scenePageIds. */
        public scenePageIds: number[];

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: NSPanelConfig.IRoomInfo): NSPanelConfig.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link NSPanelConfig.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelConfig.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link NSPanelConfig.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelConfig.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelConfig.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelConfig.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): NSPanelConfig.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelConfig.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RoomInfo
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** NSPanelButtonMode enum. */
    enum NSPanelButtonMode {
        DIRECT = 0,
        FOLLOW = 1,
        NOTIFY_MANAGER = 2,
        THERMOSTAT_HEAT = 3,
        THERMOSTAT_COOL = 4
    }
}

/** NSPanelWarningLevel enum. */
export enum NSPanelWarningLevel {
    CRITICAL = 0,
    ERROR = 1,
    WARNING = 2,
    INFO = 3,
    DEBUG = 4,
    TRACE = 5
}

/** Represents a NSPanelWarning. */
export class NSPanelWarning implements INSPanelWarning {

    /**
     * Constructs a new NSPanelWarning.
     * @param [properties] Properties to set
     */
    constructor(properties?: INSPanelWarning);

    /** NSPanelWarning level. */
    public level: NSPanelWarningLevel;

    /** NSPanelWarning text. */
    public text: string;

    /**
     * Creates a new NSPanelWarning instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NSPanelWarning instance
     */
    public static create(properties?: INSPanelWarning): NSPanelWarning;

    /**
     * Encodes the specified NSPanelWarning message. Does not implicitly {@link NSPanelWarning.verify|verify} messages.
     * @param message NSPanelWarning message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INSPanelWarning, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NSPanelWarning message, length delimited. Does not implicitly {@link NSPanelWarning.verify|verify} messages.
     * @param message NSPanelWarning message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INSPanelWarning, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NSPanelWarning message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NSPanelWarning
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelWarning;

    /**
     * Decodes a NSPanelWarning message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NSPanelWarning
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelWarning;

    /**
     * Verifies a NSPanelWarning message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NSPanelWarning message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NSPanelWarning
     */
    public static fromObject(object: { [k: string]: any }): NSPanelWarning;

    /**
     * Creates a plain object from a NSPanelWarning message. Also converts values to other types if specified.
     * @param message NSPanelWarning
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NSPanelWarning, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NSPanelWarning to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NSPanelWarning
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NSPanelStatusReport. */
export class NSPanelStatusReport implements INSPanelStatusReport {

    /**
     * Constructs a new NSPanelStatusReport.
     * @param [properties] Properties to set
     */
    constructor(properties?: INSPanelStatusReport);

    /** NSPanelStatusReport nspanelState. */
    public nspanelState: NSPanelStatusReport.state;

    /** NSPanelStatusReport updateProgress. */
    public updateProgress: number;

    /** NSPanelStatusReport rssi. */
    public rssi: number;

    /** NSPanelStatusReport heapUsedPct. */
    public heapUsedPct: number;

    /** NSPanelStatusReport macAddress. */
    public macAddress: string;

    /** NSPanelStatusReport temperature. */
    public temperature: number;

    /** NSPanelStatusReport ipAddress. */
    public ipAddress: string;

    /** NSPanelStatusReport warnings. */
    public warnings: INSPanelWarning[];

    /** NSPanelStatusReport md5Firmware. */
    public md5Firmware: string;

    /** NSPanelStatusReport md5Littlefs. */
    public md5Littlefs: string;

    /** NSPanelStatusReport md5TftGui. */
    public md5TftGui: string;

    /** NSPanelStatusReport hasHumidity. */
    public hasHumidity: boolean;

    /** NSPanelStatusReport humidity. */
    public humidity: number;

    /** NSPanelStatusReport hasPressure. */
    public hasPressure: boolean;

    /** NSPanelStatusReport pressure. */
    public pressure: number;

    /**
     * Creates a new NSPanelStatusReport instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NSPanelStatusReport instance
     */
    public static create(properties?: INSPanelStatusReport): NSPanelStatusReport;

    /**
     * Encodes the specified NSPanelStatusReport message. Does not implicitly {@link NSPanelStatusReport.verify|verify} messages.
     * @param message NSPanelStatusReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INSPanelStatusReport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NSPanelStatusReport message, length delimited. Does not implicitly {@link NSPanelStatusReport.verify|verify} messages.
     * @param message NSPanelStatusReport message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INSPanelStatusReport, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NSPanelStatusReport message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NSPanelStatusReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelStatusReport;

    /**
     * Decodes a NSPanelStatusReport message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NSPanelStatusReport
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelStatusReport;

    /**
     * Verifies a NSPanelStatusReport message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NSPanelStatusReport message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NSPanelStatusReport
     */
    public static fromObject(object: { [k: string]: any }): NSPanelStatusReport;

    /**
     * Creates a plain object from a NSPanelStatusReport message. Also converts values to other types if specified.
     * @param message NSPanelStatusReport
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NSPanelStatusReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NSPanelStatusReport to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NSPanelStatusReport
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace NSPanelStatusReport {

    /** state enum. */
    enum state {
        ONLINE = 0,
        OFFLINE = 1,
        UPDATING_TFT = 2,
        UPDATING_FIRMWARE = 3,
        UPDATING_LITTLEFS = 4
    }
}

/** Represents a NSPanelRoomEntitiesPage. */
export class NSPanelRoomEntitiesPage implements INSPanelRoomEntitiesPage {

    /**
     * Constructs a new NSPanelRoomEntitiesPage.
     * @param [properties] Properties to set
     */
    constructor(properties?: INSPanelRoomEntitiesPage);

    /** NSPanelRoomEntitiesPage id. */
    public id: number;

    /** NSPanelRoomEntitiesPage pageType. */
    public pageType: number;

    /** NSPanelRoomEntitiesPage headerText. */
    public headerText: string;

    /** NSPanelRoomEntitiesPage entities. */
    public entities: NSPanelRoomEntitiesPage.IEntitySlot[];

    /**
     * Creates a new NSPanelRoomEntitiesPage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NSPanelRoomEntitiesPage instance
     */
    public static create(properties?: INSPanelRoomEntitiesPage): NSPanelRoomEntitiesPage;

    /**
     * Encodes the specified NSPanelRoomEntitiesPage message. Does not implicitly {@link NSPanelRoomEntitiesPage.verify|verify} messages.
     * @param message NSPanelRoomEntitiesPage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INSPanelRoomEntitiesPage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NSPanelRoomEntitiesPage message, length delimited. Does not implicitly {@link NSPanelRoomEntitiesPage.verify|verify} messages.
     * @param message NSPanelRoomEntitiesPage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INSPanelRoomEntitiesPage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NSPanelRoomEntitiesPage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NSPanelRoomEntitiesPage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelRoomEntitiesPage;

    /**
     * Decodes a NSPanelRoomEntitiesPage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NSPanelRoomEntitiesPage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelRoomEntitiesPage;

    /**
     * Verifies a NSPanelRoomEntitiesPage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NSPanelRoomEntitiesPage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NSPanelRoomEntitiesPage
     */
    public static fromObject(object: { [k: string]: any }): NSPanelRoomEntitiesPage;

    /**
     * Creates a plain object from a NSPanelRoomEntitiesPage message. Also converts values to other types if specified.
     * @param message NSPanelRoomEntitiesPage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NSPanelRoomEntitiesPage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NSPanelRoomEntitiesPage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NSPanelRoomEntitiesPage
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace NSPanelRoomEntitiesPage {

    /** Properties of an EntitySlot. */
    interface IEntitySlot {

        /** EntitySlot roomViewPosition */
        roomViewPosition?: (number|null);

        /** EntitySlot name */
        name?: (string|null);

        /** EntitySlot icon */
        icon?: (string|null);

        /** EntitySlot pco */
        pco?: (number|null);

        /** EntitySlot pco2 */
        pco2?: (number|null);

        /** EntitySlot canSaveScene */
        canSaveScene?: (boolean|null);

        /** EntitySlot mqttStateTopic */
        mqttStateTopic?: (string|null);
    }

    /** Represents an EntitySlot. */
    class EntitySlot implements IEntitySlot {

        /**
         * Constructs a new EntitySlot.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelRoomEntitiesPage.IEntitySlot);

        /** EntitySlot roomViewPosition. */
        public roomViewPosition: number;

        /** EntitySlot name. */
        public name: string;

        /** EntitySlot icon. */
        public icon: string;

        /** EntitySlot pco. */
        public pco: number;

        /** EntitySlot pco2. */
        public pco2: number;

        /** EntitySlot canSaveScene. */
        public canSaveScene: boolean;

        /** EntitySlot mqttStateTopic. */
        public mqttStateTopic: string;

        /**
         * Creates a new EntitySlot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntitySlot instance
         */
        public static create(properties?: NSPanelRoomEntitiesPage.IEntitySlot): NSPanelRoomEntitiesPage.EntitySlot;

        /**
         * Encodes the specified EntitySlot message. Does not implicitly {@link NSPanelRoomEntitiesPage.EntitySlot.verify|verify} messages.
         * @param message EntitySlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelRoomEntitiesPage.IEntitySlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntitySlot message, length delimited. Does not implicitly {@link NSPanelRoomEntitiesPage.EntitySlot.verify|verify} messages.
         * @param message EntitySlot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelRoomEntitiesPage.IEntitySlot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntitySlot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntitySlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelRoomEntitiesPage.EntitySlot;

        /**
         * Decodes an EntitySlot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntitySlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelRoomEntitiesPage.EntitySlot;

        /**
         * Verifies an EntitySlot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntitySlot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntitySlot
         */
        public static fromObject(object: { [k: string]: any }): NSPanelRoomEntitiesPage.EntitySlot;

        /**
         * Creates a plain object from an EntitySlot message. Also converts values to other types if specified.
         * @param message EntitySlot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelRoomEntitiesPage.EntitySlot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntitySlot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for EntitySlot
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a NSPanelRoomStatus. */
export class NSPanelRoomStatus implements INSPanelRoomStatus {

    /**
     * Constructs a new NSPanelRoomStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: INSPanelRoomStatus);

    /** NSPanelRoomStatus id. */
    public id: number;

    /** NSPanelRoomStatus name. */
    public name: string;

    /** NSPanelRoomStatus averageDimLevel. */
    public averageDimLevel: number;

    /** NSPanelRoomStatus ceilingLightsDimLevel. */
    public ceilingLightsDimLevel: number;

    /** NSPanelRoomStatus tableLightsDimLevel. */
    public tableLightsDimLevel: number;

    /** NSPanelRoomStatus averageColorTemperature. */
    public averageColorTemperature: number;

    /** NSPanelRoomStatus ceilingLightsColorTemperatureValue. */
    public ceilingLightsColorTemperatureValue: number;

    /** NSPanelRoomStatus tableLightsColorTemperatureValue. */
    public tableLightsColorTemperatureValue: number;

    /** NSPanelRoomStatus numCeilingLights. */
    public numCeilingLights: number;

    /** NSPanelRoomStatus numTableLights. */
    public numTableLights: number;

    /** NSPanelRoomStatus numCeilingLightsOn. */
    public numCeilingLightsOn: number;

    /** NSPanelRoomStatus numTableLightsOn. */
    public numTableLightsOn: number;

    /** NSPanelRoomStatus entityPageIds. */
    public entityPageIds: number[];

    /**
     * Creates a new NSPanelRoomStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NSPanelRoomStatus instance
     */
    public static create(properties?: INSPanelRoomStatus): NSPanelRoomStatus;

    /**
     * Encodes the specified NSPanelRoomStatus message. Does not implicitly {@link NSPanelRoomStatus.verify|verify} messages.
     * @param message NSPanelRoomStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INSPanelRoomStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NSPanelRoomStatus message, length delimited. Does not implicitly {@link NSPanelRoomStatus.verify|verify} messages.
     * @param message NSPanelRoomStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INSPanelRoomStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NSPanelRoomStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NSPanelRoomStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelRoomStatus;

    /**
     * Decodes a NSPanelRoomStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NSPanelRoomStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelRoomStatus;

    /**
     * Verifies a NSPanelRoomStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NSPanelRoomStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NSPanelRoomStatus
     */
    public static fromObject(object: { [k: string]: any }): NSPanelRoomStatus;

    /**
     * Creates a plain object from a NSPanelRoomStatus message. Also converts values to other types if specified.
     * @param message NSPanelRoomStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NSPanelRoomStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NSPanelRoomStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NSPanelRoomStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NSPanelWeatherUpdate. */
export class NSPanelWeatherUpdate implements INSPanelWeatherUpdate {

    /**
     * Constructs a new NSPanelWeatherUpdate.
     * @param [properties] Properties to set
     */
    constructor(properties?: INSPanelWeatherUpdate);

    /** NSPanelWeatherUpdate forecastItems. */
    public forecastItems: NSPanelWeatherUpdate.IForecastItem[];

    /** NSPanelWeatherUpdate currentWeatherIcon. */
    public currentWeatherIcon: string;

    /** NSPanelWeatherUpdate currentTemperatureString. */
    public currentTemperatureString: string;

    /** NSPanelWeatherUpdate currentMaxminTemperature. */
    public currentMaxminTemperature: string;

    /** NSPanelWeatherUpdate currentWindString. */
    public currentWindString: string;

    /** NSPanelWeatherUpdate sunriseString. */
    public sunriseString: string;

    /** NSPanelWeatherUpdate sunsetString. */
    public sunsetString: string;

    /** NSPanelWeatherUpdate currentPrecipitationString. */
    public currentPrecipitationString: string;

    /**
     * Creates a new NSPanelWeatherUpdate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NSPanelWeatherUpdate instance
     */
    public static create(properties?: INSPanelWeatherUpdate): NSPanelWeatherUpdate;

    /**
     * Encodes the specified NSPanelWeatherUpdate message. Does not implicitly {@link NSPanelWeatherUpdate.verify|verify} messages.
     * @param message NSPanelWeatherUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INSPanelWeatherUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NSPanelWeatherUpdate message, length delimited. Does not implicitly {@link NSPanelWeatherUpdate.verify|verify} messages.
     * @param message NSPanelWeatherUpdate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INSPanelWeatherUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NSPanelWeatherUpdate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NSPanelWeatherUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelWeatherUpdate;

    /**
     * Decodes a NSPanelWeatherUpdate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NSPanelWeatherUpdate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelWeatherUpdate;

    /**
     * Verifies a NSPanelWeatherUpdate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NSPanelWeatherUpdate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NSPanelWeatherUpdate
     */
    public static fromObject(object: { [k: string]: any }): NSPanelWeatherUpdate;

    /**
     * Creates a plain object from a NSPanelWeatherUpdate message. Also converts values to other types if specified.
     * @param message NSPanelWeatherUpdate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NSPanelWeatherUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NSPanelWeatherUpdate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NSPanelWeatherUpdate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace NSPanelWeatherUpdate {

    /** Properties of a ForecastItem. */
    interface IForecastItem {

        /** ForecastItem weatherIcon */
        weatherIcon?: (string|null);

        /** ForecastItem precipitationString */
        precipitationString?: (string|null);

        /** ForecastItem temperatureMaxminString */
        temperatureMaxminString?: (string|null);

        /** ForecastItem windString */
        windString?: (string|null);

        /** ForecastItem displayString */
        displayString?: (string|null);
    }

    /** Represents a ForecastItem. */
    class ForecastItem implements IForecastItem {

        /**
         * Constructs a new ForecastItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelWeatherUpdate.IForecastItem);

        /** ForecastItem weatherIcon. */
        public weatherIcon: string;

        /** ForecastItem precipitationString. */
        public precipitationString: string;

        /** ForecastItem temperatureMaxminString. */
        public temperatureMaxminString: string;

        /** ForecastItem windString. */
        public windString: string;

        /** ForecastItem displayString. */
        public displayString: string;

        /**
         * Creates a new ForecastItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForecastItem instance
         */
        public static create(properties?: NSPanelWeatherUpdate.IForecastItem): NSPanelWeatherUpdate.ForecastItem;

        /**
         * Encodes the specified ForecastItem message. Does not implicitly {@link NSPanelWeatherUpdate.ForecastItem.verify|verify} messages.
         * @param message ForecastItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelWeatherUpdate.IForecastItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForecastItem message, length delimited. Does not implicitly {@link NSPanelWeatherUpdate.ForecastItem.verify|verify} messages.
         * @param message ForecastItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelWeatherUpdate.IForecastItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForecastItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForecastItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelWeatherUpdate.ForecastItem;

        /**
         * Decodes a ForecastItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForecastItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelWeatherUpdate.ForecastItem;

        /**
         * Verifies a ForecastItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForecastItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForecastItem
         */
        public static fromObject(object: { [k: string]: any }): NSPanelWeatherUpdate.ForecastItem;

        /**
         * Creates a plain object from a ForecastItem message. Also converts values to other types if specified.
         * @param message ForecastItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelWeatherUpdate.ForecastItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForecastItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ForecastItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a NSPanelMQTTManagerCommand. */
export class NSPanelMQTTManagerCommand implements INSPanelMQTTManagerCommand {

    /**
     * Constructs a new NSPanelMQTTManagerCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: INSPanelMQTTManagerCommand);

    /** NSPanelMQTTManagerCommand firstPageTurnOn. */
    public firstPageTurnOn?: (NSPanelMQTTManagerCommand.IFirstPageTurnLightOn|null);

    /** NSPanelMQTTManagerCommand firstPageTurnOff. */
    public firstPageTurnOff?: (NSPanelMQTTManagerCommand.IFirstPageTurnLightOff|null);

    /** NSPanelMQTTManagerCommand lightCommand. */
    public lightCommand?: (NSPanelMQTTManagerCommand.ILightCommand|null);

    /** NSPanelMQTTManagerCommand toggleEntityFromEntitiesPage. */
    public toggleEntityFromEntitiesPage?: (NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage|null);

    /** NSPanelMQTTManagerCommand saveSceneCommand. */
    public saveSceneCommand?: (NSPanelMQTTManagerCommand.ISaveSceneCommand|null);

    /** NSPanelMQTTManagerCommand buttonPressed. */
    public buttonPressed?: (NSPanelMQTTManagerCommand.IButtonPressed|null);

    /** NSPanelMQTTManagerCommand thermostatTemperatureCommand. */
    public thermostatTemperatureCommand?: (NSPanelMQTTManagerCommand.IThermostatTemperatureCommand|null);

    /** NSPanelMQTTManagerCommand thermostatCommand. */
    public thermostatCommand?: (NSPanelMQTTManagerCommand.IThermostatCommand|null);

    /** NSPanelMQTTManagerCommand nspanelId. */
    public nspanelId: number;

    /** NSPanelMQTTManagerCommand CommandData. */
    public CommandData?: ("firstPageTurnOn"|"firstPageTurnOff"|"lightCommand"|"toggleEntityFromEntitiesPage"|"saveSceneCommand"|"buttonPressed"|"thermostatTemperatureCommand"|"thermostatCommand");

    /**
     * Creates a new NSPanelMQTTManagerCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NSPanelMQTTManagerCommand instance
     */
    public static create(properties?: INSPanelMQTTManagerCommand): NSPanelMQTTManagerCommand;

    /**
     * Encodes the specified NSPanelMQTTManagerCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.verify|verify} messages.
     * @param message NSPanelMQTTManagerCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INSPanelMQTTManagerCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NSPanelMQTTManagerCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.verify|verify} messages.
     * @param message NSPanelMQTTManagerCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INSPanelMQTTManagerCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NSPanelMQTTManagerCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NSPanelMQTTManagerCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelMQTTManagerCommand;

    /**
     * Decodes a NSPanelMQTTManagerCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NSPanelMQTTManagerCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelMQTTManagerCommand;

    /**
     * Verifies a NSPanelMQTTManagerCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NSPanelMQTTManagerCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NSPanelMQTTManagerCommand
     */
    public static fromObject(object: { [k: string]: any }): NSPanelMQTTManagerCommand;

    /**
     * Creates a plain object from a NSPanelMQTTManagerCommand message. Also converts values to other types if specified.
     * @param message NSPanelMQTTManagerCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NSPanelMQTTManagerCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NSPanelMQTTManagerCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NSPanelMQTTManagerCommand
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace NSPanelMQTTManagerCommand {

    /** AffectLightsOptions enum. */
    enum AffectLightsOptions {
        ALL = 0,
        TABLE_LIGHTS = 1,
        CEILING_LIGHTS = 2
    }

    /** Properties of a FirstPageTurnLightOn. */
    interface IFirstPageTurnLightOn {

        /** FirstPageTurnLightOn affectLights */
        affectLights?: (NSPanelMQTTManagerCommand.AffectLightsOptions|null);

        /** FirstPageTurnLightOn brightnessSliderValue */
        brightnessSliderValue?: (number|null);

        /** FirstPageTurnLightOn kelvinSliderValue */
        kelvinSliderValue?: (number|null);

        /** FirstPageTurnLightOn selectedRoom */
        selectedRoom?: (number|null);

        /** FirstPageTurnLightOn global */
        global?: (boolean|null);

        /** FirstPageTurnLightOn hasBrightnessValue */
        hasBrightnessValue?: (boolean|null);

        /** FirstPageTurnLightOn hasKelvinValue */
        hasKelvinValue?: (boolean|null);
    }

    /** Represents a FirstPageTurnLightOn. */
    class FirstPageTurnLightOn implements IFirstPageTurnLightOn {

        /**
         * Constructs a new FirstPageTurnLightOn.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelMQTTManagerCommand.IFirstPageTurnLightOn);

        /** FirstPageTurnLightOn affectLights. */
        public affectLights: NSPanelMQTTManagerCommand.AffectLightsOptions;

        /** FirstPageTurnLightOn brightnessSliderValue. */
        public brightnessSliderValue: number;

        /** FirstPageTurnLightOn kelvinSliderValue. */
        public kelvinSliderValue: number;

        /** FirstPageTurnLightOn selectedRoom. */
        public selectedRoom: number;

        /** FirstPageTurnLightOn global. */
        public global: boolean;

        /** FirstPageTurnLightOn hasBrightnessValue. */
        public hasBrightnessValue: boolean;

        /** FirstPageTurnLightOn hasKelvinValue. */
        public hasKelvinValue: boolean;

        /**
         * Creates a new FirstPageTurnLightOn instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FirstPageTurnLightOn instance
         */
        public static create(properties?: NSPanelMQTTManagerCommand.IFirstPageTurnLightOn): NSPanelMQTTManagerCommand.FirstPageTurnLightOn;

        /**
         * Encodes the specified FirstPageTurnLightOn message. Does not implicitly {@link NSPanelMQTTManagerCommand.FirstPageTurnLightOn.verify|verify} messages.
         * @param message FirstPageTurnLightOn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelMQTTManagerCommand.IFirstPageTurnLightOn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FirstPageTurnLightOn message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.FirstPageTurnLightOn.verify|verify} messages.
         * @param message FirstPageTurnLightOn message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelMQTTManagerCommand.IFirstPageTurnLightOn, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FirstPageTurnLightOn message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FirstPageTurnLightOn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelMQTTManagerCommand.FirstPageTurnLightOn;

        /**
         * Decodes a FirstPageTurnLightOn message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FirstPageTurnLightOn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelMQTTManagerCommand.FirstPageTurnLightOn;

        /**
         * Verifies a FirstPageTurnLightOn message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FirstPageTurnLightOn message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FirstPageTurnLightOn
         */
        public static fromObject(object: { [k: string]: any }): NSPanelMQTTManagerCommand.FirstPageTurnLightOn;

        /**
         * Creates a plain object from a FirstPageTurnLightOn message. Also converts values to other types if specified.
         * @param message FirstPageTurnLightOn
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelMQTTManagerCommand.FirstPageTurnLightOn, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FirstPageTurnLightOn to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FirstPageTurnLightOn
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a FirstPageTurnLightOff. */
    interface IFirstPageTurnLightOff {

        /** FirstPageTurnLightOff affectLights */
        affectLights?: (NSPanelMQTTManagerCommand.AffectLightsOptions|null);

        /** FirstPageTurnLightOff global */
        global?: (boolean|null);
    }

    /** Represents a FirstPageTurnLightOff. */
    class FirstPageTurnLightOff implements IFirstPageTurnLightOff {

        /**
         * Constructs a new FirstPageTurnLightOff.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelMQTTManagerCommand.IFirstPageTurnLightOff);

        /** FirstPageTurnLightOff affectLights. */
        public affectLights: NSPanelMQTTManagerCommand.AffectLightsOptions;

        /** FirstPageTurnLightOff global. */
        public global: boolean;

        /**
         * Creates a new FirstPageTurnLightOff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FirstPageTurnLightOff instance
         */
        public static create(properties?: NSPanelMQTTManagerCommand.IFirstPageTurnLightOff): NSPanelMQTTManagerCommand.FirstPageTurnLightOff;

        /**
         * Encodes the specified FirstPageTurnLightOff message. Does not implicitly {@link NSPanelMQTTManagerCommand.FirstPageTurnLightOff.verify|verify} messages.
         * @param message FirstPageTurnLightOff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelMQTTManagerCommand.IFirstPageTurnLightOff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FirstPageTurnLightOff message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.FirstPageTurnLightOff.verify|verify} messages.
         * @param message FirstPageTurnLightOff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelMQTTManagerCommand.IFirstPageTurnLightOff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FirstPageTurnLightOff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FirstPageTurnLightOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelMQTTManagerCommand.FirstPageTurnLightOff;

        /**
         * Decodes a FirstPageTurnLightOff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FirstPageTurnLightOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelMQTTManagerCommand.FirstPageTurnLightOff;

        /**
         * Verifies a FirstPageTurnLightOff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FirstPageTurnLightOff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FirstPageTurnLightOff
         */
        public static fromObject(object: { [k: string]: any }): NSPanelMQTTManagerCommand.FirstPageTurnLightOff;

        /**
         * Creates a plain object from a FirstPageTurnLightOff message. Also converts values to other types if specified.
         * @param message FirstPageTurnLightOff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelMQTTManagerCommand.FirstPageTurnLightOff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FirstPageTurnLightOff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for FirstPageTurnLightOff
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LightCommand. */
    interface ILightCommand {

        /** LightCommand lightIds */
        lightIds?: (number[]|null);

        /** LightCommand hasBrightness */
        hasBrightness?: (boolean|null);

        /** LightCommand brightness */
        brightness?: (number|null);

        /** LightCommand hasColorTemperature */
        hasColorTemperature?: (boolean|null);

        /** LightCommand colorTemperature */
        colorTemperature?: (number|null);

        /** LightCommand hasHue */
        hasHue?: (boolean|null);

        /** LightCommand hue */
        hue?: (number|null);

        /** LightCommand hasSaturation */
        hasSaturation?: (boolean|null);

        /** LightCommand saturation */
        saturation?: (number|null);
    }

    /** Represents a LightCommand. */
    class LightCommand implements ILightCommand {

        /**
         * Constructs a new LightCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelMQTTManagerCommand.ILightCommand);

        /** LightCommand lightIds. */
        public lightIds: number[];

        /** LightCommand hasBrightness. */
        public hasBrightness: boolean;

        /** LightCommand brightness. */
        public brightness: number;

        /** LightCommand hasColorTemperature. */
        public hasColorTemperature: boolean;

        /** LightCommand colorTemperature. */
        public colorTemperature: number;

        /** LightCommand hasHue. */
        public hasHue: boolean;

        /** LightCommand hue. */
        public hue: number;

        /** LightCommand hasSaturation. */
        public hasSaturation: boolean;

        /** LightCommand saturation. */
        public saturation: number;

        /**
         * Creates a new LightCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LightCommand instance
         */
        public static create(properties?: NSPanelMQTTManagerCommand.ILightCommand): NSPanelMQTTManagerCommand.LightCommand;

        /**
         * Encodes the specified LightCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.LightCommand.verify|verify} messages.
         * @param message LightCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelMQTTManagerCommand.ILightCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LightCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.LightCommand.verify|verify} messages.
         * @param message LightCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelMQTTManagerCommand.ILightCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LightCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LightCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelMQTTManagerCommand.LightCommand;

        /**
         * Decodes a LightCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LightCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelMQTTManagerCommand.LightCommand;

        /**
         * Verifies a LightCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LightCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LightCommand
         */
        public static fromObject(object: { [k: string]: any }): NSPanelMQTTManagerCommand.LightCommand;

        /**
         * Creates a plain object from a LightCommand message. Also converts values to other types if specified.
         * @param message LightCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelMQTTManagerCommand.LightCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LightCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LightCommand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ToggleEntityFromEntitiesPage. */
    interface IToggleEntityFromEntitiesPage {

        /** ToggleEntityFromEntitiesPage entityPageId */
        entityPageId?: (number|null);

        /** ToggleEntityFromEntitiesPage entitySlot */
        entitySlot?: (number|null);
    }

    /** Represents a ToggleEntityFromEntitiesPage. */
    class ToggleEntityFromEntitiesPage implements IToggleEntityFromEntitiesPage {

        /**
         * Constructs a new ToggleEntityFromEntitiesPage.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage);

        /** ToggleEntityFromEntitiesPage entityPageId. */
        public entityPageId: number;

        /** ToggleEntityFromEntitiesPage entitySlot. */
        public entitySlot: number;

        /**
         * Creates a new ToggleEntityFromEntitiesPage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ToggleEntityFromEntitiesPage instance
         */
        public static create(properties?: NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage): NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage;

        /**
         * Encodes the specified ToggleEntityFromEntitiesPage message. Does not implicitly {@link NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage.verify|verify} messages.
         * @param message ToggleEntityFromEntitiesPage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ToggleEntityFromEntitiesPage message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage.verify|verify} messages.
         * @param message ToggleEntityFromEntitiesPage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelMQTTManagerCommand.IToggleEntityFromEntitiesPage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ToggleEntityFromEntitiesPage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ToggleEntityFromEntitiesPage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage;

        /**
         * Decodes a ToggleEntityFromEntitiesPage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ToggleEntityFromEntitiesPage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage;

        /**
         * Verifies a ToggleEntityFromEntitiesPage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ToggleEntityFromEntitiesPage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ToggleEntityFromEntitiesPage
         */
        public static fromObject(object: { [k: string]: any }): NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage;

        /**
         * Creates a plain object from a ToggleEntityFromEntitiesPage message. Also converts values to other types if specified.
         * @param message ToggleEntityFromEntitiesPage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelMQTTManagerCommand.ToggleEntityFromEntitiesPage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ToggleEntityFromEntitiesPage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ToggleEntityFromEntitiesPage
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaveSceneCommand. */
    interface ISaveSceneCommand {

        /** SaveSceneCommand entityPageId */
        entityPageId?: (number|null);

        /** SaveSceneCommand entitySlot */
        entitySlot?: (number|null);
    }

    /** Represents a SaveSceneCommand. */
    class SaveSceneCommand implements ISaveSceneCommand {

        /**
         * Constructs a new SaveSceneCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelMQTTManagerCommand.ISaveSceneCommand);

        /** SaveSceneCommand entityPageId. */
        public entityPageId: number;

        /** SaveSceneCommand entitySlot. */
        public entitySlot: number;

        /**
         * Creates a new SaveSceneCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveSceneCommand instance
         */
        public static create(properties?: NSPanelMQTTManagerCommand.ISaveSceneCommand): NSPanelMQTTManagerCommand.SaveSceneCommand;

        /**
         * Encodes the specified SaveSceneCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.SaveSceneCommand.verify|verify} messages.
         * @param message SaveSceneCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelMQTTManagerCommand.ISaveSceneCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaveSceneCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.SaveSceneCommand.verify|verify} messages.
         * @param message SaveSceneCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelMQTTManagerCommand.ISaveSceneCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaveSceneCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveSceneCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelMQTTManagerCommand.SaveSceneCommand;

        /**
         * Decodes a SaveSceneCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveSceneCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelMQTTManagerCommand.SaveSceneCommand;

        /**
         * Verifies a SaveSceneCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveSceneCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveSceneCommand
         */
        public static fromObject(object: { [k: string]: any }): NSPanelMQTTManagerCommand.SaveSceneCommand;

        /**
         * Creates a plain object from a SaveSceneCommand message. Also converts values to other types if specified.
         * @param message SaveSceneCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelMQTTManagerCommand.SaveSceneCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveSceneCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaveSceneCommand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ButtonPressed. */
    interface IButtonPressed {

        /** ButtonPressed buttonId */
        buttonId?: (number|null);
    }

    /** Represents a ButtonPressed. */
    class ButtonPressed implements IButtonPressed {

        /**
         * Constructs a new ButtonPressed.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelMQTTManagerCommand.IButtonPressed);

        /** ButtonPressed buttonId. */
        public buttonId: number;

        /**
         * Creates a new ButtonPressed instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ButtonPressed instance
         */
        public static create(properties?: NSPanelMQTTManagerCommand.IButtonPressed): NSPanelMQTTManagerCommand.ButtonPressed;

        /**
         * Encodes the specified ButtonPressed message. Does not implicitly {@link NSPanelMQTTManagerCommand.ButtonPressed.verify|verify} messages.
         * @param message ButtonPressed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelMQTTManagerCommand.IButtonPressed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ButtonPressed message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.ButtonPressed.verify|verify} messages.
         * @param message ButtonPressed message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelMQTTManagerCommand.IButtonPressed, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ButtonPressed message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ButtonPressed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelMQTTManagerCommand.ButtonPressed;

        /**
         * Decodes a ButtonPressed message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ButtonPressed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelMQTTManagerCommand.ButtonPressed;

        /**
         * Verifies a ButtonPressed message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ButtonPressed message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ButtonPressed
         */
        public static fromObject(object: { [k: string]: any }): NSPanelMQTTManagerCommand.ButtonPressed;

        /**
         * Creates a plain object from a ButtonPressed message. Also converts values to other types if specified.
         * @param message ButtonPressed
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelMQTTManagerCommand.ButtonPressed, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ButtonPressed to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ButtonPressed
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ThermostatTemperatureCommand. */
    interface IThermostatTemperatureCommand {

        /** ThermostatTemperatureCommand thermostatId */
        thermostatId?: (number|null);

        /** ThermostatTemperatureCommand temperature */
        temperature?: (number|null);
    }

    /** Represents a ThermostatTemperatureCommand. */
    class ThermostatTemperatureCommand implements IThermostatTemperatureCommand {

        /**
         * Constructs a new ThermostatTemperatureCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelMQTTManagerCommand.IThermostatTemperatureCommand);

        /** ThermostatTemperatureCommand thermostatId. */
        public thermostatId: number;

        /** ThermostatTemperatureCommand temperature. */
        public temperature: number;

        /**
         * Creates a new ThermostatTemperatureCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThermostatTemperatureCommand instance
         */
        public static create(properties?: NSPanelMQTTManagerCommand.IThermostatTemperatureCommand): NSPanelMQTTManagerCommand.ThermostatTemperatureCommand;

        /**
         * Encodes the specified ThermostatTemperatureCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.ThermostatTemperatureCommand.verify|verify} messages.
         * @param message ThermostatTemperatureCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelMQTTManagerCommand.IThermostatTemperatureCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThermostatTemperatureCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.ThermostatTemperatureCommand.verify|verify} messages.
         * @param message ThermostatTemperatureCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelMQTTManagerCommand.IThermostatTemperatureCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThermostatTemperatureCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThermostatTemperatureCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelMQTTManagerCommand.ThermostatTemperatureCommand;

        /**
         * Decodes a ThermostatTemperatureCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThermostatTemperatureCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelMQTTManagerCommand.ThermostatTemperatureCommand;

        /**
         * Verifies a ThermostatTemperatureCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ThermostatTemperatureCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ThermostatTemperatureCommand
         */
        public static fromObject(object: { [k: string]: any }): NSPanelMQTTManagerCommand.ThermostatTemperatureCommand;

        /**
         * Creates a plain object from a ThermostatTemperatureCommand message. Also converts values to other types if specified.
         * @param message ThermostatTemperatureCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelMQTTManagerCommand.ThermostatTemperatureCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ThermostatTemperatureCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ThermostatTemperatureCommand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ThermostatCommand. */
    interface IThermostatCommand {

        /** ThermostatCommand thermostatId */
        thermostatId?: (number|null);

        /** ThermostatCommand option */
        option?: (string|null);

        /** ThermostatCommand newValue */
        newValue?: (string|null);
    }

    /** Represents a ThermostatCommand. */
    class ThermostatCommand implements IThermostatCommand {

        /**
         * Constructs a new ThermostatCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: NSPanelMQTTManagerCommand.IThermostatCommand);

        /** ThermostatCommand thermostatId. */
        public thermostatId: number;

        /** ThermostatCommand option. */
        public option: string;

        /** ThermostatCommand newValue. */
        public newValue: string;

        /**
         * Creates a new ThermostatCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThermostatCommand instance
         */
        public static create(properties?: NSPanelMQTTManagerCommand.IThermostatCommand): NSPanelMQTTManagerCommand.ThermostatCommand;

        /**
         * Encodes the specified ThermostatCommand message. Does not implicitly {@link NSPanelMQTTManagerCommand.ThermostatCommand.verify|verify} messages.
         * @param message ThermostatCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NSPanelMQTTManagerCommand.IThermostatCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThermostatCommand message, length delimited. Does not implicitly {@link NSPanelMQTTManagerCommand.ThermostatCommand.verify|verify} messages.
         * @param message ThermostatCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NSPanelMQTTManagerCommand.IThermostatCommand, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThermostatCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThermostatCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NSPanelMQTTManagerCommand.ThermostatCommand;

        /**
         * Decodes a ThermostatCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThermostatCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NSPanelMQTTManagerCommand.ThermostatCommand;

        /**
         * Verifies a ThermostatCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ThermostatCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ThermostatCommand
         */
        public static fromObject(object: { [k: string]: any }): NSPanelMQTTManagerCommand.ThermostatCommand;

        /**
         * Creates a plain object from a ThermostatCommand message. Also converts values to other types if specified.
         * @param message ThermostatCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NSPanelMQTTManagerCommand.ThermostatCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ThermostatCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ThermostatCommand
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
