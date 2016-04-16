'use strict';

angular.module('marta-on-m2x').controller('HomeCtrl', function($scope, $route, statsService, $http, $timeout){

  $scope.Math = window.Math;
  $scope.all_stops = [
    'stop 1', 'stop 2', 'stop 3', 'stop 4', 'stop 5', 'stop 6', '', 'stop 7',
    'stop 8', 'stop 9', 'stop 10', 'stop 11', 'stop 12', 'stop 13', 'stop 14',
    'stop 15', 'stop 16', 'stop 17', 'stop 18', 'stop 18', 'stop 19', 'stop 20',
    'stop 21', 'stop 22', 'stop 23', 'stop 24', 'stop 25', 'stop 26', 'stop 27',
    'stop 28', 'stop 29', 'stop 30', 'stop 40'
  ];

  function init(){
    $scope.loading = true;
    $scope.stats = []
    $scope.bus_stops = [{"key":"Stop 1","doc_count":5260571},{"key":"Stop 2","doc_count":1266269},{"key":"Stop 3","doc_count":530085},{"key":"Stop 4","doc_count":492793},{"key":"Stop 5","doc_count":492518},{"key":"Stop 6","doc_count":339695},{"key":"Stop 7","doc_count":320125},{"key":"Stop 8","doc_count":295426},{"key":"Stop 9","doc_count":236889},{"key":"Stop 10","doc_count":189767},{"key":"Stop 11","doc_count":181993},{"key":"Stop 12","doc_count":175390},{"key":"Stop 13","doc_count":169159},{"key":"Stop 14","doc_count":153359},{"key":"Stop 15","doc_count":148495},{"key":"Stop 16","doc_count":142592},{"key":"Stop 17","doc_count":141961},{"key":"Stop 18","doc_count":138083},{"key":"Stop 19","doc_count":137329},{"key":"Stop 20","doc_count":126759},{"key":"Stop 21","doc_count":120120},{"key":"Stop 22","doc_count":113753},{"key":"Stop 23","doc_count":111741},{"key":"Stop 24","doc_count":97058},{"key":"Stop 25","doc_count":95781},{"key":"Stop 26","doc_count":93095},{"key":"Stop 27","doc_count":91159},{"key":"Stop 28","doc_count":86854},{"key":"Stop 29","doc_count":82871},{"key":"Stop 30","doc_count":82352},{"key":"Stop 31","doc_count":77379},{"key":"Stop 32","doc_count":74062},{"key":"Stop 33","doc_count":73923},{"key":"Stop 34","doc_count":71945},{"key":"Stop 35","doc_count":71397},{"key":"Stop 36","doc_count":66777},{"key":"Stop 37","doc_count":65144},{"key":"Stop 38","doc_count":64128},{"key":"Stop 39","doc_count":64102},{"key":"Stop 40","doc_count":63923},{"key":"Stop 41","doc_count":63744},{"key":"Stop 42","doc_count":60896},{"key":"Stop 43","doc_count":55404},{"key":"Stop 44","doc_count":55214},{"key":"Stop 45","doc_count":48552},{"key":"Stop 46","doc_count":46680},{"key":"Stop 47","doc_count":44886},{"key":"Stop 48","doc_count":42925},{"key":"Stop 49","doc_count":41947},{"key":"Stop 50","doc_count":40239},{"key":"Stop 51","doc_count":38599},{"key":"Stop 52","doc_count":37331},{"key":"Stop 53","doc_count":36952},{"key":"Stop 54","doc_count":36912},{"key":"Stop 55","doc_count":36609},{"key":"Stop 56","doc_count":35544},{"key":"Stop 57","doc_count":35141},{"key":"Stop 58","doc_count":34809},{"key":"Stop 59","doc_count":34536},{"key":"Stop 60","doc_count":34493},{"key":"Stop 61","doc_count":34358},{"key":"Stop 62","doc_count":33848},{"key":"Stop 63","doc_count":32818},{"key":"Stop 64","doc_count":31058},{"key":"Stop 65","doc_count":22809},{"key":"Stop 66","doc_count":21277},{"key":"Stop 67","doc_count":21197},{"key":"Stop 68","doc_count":20455},{"key":"Stop 69","doc_count":19188},{"key":"Stop 70","doc_count":18783},{"key":"Stop 71","doc_count":18645},{"key":"Stop 72","doc_count":17568},{"key":"Stop 73","doc_count":17557},{"key":"Stop 74","doc_count":17117},{"key":"Stop 75","doc_count":17001},{"key":"Stop 76","doc_count":16718},{"key":"Stop 77","doc_count":16540},{"key":"Stop 78","doc_count":16467},{"key":"Stop 79","doc_count":14198},{"key":"Stop 80","doc_count":13762},{"key":"Stop 81","doc_count":13707},{"key":"Stop 82","doc_count":13706},{"key":"Stop 83","doc_count":12306},{"key":"Stop 84","doc_count":12207},{"key":"Stop 85","doc_count":12020},{"key":"Stop 86","doc_count":11909},{"key":"Stop 87","doc_count":11736},{"key":"Stop 88","doc_count":11629},{"key":"Stop 89","doc_count":11388},{"key":"Stop 90","doc_count":11355},{"key":"Stop 91","doc_count":11089},{"key":"Stop 92","doc_count":10318},{"key":"Stop 93","doc_count":9889},{"key":"Stop 94","doc_count":9861},{"key":"Stop 95","doc_count":9639},{"key":"Stop 96","doc_count":9548},{"key":"Stop 97","doc_count":9283},{"key":"Stop 98","doc_count":9068},{"key":"Stop 99","doc_count":8083},{"key":"Stop 100","doc_count":8053},{"key":"Stop 101","doc_count":7984},{"key":"Stop 102","doc_count":7952},{"key":"Stop 103","doc_count":7856},{"key":"Stop 104","doc_count":7778},{"key":"Stop 105","doc_count":7522},{"key":"Stop 106","doc_count":7217},{"key":"Stop 107","doc_count":6859},{"key":"Stop 108","doc_count":6835},{"key":"Stop 109","doc_count":6732},{"key":"Stop 110","doc_count":6404},{"key":"Stop 111","doc_count":6217},{"key":"Stop 112","doc_count":5729},{"key":"Stop 113","doc_count":5626},{"key":"Stop 114","doc_count":5567},{"key":"Stop 115","doc_count":5523},{"key":"Stop 116","doc_count":5212},{"key":"Stop 117","doc_count":5196},{"key":"Stop 118","doc_count":5098},{"key":"Stop 119","doc_count":5042},{"key":"Stop 120","doc_count":4776},{"key":"Stop 121","doc_count":4765},{"key":"Stop 122","doc_count":4645},{"key":"Stop 123","doc_count":4566},{"key":"Stop 124","doc_count":4558},{"key":"Stop 125","doc_count":4506},{"key":"Stop 126","doc_count":4441},{"key":"Stop 127","doc_count":4207},{"key":"Stop 128","doc_count":4182},{"key":"Stop 129","doc_count":4134},{"key":"Stop 130","doc_count":4105},{"key":"Stop 131","doc_count":4092},{"key":"Stop 132","doc_count":3928},{"key":"Stop 133","doc_count":3924},{"key":"Stop 134","doc_count":3864},{"key":"Stop 135","doc_count":3852},{"key":"Stop 136","doc_count":3775},{"key":"Stop 137","doc_count":3636},{"key":"Stop 138","doc_count":3519},{"key":"Stop 139","doc_count":3518},{"key":"Stop 140","doc_count":3460},{"key":"Stop 141","doc_count":3446},{"key":"Stop 142","doc_count":3441},{"key":"Stop 143","doc_count":3349},{"key":"Stop 144","doc_count":3277},{"key":"Stop 145","doc_count":3179},{"key":"Stop 146","doc_count":3176},{"key":"Stop 147","doc_count":3163},{"key":"Stop 148","doc_count":3097},{"key":"Stop 149","doc_count":3088},{"key":"Stop 150","doc_count":2911},{"key":"Stop 151","doc_count":2903},{"key":"Stop 152","doc_count":2881},{"key":"Stop 153","doc_count":2766},{"key":"Stop 154","doc_count":2711},{"key":"Stop 155","doc_count":2678},{"key":"Stop 156","doc_count":2672},{"key":"Stop 157","doc_count":2666},{"key":"Stop 158","doc_count":2653},{"key":"Stop 159","doc_count":2563},{"key":"Stop 160","doc_count":2540},{"key":"Stop 161","doc_count":2537},{"key":"Stop 162","doc_count":2537},{"key":"Stop 163","doc_count":2486},{"key":"Stop 164","doc_count":2428},{"key":"Stop 165","doc_count":2383},{"key":"Stop 166","doc_count":2365},{"key":"Stop 167","doc_count":2362},{"key":"Stop 168","doc_count":2308},{"key":"Stop 169","doc_count":2301},{"key":"Stop 170","doc_count":2281},{"key":"Stop 171","doc_count":2246},{"key":"Stop 172","doc_count":2218},{"key":"Stop 173","doc_count":2145},{"key":"Stop 174","doc_count":2137},{"key":"Stop 175","doc_count":2133},{"key":"Stop 176","doc_count":2116},{"key":"Stop 177","doc_count":2095},{"key":"Stop 178","doc_count":2000},{"key":"Stop 179","doc_count":1993},{"key":"Stop 180","doc_count":1971},{"key":"Stop 181","doc_count":1967},{"key":"Stop 182","doc_count":1950},{"key":"Stop 183","doc_count":1905},{"key":"Stop 184","doc_count":1894},{"key":"Stop 185","doc_count":1892},{"key":"Stop 186","doc_count":1858},{"key":"Stop 187","doc_count":1839},{"key":"Stop 188","doc_count":1823},{"key":"Stop 189","doc_count":1814},{"key":"Stop 190","doc_count":1777},{"key":"Stop 191","doc_count":1726},{"key":"Stop 192","doc_count":1715},{"key":"Stop 193","doc_count":1711},{"key":"Stop 194","doc_count":1609},{"key":"Stop 195","doc_count":1558},{"key":"Stop 196","doc_count":1545},{"key":"Stop 197","doc_count":1517},{"key":"Stop 198","doc_count":1514},{"key":"Stop 199","doc_count":1481},{"key":"Stop 200","doc_count":1472},{"key":"Stop 201","doc_count":1465},{"key":"Stop 202","doc_count":1438},{"key":"Stop 203","doc_count":1405},{"key":"Stop 204","doc_count":1394},{"key":"Stop 205","doc_count":1357},{"key":"Stop 206","doc_count":1336},{"key":"Stop 207","doc_count":1323},{"key":"Stop 208","doc_count":1303},{"key":"Stop 209","doc_count":1291},{"key":"Stop 210","doc_count":1267},{"key":"Stop 211","doc_count":1267},{"key":"Stop 212","doc_count":1212},{"key":"Stop 213","doc_count":1205},{"key":"Stop 214","doc_count":1204},{"key":"Stop 215","doc_count":1188},{"key":"Stop 216","doc_count":1183},{"key":"Stop 217","doc_count":1180},{"key":"Stop 218","doc_count":1142},{"key":"Stop 219","doc_count":1131},{"key":"Stop 220","doc_count":1128},{"key":"Stop 221","doc_count":1108},{"key":"Stop 222","doc_count":1106},{"key":"Stop 223","doc_count":1069},{"key":"Stop 224","doc_count":1063},{"key":"Stop 225","doc_count":1062},{"key":"Stop 226","doc_count":1011},{"key":"Stop 227","doc_count":1009},{"key":"Stop 228","doc_count":955},{"key":"Stop 229","doc_count":952},{"key":"Stop 230","doc_count":945},{"key":"Stop 231","doc_count":941},{"key":"Stop 232","doc_count":926},{"key":"Stop 233","doc_count":921},{"key":"Stop 234","doc_count":920},{"key":"Stop 235","doc_count":889},{"key":"Stop 236","doc_count":865},{"key":"Stop 237","doc_count":853},{"key":"Stop 238","doc_count":840},{"key":"Stop 239","doc_count":838},{"key":"Stop 240","doc_count":835},{"key":"Stop 241","doc_count":792},{"key":"Stop 242","doc_count":789},{"key":"Stop 243","doc_count":762},{"key":"Stop 244","doc_count":753},{"key":"Stop 245","doc_count":752},{"key":"Stop 246","doc_count":718},{"key":"Stop 247","doc_count":700},{"key":"Stop 248","doc_count":679},{"key":"Stop 249","doc_count":669},{"key":"Stop 250","doc_count":653},{"key":"Stop 251","doc_count":637},{"key":"Stop 252","doc_count":636},{"key":"Stop 253","doc_count":625},{"key":"Stop 254","doc_count":623},{"key":"Stop 255","doc_count":617},{"key":"Stop 256","doc_count":614},{"key":"Stop 257","doc_count":609},{"key":"Stop 258","doc_count":605},{"key":"Stop 259","doc_count":603},{"key":"Stop 260","doc_count":582},{"key":"Stop 261","doc_count":582},{"key":"Stop 262","doc_count":573},{"key":"Stop 263","doc_count":567},{"key":"Stop 264","doc_count":553},{"key":"Stop 265","doc_count":546},{"key":"Stop 266","doc_count":539},{"key":"Stop 267","doc_count":536},{"key":"Stop 268","doc_count":532},{"key":"Stop 269","doc_count":530},{"key":"Stop 270","doc_count":528},{"key":"Stop 271","doc_count":521},{"key":"Stop 272","doc_count":519},{"key":"Stop 273","doc_count":517},{"key":"Stop 274","doc_count":510},{"key":"Stop 275","doc_count":509},{"key":"Stop 276","doc_count":463},{"key":"Stop 277","doc_count":455},{"key":"Stop 278","doc_count":454},{"key":"Stop 279","doc_count":454},{"key":"Stop 280","doc_count":453},{"key":"Stop 281","doc_count":438},{"key":"Stop 282","doc_count":438},{"key":"Stop 283","doc_count":430},{"key":"Stop 284","doc_count":423},{"key":"Stop 285","doc_count":408},{"key":"Stop 286","doc_count":405},{"key":"Stop 287","doc_count":377},{"key":"Stop 288","doc_count":369},{"key":"Stop 289","doc_count":367},{"key":"Stop 290","doc_count":366},{"key":"Stop 291","doc_count":365},{"key":"Stop 292","doc_count":361},{"key":"Stop 293","doc_count":358},{"key":"Stop 294","doc_count":355},{"key":"Stop 295","doc_count":354},{"key":"Stop 296","doc_count":352},{"key":"Stop 297","doc_count":350},{"key":"Stop 298","doc_count":350},{"key":"Stop 299","doc_count":349},{"key":"Stop 300","doc_count":333},{"key":"Stop 301","doc_count":332},{"key":"Stop 302","doc_count":328},{"key":"Stop 303","doc_count":320},{"key":"Stop 304","doc_count":313},{"key":"Stop 305","doc_count":303},{"key":"Stop 306","doc_count":298},{"key":"Stop 307","doc_count":297},{"key":"Stop 308","doc_count":289},{"key":"Stop 309","doc_count":277},{"key":"Stop 310","doc_count":268},{"key":"Stop 311","doc_count":267},{"key":"Stop 312","doc_count":248},{"key":"Stop 313","doc_count":240},{"key":"Stop 314","doc_count":229},{"key":"Stop 315","doc_count":227},{"key":"Stop 316","doc_count":226},{"key":"Stop 317","doc_count":224},{"key":"Stop 318","doc_count":223},{"key":"Stop 319","doc_count":216},{"key":"Stop 320","doc_count":216},{"key":"Stop 321","doc_count":216},{"key":"Stop 322","doc_count":211},{"key":"Stop 323","doc_count":210},{"key":"Stop 324","doc_count":200},{"key":"Stop 325","doc_count":198},{"key":"Stop 326","doc_count":197},{"key":"Stop 327","doc_count":193},{"key":"Stop 328","doc_count":190},{"key":"Stop 329","doc_count":188},{"key":"Stop 330","doc_count":187},{"key":"Stop 331","doc_count":186},{"key":"Stop 332","doc_count":182},{"key":"Stop 333","doc_count":180},{"key":"Stop 334","doc_count":178},{"key":"Stop 335","doc_count":177},{"key":"Stop 336","doc_count":176},{"key":"Stop 337","doc_count":172},{"key":"Stop 338","doc_count":163},{"key":"Stop 339","doc_count":161},{"key":"Stop 340","doc_count":160},{"key":"Stop 341","doc_count":157},{"key":"Stop 342","doc_count":151},{"key":"Stop 343","doc_count":151},{"key":"Stop 344","doc_count":151},{"key":"Stop 345","doc_count":150},{"key":"Stop 346","doc_count":150},{"key":"Stop 347","doc_count":145},{"key":"Stop 348","doc_count":144},{"key":"Stop 349","doc_count":142},{"key":"Stop 350","doc_count":138},{"key":"Stop 351","doc_count":136},{"key":"Stop 352","doc_count":136},{"key":"Stop 353","doc_count":129},{"key":"Stop 354","doc_count":128},{"key":"Stop 355","doc_count":126},{"key":"Stop 356","doc_count":125},{"key":"Stop 357","doc_count":125},{"key":"Stop 358","doc_count":124},{"key":"Stop 359","doc_count":123},{"key":"Stop 360","doc_count":121},{"key":"Stop 361","doc_count":120},{"key":"Stop 362","doc_count":119},{"key":"Stop 363","doc_count":119},{"key":"Stop 364","doc_count":118},{"key":"Stop 365","doc_count":115},{"key":"Stop 366","doc_count":110},{"key":"Stop 367","doc_count":110},{"key":"Stop 368","doc_count":110},{"key":"Stop 369","doc_count":109},{"key":"Stop 370","doc_count":108},{"key":"Stop 371","doc_count":107},{"key":"Stop 372","doc_count":106},{"key":"Stop 373","doc_count":104},{"key":"Stop 374","doc_count":100},{"key":"Stop 375","doc_count":99},{"key":"Stop 376","doc_count":98},{"key":"Stop 377","doc_count":97},{"key":"Stop 378","doc_count":93},{"key":"Stop 379","doc_count":93},{"key":"Stop 380","doc_count":92},{"key":"Stop 381","doc_count":90},{"key":"Stop 382","doc_count":89},{"key":"Stop 383","doc_count":89},{"key":"Stop 384","doc_count":88},{"key":"Stop 385","doc_count":87},{"key":"Stop 386","doc_count":86},{"key":"Stop 387","doc_count":86},{"key":"Stop 388","doc_count":86},{"key":"Stop 389","doc_count":85},{"key":"Stop 390","doc_count":84},{"key":"Stop 391","doc_count":84},{"key":"Stop 392","doc_count":82},{"key":"Stop 393","doc_count":80},{"key":"Stop 394","doc_count":80},{"key":"Stop 395","doc_count":79},{"key":"Stop 396","doc_count":78},{"key":"Stop 397","doc_count":77},{"key":"Stop 398","doc_count":77},{"key":"Stop 399","doc_count":74},{"key":"Stop 400","doc_count":72},{"key":"Stop 401","doc_count":72},{"key":"Stop 402","doc_count":71},{"key":"Stop 403","doc_count":69},{"key":"Stop 404","doc_count":68},{"key":"Stop 405","doc_count":68},{"key":"Stop 406","doc_count":66},{"key":"Stop 407","doc_count":65},{"key":"Stop 408","doc_count":63},{"key":"Stop 409","doc_count":63},{"key":"Stop 410","doc_count":62},{"key":"Stop 411","doc_count":61},{"key":"Stop 412","doc_count":60},{"key":"Stop 413","doc_count":58},{"key":"Stop 414","doc_count":58},{"key":"Stop 415","doc_count":57},{"key":"Stop 416","doc_count":57},{"key":"Stop 417","doc_count":55},{"key":"Stop 418","doc_count":55},{"key":"Stop 419","doc_count":54},{"key":"Stop 420","doc_count":52},{"key":"Stop 421","doc_count":50},{"key":"Stop 422","doc_count":50},{"key":"Stop 423","doc_count":49},{"key":"Stop 424","doc_count":49},{"key":"Stop 425","doc_count":49},{"key":"Stop 426","doc_count":48},{"key":"Stop 427","doc_count":48},{"key":"Stop 428","doc_count":44},{"key":"Stop 429","doc_count":44},{"key":"Stop 430","doc_count":44},{"key":"Stop 431","doc_count":44},{"key":"Stop 432","doc_count":44},{"key":"Stop 433","doc_count":42},{"key":"Stop 434","doc_count":42},{"key":"Stop 435","doc_count":41},{"key":"Stop 436","doc_count":41},{"key":"Stop 437","doc_count":40},{"key":"Stop 438","doc_count":40},{"key":"Stop 439","doc_count":40},{"key":"Stop 440","doc_count":39},{"key":"Stop 441","doc_count":38},{"key":"Stop 442","doc_count":38},{"key":"Stop 443","doc_count":38},{"key":"Stop 444","doc_count":37},{"key":"Stop 445","doc_count":37},{"key":"Stop 446","doc_count":37},{"key":"Stop 447","doc_count":36},{"key":"Stop 448","doc_count":36},{"key":"Stop 449","doc_count":36},{"key":"Stop 450","doc_count":36},{"key":"Stop 451","doc_count":34},{"key":"Stop 452","doc_count":32},{"key":"Stop 453","doc_count":32},{"key":"Stop 454","doc_count":32},{"key":"Stop 455","doc_count":32},{"key":"Stop 456","doc_count":32},{"key":"Stop 457","doc_count":31},{"key":"Stop 458","doc_count":31},{"key":"Stop 459","doc_count":30},{"key":"Stop 460","doc_count":30},{"key":"Stop 461","doc_count":30},{"key":"Stop 462","doc_count":30},{"key":"Stop 463","doc_count":29},{"key":"Stop 464","doc_count":29},{"key":"Stop 465","doc_count":29},{"key":"Stop 466","doc_count":28},{"key":"Stop 467","doc_count":28},{"key":"Stop 468","doc_count":27},{"key":"Stop 469","doc_count":25},{"key":"Stop 470","doc_count":25},{"key":"Stop 471","doc_count":25},{"key":"Stop 472","doc_count":24},{"key":"Stop 473","doc_count":22},{"key":"Stop 474","doc_count":22},{"key":"Stop 475","doc_count":22},{"key":"Stop 476","doc_count":22},{"key":"Stop 477","doc_count":22},{"key":"Stop 478","doc_count":21},{"key":"Stop 479","doc_count":21},{"key":"Stop 480","doc_count":21},{"key":"Stop 481","doc_count":21},{"key":"Stop 482","doc_count":20},{"key":"Stop 483","doc_count":20},{"key":"Stop 484","doc_count":20},{"key":"Stop 485","doc_count":20},{"key":"Stop 486","doc_count":19},{"key":"Stop 487","doc_count":18},{"key":"Stop 488","doc_count":18},{"key":"Stop 489","doc_count":18},{"key":"Stop 490","doc_count":17},{"key":"Stop 491","doc_count":17},{"key":"Stop 492","doc_count":17},{"key":"Stop 493","doc_count":17},{"key":"Stop 494","doc_count":17},{"key":"Stop 495","doc_count":17},{"key":"Stop 496","doc_count":16},{"key":"Stop 497","doc_count":16},{"key":"Stop 498","doc_count":16},{"key":"Stop 499","doc_count":16},{"key":"Stop 500","doc_count":16},{"key":"Stop 501","doc_count":16},{"key":"Stop 502","doc_count":15},{"key":"Stop 503","doc_count":15},{"key":"Stop 504","doc_count":15},{"key":"Stop 505","doc_count":14},{"key":"Stop 506","doc_count":14},{"key":"Stop 507","doc_count":13},{"key":"Stop 508","doc_count":13},{"key":"Stop 509","doc_count":13},{"key":"Stop 510","doc_count":13},{"key":"Stop 511","doc_count":13},{"key":"Stop 512","doc_count":12},{"key":"Stop 513","doc_count":11},{"key":"Stop 514","doc_count":11},{"key":"Stop 515","doc_count":11},{"key":"Stop 516","doc_count":11},{"key":"Stop 517","doc_count":11},{"key":"Stop 518","doc_count":10},{"key":"Stop 519","doc_count":10},{"key":"Stop 520","doc_count":10},{"key":"Stop 521","doc_count":10},{"key":"Stop 522","doc_count":10},{"key":"Stop 523","doc_count":9},{"key":"Stop 524","doc_count":9},{"key":"Stop 525","doc_count":9},{"key":"Stop 526","doc_count":9},{"key":"Stop 527","doc_count":9},{"key":"Stop 528","doc_count":9},{"key":"Stop 529","doc_count":9},{"key":"Stop 530","doc_count":8},{"key":"Stop 531","doc_count":8},{"key":"Stop 532","doc_count":8},{"key":"Stop 533","doc_count":8},{"key":"Stop 534","doc_count":8},{"key":"Stop 535","doc_count":8},{"key":"Stop 536","doc_count":7},{"key":"Stop 537","doc_count":7},{"key":"Stop 538","doc_count":7},{"key":"Stop 539","doc_count":6},{"key":"Stop 540","doc_count":6},{"key":"Stop 541","doc_count":6},{"key":"Stop 542","doc_count":6},{"key":"Stop 543","doc_count":6},{"key":"Stop 544","doc_count":6},{"key":"Stop 545","doc_count":6},{"key":"Stop 546","doc_count":6},{"key":"Stop 547","doc_count":5},{"key":"Stop 548","doc_count":5},{"key":"Stop 549","doc_count":5},{"key":"Stop 550","doc_count":5},{"key":"Stop 551","doc_count":5},{"key":"Stop 552","doc_count":5},{"key":"Stop 553","doc_count":5},{"key":"Stop 554","doc_count":5},{"key":"Stop 555","doc_count":5},{"key":"Stop 556","doc_count":4},{"key":"Stop 557","doc_count":4},{"key":"Stop 558","doc_count":4},{"key":"Stop 559","doc_count":4},{"key":"Stop 560","doc_count":4},{"key":"Stop 561","doc_count":4},{"key":"Stop 562","doc_count":4},{"key":"Stop 563","doc_count":3},{"key":"Stop 564","doc_count":3},{"key":"Stop 565","doc_count":3},{"key":"Stop 566","doc_count":3},{"key":"Stop 567","doc_count":3},{"key":"Stop 568","doc_count":3},{"key":"Stop 569","doc_count":3},{"key":"Stop 570","doc_count":3},{"key":"Stop 571","doc_count":2},{"key":"Stop 572","doc_count":2},{"key":"Stop 573","doc_count":2},{"key":"Stop 574","doc_count":2},{"key":"Stop 575","doc_count":2},{"key":"Stop 576","doc_count":2},{"key":"Stop 577","doc_count":2},{"key":"Stop 578","doc_count":2},{"key":"Stop 579","doc_count":2},{"key":"Stop 580","doc_count":2},{"key":"Stop 581","doc_count":2},{"key":"Stop 582","doc_count":2},{"key":"Stop 583","doc_count":2},{"key":"Stop 584","doc_count":2},{"key":"Stop 585","doc_count":2},{"key":"Stop 586","doc_count":2},{"key":"Stop 587","doc_count":2},{"key":"Stop 588","doc_count":2},{"key":"Stop 589","doc_count":2},{"key":"Stop 590","doc_count":1},{"key":"Stop 591","doc_count":1},{"key":"Stop 592","doc_count":1},{"key":"Stop 593","doc_count":1},{"key":"Stop 594","doc_count":1},{"key":"Stop 595","doc_count":1},{"key":"Stop 596","doc_count":1},{"key":"Stop 597","doc_count":1},{"key":"Stop 598","doc_count":1},{"key":"Stop 599","doc_count":1},{"key":"Stop 600","doc_count":1},{"key":"Stop 601","doc_count":1},{"key":"Stop 602","doc_count":1},{"key":"Stop 603","doc_count":1},{"key":"Stop 604","doc_count":1},{"key":"Stop 605","doc_count":1},{"key":"Stop 606","doc_count":1},{"key":"Stop 607","doc_count":1},{"key":"Stop 608","doc_count":1},{"key":"Stop 609","doc_count":1},{"key":"Stop 610","doc_count":1},{"key":"Stop 611","doc_count":1},{"key":"Stop 612","doc_count":1},{"key":"Stop 613","doc_count":1},{"key":"Stop 614","doc_count":1},{"key":"Stop 615","doc_count":1},{"key":"Stop 616","doc_count":1},{"key":"Stop 617","doc_count":1}]
    $scope.bar_chart = []
    $scope.testdata = [
      { key: "key one", doc_count: 200},{ key: "key two", doc_count: 180},
      { key: "key three", doc_count: 160},{ key: "key four", doc_count: 140},
      { key: "key five", doc_count: 120},{ key: "key six", doc_count: 100},
      { key: "key eight", doc_count: 80},{ key: "key seven", doc_count: 60},
      { key: "key nine", doc_count: 40},{ key: "key ten", doc_count: 20},
      { key: "key 11", doc_count: 10},{ key: "key 12", doc_count: 25},
      { key: "key 13", doc_count: 50},{ key: "key 14", doc_count: 75},
      { key: "key 15", doc_count: 85},{ key: "key 16", doc_count: 95},
      { key: "key 19", doc_count: 98},{ key: "key 18", doc_count: 94},
      { key: "key 20", doc_count: 125},{ key: "key 21", doc_count: 122}
    ];
    $scope.loading = false;
    $timeout(
      function(){
        $scope.testdata = [];
      }, 5000
    );
  };
  if ( $route.current.templateUrl == 'partials/home.html' ) {
    init();
  }

  $scope.clear_search_form = function(event){
    $scope.searchForm.$setPristine();
  }

  $scope.getRoutes = function(prefix) {
    return $http.post().then(
      function(resp) {
        var filers = [];
        angular.forEach(resp.data, function(filer) { filers.push(route.name); });
        return route;
      }
    )
  };

});