import { BoostPowStringModel } from './boost-pow-string-model';
import { BoostPowJobModel } from './boost-pow-job-model';
import { BoostPowJobProofModel } from './boost-pow-job-proof-model';
import { BoostPowMetadataModel } from './boost-pow-metadata-model';
import { BoostPowSimpleMinerModel } from './boost-pow-simple-miner-model';
import { BoostUtils } from './boost-utils';
export declare class BoostGraphClient {
    options: any;
    constructor(providedOptions?: any);
    readonly BoostPowString: typeof BoostPowStringModel;
    readonly BoostPowJob: typeof BoostPowJobModel;
    readonly BoostPowJobProof: typeof BoostPowJobProofModel;
    readonly BoostPowMetadata: typeof BoostPowMetadataModel;
    readonly BoostPowSimpleMiner: typeof BoostPowSimpleMinerModel;
    submitBoostJob(rawtx: string, callback?: Function): Promise<any>;
    loadBoostJob(txid: string, callback?: Function): Promise<any>;
    getBoostJobUtxos(scriptHash: string, callback?: Function): Promise<any>;
    setOptions(newOptions: any): void;
    static instance(newOptions?: any): BoostGraphClient;
}
export declare function Graph(newOptions?: any): BoostGraphClient;
export declare function instance(newOptions?: any): BoostGraphClient;
export declare var BoostPowString: typeof BoostPowStringModel;
export declare var BoostPowJob: typeof BoostPowJobModel;
export declare var BoostPowJobProof: typeof BoostPowJobProofModel;
export declare var BoostPowMetadata: typeof BoostPowMetadataModel;
export declare var BoostPowSimpleMiner: typeof BoostPowSimpleMinerModel;
export declare var BoostUtilsHelper: typeof BoostUtils;
export declare var BoostGraph: typeof BoostGraphClient;
