$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var music = $("#music")[0]; // Mengambil elemen audio

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
    if (music.paused) {
      music.play();
    }
  }
  
  function close() {
    envelope.addClass("close").removeClass("open");
    if (!music.paused) {
      music.pause();
      music.currentTime = 0; // reset musik ke awal (opsional)
    }
  }
});
