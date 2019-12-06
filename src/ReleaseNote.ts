class ReleaseNote {
  public postToSlack(webhookURL: string, message: string): void {
    // do something grate!
  }

  public check(): void {
    // this.subscribe();
    // if new One exists, then publish one.
    // this.publish();
  }

  private fetchLists(listURL: string): void {
    // fetch release note URL list
  }

  private fetchNote(noteURL: string): void {
    // fetch release note body and parse message
  }

  private subscribe(): void {
    // this.fetchLists();
    // if new Note exists, then fetch one
    // this.fetchNote();
  }

  private publish(): void {
    // publish
  }

  private getLastFetch(): { [key: string]: string } {
    return PropertiesService.getScriptProperties().getProperties();
  }

  private setLastFetch(lastFetch: { [key: string]: string }): void {
    PropertiesService.getScriptProperties().setProperties(lastFetch);
  }
}
