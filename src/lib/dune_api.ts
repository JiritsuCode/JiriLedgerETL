// Main Dune API class
export class DuneAPI {
  private apiKey: string;
  private workspace: string;

  public constructor(apiKey: string, workspace: string) {
    this.apiKey = apiKey;
    this.workspace = workspace;
  }

  public async clearSources() {
    console.info("Clear Sources...");

    const url = `https://api.dune.com/api/v1/table/${this.workspace}/${process.env.DUNE_SOURCES_TABLE_NAME}/clear`;

    const headers = {
        "X-DUNE-API-KEY": this.apiKey,
        "Content-Type": "text/csv",
    };

    let result;
    await fetch(url, {
        method: 'POST',
        headers: headers,
    })
    .then(response => result = response.json())
    .then(response => console.log(response))
    .catch(err => console.error(result = err));

    return result;
  }

  public async exportSources(sources: any) {
    console.info("Exporting Sources...");

    const url = `https://api.dune.com/api/v1/table/${this.workspace}/${process.env.DUNE_SOURCES_TABLE_NAME}/insert`;

    const headers = {
        "X-DUNE-API-KEY": this.apiKey,
        "Content-Type": "text/csv",
    };

    let result;
    await fetch(url, {
        method: 'POST',
        headers: headers,
        body: sources
    })
    .then(response => result = response.json())
    .then(response => console.log(response))
    .catch(err => console.error(result = err));

    return result;
  }

  public async clearVerifiers() {
    console.info("Clear Verifiers...");

    const url = `https://api.dune.com/api/v1/table/${this.workspace}/${process.env.DUNE_VERIFIERS_TABLE_NAME}/clear`;

    const headers = {
        "X-DUNE-API-KEY": this.apiKey,
        "Content-Type": "text/csv",
    };

    let result;
    await fetch(url, {
        method: 'POST',
        headers: headers,
    })
    .then(response => result = response.json())
    .then(response => console.log(response))
    .catch(err => console.error(result = err));

    return result;
  }

  public async exportVerifiers(sources: any) {
    console.info("Exporting Verifiers...");

    const url = `https://api.dune.com/api/v1/table/${this.workspace}/${process.env.DUNE_VERIFIERS_TABLE_NAME}/insert`;

    const headers = {
        "X-DUNE-API-KEY": this.apiKey,
        "Content-Type": "text/csv",
    };

    let result;
    await fetch(url, {
        method: 'POST',
        headers: headers,
        body: sources
    })
    .then(response => result = response.json())
    .then(response => console.log(response))
    .catch(err => console.error(result = err));

    return result;
  }

  public async clearProofs() {
    console.info("Clear Proofs...");

    const url = `https://api.dune.com/api/v1/table/${this.workspace}/${process.env.DUNE_PROOFS_TABLE_NAME}/clear`;

    const headers = {
        "X-DUNE-API-KEY": this.apiKey,
        "Content-Type": "text/csv",
    };

    let result;
    await fetch(url, {
        method: 'POST',
        headers: headers,
    })
    .then(response => result = response.json())
    .then(response => console.log(response))
    .catch(err => console.error(result = err));

    return result;
  }

  public async exportProofs(proofs: any) {
    console.info("Exporting Proofs...");

    const url = `https://api.dune.com/api/v1/table/${this.workspace}/${process.env.DUNE_PROOFS_TABLE_NAME}/insert`;

    const headers = {
        "X-DUNE-API-KEY": this.apiKey,
        "Content-Type": "text/csv",
    };

    let result;
    await fetch(url, {
        method: 'POST',
        headers: headers,
        body: proofs
    })
    .then(response => result = response.json())
    .then(response => console.log(response))
    .catch(err => console.error(result = err));

    return result;
  }
}
