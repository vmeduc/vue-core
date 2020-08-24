
export let myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('привет из примеси!')
    }
  }
};

export let mixinOptions = {
  created() {
    let myOption = this.$options.myOption;
    if (myOption) {
      console.log(myOption);
    }
  }
};

export let mxStoreOptions = {
  created() {
    let myOption = this.$store.state.soneOption;
    if (myOption) {
      console.log('myOption is true!')
    } else {
      console.log('myOption is false!')
    }
  }
};