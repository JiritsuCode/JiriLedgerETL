import Web3 from "web3";
import { contractABI } from "./contract_abi";

// RPCAPI class to interact with the smart contract
export class RPCAPI {
    private web3: Web3;
    private contractAddress: string;
    private contract: any;
    public pageSize = 50;

    public constructor() {
        // Initialize web3 using Infura
        this.web3 = new Web3(process.env.PROVIDER);
        // Your contract ABI
        this.contractAddress = process.env.JIRI_LEDGER_ADDRESS ?? "";
        // Create contract instance
        this.contract = new this.web3.eth.Contract(
            contractABI,
            this.contractAddress
        );
    }

    public async loadSources() {
        console.info("Loading Sources...");
        try {
            let sources = await this.contract.methods.getAllSources().call();
            sources ||= [];
            return sources;
        } catch (error) {
            console.error(
                "Error calling contract method getAllSources:",
                error
            );
            return [];
        }
    }

    public async loadSourcesPaged(lastOffset: number) {
        console.info("Loading Sources Paged...");
        try {
            let sources = await this.contract.methods
                .getSourcesPaged(this.pageSize, lastOffset)
                .call();
            sources ||= [];
            return sources;
        } catch (error) {
            console.error(
                "Error calling contract method getSourcesPaged:",
                error
            );
            return [];
        }
    }

    public async loadVerifiers() {
        console.info("Loading Verifiers...");
        try {
            let verifiers = await this.contract.methods
                .getAllVerifierTypes()
                .call();
            verifiers ||= [];
            return verifiers;
        } catch (error) {
            console.error(
                "Error calling contract method getAllVerifierTypes:",
                error
            );
            return [];
        }
    }

    public async loadProofs(source: any) {
        console.info(`Loading proofs (source_id=${source.id})...`);
        try {
            let proofs = await this.contract.methods
                .getSourceProofs(source.id)
                .call();
            proofs ||= [];

            return proofs;
        } catch (error) {
            console.error(
                "Error calling contract method getSourceProofs:",
                error
            );
            return [];
        }
    }

    public async loadProofsPaged(source: any, lastOffset: number) {
        console.info(`Loading proofs (source_id=${source.id})...`);
        try {
            // console.log([source.id, this.pageSize, lastOffset]);
            let proofs = await this.contract.methods
                .getSourceProofsPaged(source.id, this.pageSize, lastOffset)
                .call();
            proofs ||= [];

            return proofs;
        } catch (error) {
            console.error(
                "Error calling contract method getSourceProofsPaged:",
                error
            );
            return [];
        }
    }
}
