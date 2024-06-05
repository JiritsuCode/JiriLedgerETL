var _ = require('lodash');

// Format data from RPC to Dune API export format
export class DataDormatter {
  public constructor() {
  }

  public formatSources(sources: any[]) {
    // console.info("Format Sources...");
    let formattedSources = sources.map((source: any) => {
      let formattedSource = _.mapKeys(source, (v: any, k: any) => _.snakeCase(k))
      formattedSource = _.omit(formattedSource, Array.from({length: 20}, (_, i) => String(i)));
      formattedSource = _.omit(formattedSource, ['length']);
      return formattedSource;
    });
    let csvSources = this.jsonToCsv(formattedSources);
    return csvSources;
  }

  public formatVerifiers(sources: any[]) {
    // console.info("Format Sources...");
    let formattedSources = sources.map((source: any) => {
      let formattedSource = _.mapKeys(source, (v: any, k: any) => _.snakeCase(k))
      formattedSource = _.omit(formattedSource, Array.from({length: 20}, (_, i) => String(i)));
      formattedSource = _.omit(formattedSource, ['length']);
      return formattedSource;
    });
    let csvSources = this.jsonToCsv(formattedSources);
    return csvSources;
  }

  public formatProofs(proofs: any[]) {
    // console.info("Format Proofs...");
    let formattedProofs = proofs.map((source: any) => {
      let formattedProof = _.mapKeys(source, (v: any, k: any) => _.snakeCase(k))
      formattedProof = _.omit(formattedProof, Array.from({length: 20}, (_, i) => String(i)));
      formattedProof = _.omit(formattedProof, ['length']);
      return formattedProof;
    });
    let csvProofs = this.jsonToCsv(formattedProofs);
    return csvProofs;
  }

  public formatMetadata(metadata: any[]) {
    // console.info("Format Metadata...");
    let formattedMetadata = metadata.map((item: any) => {
      let formattedItem = _.omit(item, Array.from({length: 20}, (_, i) => String(i)));
      formattedItem = _.omit(formattedItem, ['length', '__length__']);
      return formattedItem;
    });
    return formattedMetadata;
  }

  private jsonToCsv(jsonData: any) {
    let csv = '';

    if (jsonData.length == 0) return "";

    // Extract headers
    const headers = Object.keys(jsonData[0]);
    csv += headers.join(',') + '\n';

    // Extract values
    jsonData.forEach((obj: any) => {
        const values = headers.map(header => {
          switch (header) {
            case "metadata":
              return '"' + JSON.stringify(this.formatMetadata(obj[header])).replace(/"/g, '""') + '"';
            case "categories":
              return '"' + JSON.stringify(obj[header]).replace(/"/g, '""') + '"';
            case "private_viewers":
              return '"' + JSON.stringify(obj[header]).replace(/"/g, '""') + '"';
            default:
              return obj[header];
          }
        });
        csv += values.join(',') + '\n';
    });

    return csv;
  }
}
