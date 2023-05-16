// *** WARNING: this file was generated by crd2pulumi. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../../types/input";
import * as outputs from "../../types/output";
import * as utilities from "../../utilities";

import {ObjectMeta} from "../../meta/v1";

/**
 * TLSOption is the CRD implementation of a Traefik TLS Option, allowing to configure some parameters of the TLS connection. More info: https://doc.traefik.io/traefik/v3.0/https/tls/#tls-options
 */
export class TLSOption extends pulumi.CustomResource {
    /**
     * Get an existing TLSOption resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): TLSOption {
        return new TLSOption(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'kubernetes:traefik.io/v1alpha1:TLSOption';

    /**
     * Returns true if the given object is an instance of TLSOption.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TLSOption {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TLSOption.__pulumiType;
    }

    public readonly apiVersion!: pulumi.Output<"traefik.io/v1alpha1" | undefined>;
    public readonly kind!: pulumi.Output<"TLSOption" | undefined>;
    public readonly metadata!: pulumi.Output<ObjectMeta>;
    /**
     * TLSOptionSpec defines the desired state of a TLSOption.
     */
    public readonly spec!: pulumi.Output<outputs.traefik.v1alpha1.TLSOptionSpec>;

    /**
     * Create a TLSOption resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TLSOptionArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["apiVersion"] = "traefik.io/v1alpha1";
            resourceInputs["kind"] = "TLSOption";
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["spec"] = args ? args.spec : undefined;
        } else {
            resourceInputs["apiVersion"] = undefined /*out*/;
            resourceInputs["kind"] = undefined /*out*/;
            resourceInputs["metadata"] = undefined /*out*/;
            resourceInputs["spec"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TLSOption.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a TLSOption resource.
 */
export interface TLSOptionArgs {
    apiVersion?: pulumi.Input<"traefik.io/v1alpha1">;
    kind?: pulumi.Input<"TLSOption">;
    metadata?: pulumi.Input<ObjectMeta>;
    /**
     * TLSOptionSpec defines the desired state of a TLSOption.
     */
    spec?: pulumi.Input<inputs.traefik.v1alpha1.TLSOptionSpecArgs>;
}
