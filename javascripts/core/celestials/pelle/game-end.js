export const GameEnd = {
  get endState() {
    if (this.removeAdditionalEnd) return this.additionalEnd;
    return Math.max((Math.log10(player.celestials.pelle.records.totalAntimatter.plus(1).log10() + 1) - 8.7) /
      (Math.log10(9e15) - 8.7) + this.additionalEnd, 0);
  },

  additionalEnd: 0,
  removeAdditionalEnd: false,

  gameLoop(diff) {
    if (this.removeAdditionalEnd) {
      if (this.additionalEnd > 0) {
        this.additionalEnd -= Math.min(diff, 50) / 500;
        if (this.additionalEnd < 0) {
          this.additionalEnd = 0;
          this.removeAdditionalEnd = false;
        }
      }
    }
    if (this.endState >= 1 && ui.$viewModel.modal.progressBar === undefined) {
      this.additionalEnd += Math.min(diff / 1000 / 20, 0.1);
    }
  }
};