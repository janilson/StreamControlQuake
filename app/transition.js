var timestampOld;
var timestamp;

var eLogo;
var eName;
var eSponsor1;
var eSponsor2;
var eSponsor3;

var mBracket;
var mFlag1;
var mFlag2;
var mMap1;
var mMap2;
var mMap3;
var mPlayer1;
var mPlayer2;
var mRound;
var mScore1;
var mScore2;
var mTeam1;
var mTeam2;
var mType;
var mWinner1;
var mWinner2;
var mWinner3;

var pbBanChampMap1;
var pbBanChampMap2;
var pbBanChampMap3;
var pbBanMap1;
var pbBanMap2;
var pbBanMap3;
var pbBanMap4;
var pbCountry1;
var pbCountry2;
var pbName1;
var pbName2;
var pbP1PickChampMap1;
var pbP1PickChampMap2;
var pbP1PickChampMap3;
var pbP2PickChampMap1;
var pbP2PickChampMap2;
var pbP2PickChampMap3;
var pbPickMap1;
var pbPickMap2;
var pbPickMap3;

var oldMFlag1 = "";
var oldMFlag2 = "";
var oldMMap1 = "";
var oldMMap2 = "";
var oldMMap3 = "";
var oldMWinner1;
var oldMWinner2;
var oldMWinner3;

var oldPbCountry1 = "";
var oldPbCountry2 = "";

var xmlDoc;

var xhr = new XMLHttpRequest();

var animating = false;
var doUpdate = false;

var init = function () {

  xhr.overrideMimeType('text/xml');
  $('#pFlag1').opacity(0);
  $('#pName1').html('');
  $('#pScore1').html('');
  $('#pFlag2').opacity(0);
  $('#pName2').html('');
  $('#pScore2').html('');
  $('.mText3').html('');
  $('.mText4').html('');


  $('#mBracket').html('');
  $('#mFlag1').html('');
  $('#mFlag2').html('');
  $('#mMap1').html('');
  $('#mMap2').html('');
  $('#mMap3').html('');
  $('#mPlayer1').html('');
  $('#mPlayer2').html('');
  $('#mRound').html('');
  $('#mScore1').html('');
  $('#mScore2').html('');
  $('#mTeam1').html('');
  $('#mTeam2').html('');
  $('#mType').html('');
  $('#mWinner1').html('');
  $('#mWinner2').html('');
  $('#mWinner3').html('');

  $('#pbBanChampMap1').html('');
  $('#pbBanChampMap2').html('');
  $('#pbBanChampMap3').html('');
  $('#pbBanMap1').html('');
  $('#pbBanMap2').html('');
  $('#pbBanMap3').html('');
  $('#pbBanMap4').html('');
  $('#pbCountry1').html('');
  $('#pbCountry2').html('');
  $('#pbName1').html('');
  $('#pbName2').html('');
  $('#pbP1PickChampMap1').html('');
  $('#pbP1PickChampMap2').html('');
  $('#pbP1PickChampMap3').html('');
  $('#pbP2PickChampMap1').html('');
  $('#pbP2PickChampMap2').html('');
  $('#pbP2PickChampMap3').html('');
  $('#pbPickMap1').html('');
  $('#pbPickMap2').html('');
  $('#pbPickMap3').html('');

  $('#eLogo').html('');
  $('#eName').html('');
  $('#eSponsor1').html('');
  $('#eSponsor2').html('');
  $('#eSponsor3').html('');


  $('#template').tween({
    top: {
      start: '-1080',
      stop: '0',
      units: 'px',
      time: 0,
      duration: 1,
      effect: 'easeOut'
    }
  });

  $.play();

  var timeout = this.window.setInterval(function () {
    pollHandler();
  }, 250);
};

var pollHandler = function () {
  loadData();

  if (timestamp != timestampOld) {
    doUpdate = true;
  }

  if (!animating && doUpdate) {
    updateBoard();
  }
};

var loadData = function () {
  xhr.open('GET', 'streamcontrol.xml');
  xhr.send();
  xhr.onreadystatechange = function () {
    xmlDoc = xhr.responseXML;

    eLogo = getValueFromTag(xmlDoc, 'eLogo');
    eName = getValueFromTag(xmlDoc, 'eName');
    eSponsor1 = getValueFromTag(xmlDoc, 'eSponsor1');
    eSponsor2 = getValueFromTag(xmlDoc, 'eSponsor2');
    eSponsor3 = getValueFromTag(xmlDoc, 'eSponsor3');
    mBracket = getValueFromTag(xmlDoc, 'mBracket');
    mFlag1 = getValueFromTag(xmlDoc, 'mFlag1');
    mFlag2 = getValueFromTag(xmlDoc, 'mFlag2');
    mMap1 = getValueFromTag(xmlDoc, 'mMap1');
    mMap2 = getValueFromTag(xmlDoc, 'mMap2');
    mMap3 = getValueFromTag(xmlDoc, 'mMap3');
    mPlayer1 = getValueFromTag(xmlDoc, 'mPlayer1');
    mPlayer2 = getValueFromTag(xmlDoc, 'mPlayer2');
    mRound = getValueFromTag(xmlDoc, 'mRound');
    mScore1 = getValueFromTag(xmlDoc, 'mScore1');
    mScore2 = getValueFromTag(xmlDoc, 'mScore2');
    mTeam1 = getValueFromTag(xmlDoc, 'mTeam1');
    mTeam2 = getValueFromTag(xmlDoc, 'mTeam2');
    mType = getValueFromTag(xmlDoc, 'mType');
    mWinner1 = getValueFromTag(xmlDoc, 'mWinner1');
    mWinner2 = getValueFromTag(xmlDoc, 'mWinner2');
    mWinner3 = getValueFromTag(xmlDoc, 'mWinner3');
    pbBanChampMap1 = getValueFromTag(xmlDoc, 'pbBanChampMap1');
    pbBanChampMap2 = getValueFromTag(xmlDoc, 'pbBanChampMap2');
    pbBanChampMap3 = getValueFromTag(xmlDoc, 'pbBanChampMap3');
    pbBanMap1 = getValueFromTag(xmlDoc, 'pbBanMap1');
    pbBanMap2 = getValueFromTag(xmlDoc, 'pbBanMap2');
    pbBanMap3 = getValueFromTag(xmlDoc, 'pbBanMap3');
    pbBanMap4 = getValueFromTag(xmlDoc, 'pbBanMap4');
    pbCountry1 = getValueFromTag(xmlDoc, 'pbCountry1');
    pbCountry2 = getValueFromTag(xmlDoc, 'pbCountry2');
    pbName1 = getValueFromTag(xmlDoc, 'pbName1');
    pbName2 = getValueFromTag(xmlDoc, 'pbName2');
    pbP1PickChampMap1 = getValueFromTag(xmlDoc, 'pbP1PickChampMap1');
    pbP1PickChampMap2 = getValueFromTag(xmlDoc, 'pbP1PickChampMap2');
    pbP1PickChampMap3 = getValueFromTag(xmlDoc, 'pbP1PickChampMap3');
    pbP2PickChampMap1 = getValueFromTag(xmlDoc, 'pbP2PickChampMap1');
    pbP2PickChampMap2 = getValueFromTag(xmlDoc, 'pbP2PickChampMap2');
    pbP2PickChampMap3 = getValueFromTag(xmlDoc, 'pbP2PickChampMap3');
    pbPickMap1 = getValueFromTag(xmlDoc, 'pbPickMap1');
    pbPickMap2 = getValueFromTag(xmlDoc, 'pbPickMap2');
    pbPickMap3 = getValueFromTag(xmlDoc, 'pbPickMap3');

    timestampOld = timestamp;
    timestamp = getValueFromTag(xmlDoc, 'timestamp');
  }
};

var updateLabel = function (nameTag, value, initStart, stopFinal, stopFunction) {

  if (undefined === stopFunction) {
    stopFunction = function () {
      $(nameTag).html(value);
    }
  }

  animating = true;
  $(nameTag).tween({
    left: {
      start: initStart,
      stop: stopFinal,
      units: 'px',
      time: 0,
      duration: 0.5,
      effect: 'easeIn'
    },
    opacity: {
      start: 100,
      stop: 0,
      time: 0,
      duration: 0.5,
      effect: 'easeIn'
    },
    onStop: stopFunction
  });

  $(nameTag).tween({
    left: {
      start: stopFinal,
      stop: initStart,
      units: 'px',
      time: 0.5,
      duration: 0.5,
      effect: 'easeOut'
    },
    opacity: {
      start: 0,
      stop: 100,
      time: 0.5,
      duration: 0.5,
      effect: 'easeOut'
    },
    onStop: function () {
      animating = false;
    }
  });
};

var updateScore = function (nameTag, value, initStart, stopFinal, stopFunction) {

  if (undefined === stopFunction) {
    stopFunction = function () {
      $(nameTag).html(value);
    }
  }

  animating = true;
  $(nameTag).tween({
    opacity: {
      start: initStart,
      stop: stopFinal,
      time: 0,
      duration: 0.5,
      effect: 'easeIn'
    },
    onStop: stopFunction
  });

  $(nameTag).tween({
    opacity: {
      start: stopFinal,
      stop: initStart,
      time: 0.5,
      duration: 0.5,
      effect: 'easeOut'
    },
    onStop: function () {
      animating = false;
    }
  });
};

var updateBoard = function () {
  if ($('#mPlayer1').html() != mPlayer1) {
    /* updateLabel('#mPlayer1', mPlayer1, 660, 740); */
    updateScore('#mPlayer1', mPlayer1, 100, 0);
  }

  if ($('#mPlayer2').html() != mPlayer2) {
    /* updateLabel('#mPlayer2', mPlayer2, 1042, 942); */
    updateScore('#mPlayer2', mPlayer2, 100, 0);
  }

  if (oldMFlag1 != mFlag1 || $('#mFlag1').opacity() == 0) {
    var stopFunction = function () {
      $('#mFlag1').html('<img src="assets/img/flags/' + mFlag1 + '_L.png">');
      oldMFlag1 = mFlag1;
    };

    updateScore('#mFlag1', mFlag1, 100, 0, stopFunction);
  }

  if (oldMFlag2 != mFlag2 || $('#mFlag2').opacity() == 0) {
    var stopFunction = function () {
      $('#mFlag2').html('<img src="assets/img/flags/' + mFlag2 + '_R.png">');
      oldMFlag2 = mFlag2;
    };

    updateScore('#mFlag2', mFlag2, 100, 0, stopFunction);
  }

  if (oldMMap1 != mMap1 || $('#mMap1').opacity() == 0) {
    var stopFunction = function () {
      $('#mMap1').html('<img src="assets/img/maps/' + mMap1 + '.png">');
      oldMMap1 = mMap1;
    };

    updateScore('#mMap1', mMap1, 100, 0, stopFunction);
  }

  if (oldMWinner1 != mWinner1 || $('#mWinner1').opacity() == 0) {
    var stopFunction = function () {
      $('#mWinner1').html('');
      if (mWinner1 != 'blank') {
        $('#mWinner1').html('<img src="assets/img/maps/' + mWinner1 + '.png">');
      }
      oldMWinner1 = mWinner1;
    };

    updateScore('#mWinner1', mWinner1, 100, 0, stopFunction);
  }
  
  if (oldMMap2 != mMap2 || $('#mMap2').opacity() == 0) {
    var stopFunction = function () {
      $('#mMap2').html('<img src="assets/img/maps/' + mMap2 + '.png">');
      oldMMap2 = mMap2;
    };

    updateScore('#mMap2', mMap2, 100, 0, stopFunction);
  }

  if (oldMWinner2 != mWinner2 || $('#mWinner2').opacity() == 0) {
    var stopFunction = function () {
      $('#mWinner2').html('');
      if (mWinner2 != 'blank') {
        $('#mWinner2').html('<img src="assets/img/maps/' + mWinner2 + '.png">');
      }
      oldMWinner2 = mWinner2;
    };

    updateScore('#mWinner2', mWinner2, 100, 0, stopFunction);
  }

  if (oldMMap3 != mMap3 || $('#mMap3').opacity() == 0) {
    var stopFunction = function () {
      $('#mMap3').html('<img src="assets/img/maps/' + mMap3 + '.png">');
      oldMMap3 = mMap3;
    };

    updateScore('#mMap3', mMap3, 100, 0, stopFunction);
  }

  if (oldMWinner3 != mWinner3 || $('#mWinner3').opacity() == 0) {
    var stopFunction = function () {
      $('#mWinner3').html('');
      if (mWinner3 != 'blank') {
        $('#mWinner3').html('<img src="assets/img/maps/' + mWinner3 + '.png">');
      }
      oldMWinner3 = mWinner3;
    };

    updateScore('#mWinner3', mWinner3, 100, 0, stopFunction);
  }

  $.play();

  doUpdate = false;

  return true;
};

var getValueFromTag = function (xmlDoc, tag) {
  if (xmlDoc.getElementsByTagName(tag).length != 0) {
    if (xmlDoc.getElementsByTagName(tag)[0].childNodes.length == 0) {
      return '';
    } else {
      return xmlDoc.getElementsByTagName(tag)[0].childNodes[0].nodeValue;
    }
  } else {
    return '';
  }
};