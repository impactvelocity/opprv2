class BlockQuote {

  static get toolbox() {
    return {
      title: 'Quote',
      icon: '<svg version="1" width="11" height="14" xmlns="http://www.w3.org/2000/svg" ><path d="M71 12H14C6 12 0 17 0 25v35c0 7 6 13 14 13h57c8 0 14-6 14-13V25c0-8-6-13-14-13zm5 39L63 35l-3-2-4 2-13 16-5-3-3-1-3 2-10 16h-8c-3 0-5-2-5-5V25c0-3 2-5 5-5h57c3 0 5 2 5 5v26zM24 27c-4 0-7 3-7 7s3 7 7 7c5 0 8-3 8-7s-3-7-8-7z"/></svg>'
    };
  }

  render(){

    const wrapper = document.createElement('DIV');

    wrapper.classList.add('bquote');

    return wrapper;
  }

  save(blockContent){
    return {
      text: blockContent.innerHTML
    }
  }

}
