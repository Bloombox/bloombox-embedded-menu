/*
 Private source code, all rights reserved.
 @preserve Copyright 2017, Momentum Ideas Co.
*/
var $$jscomp$defineProperty$$="function"==typeof Object.defineProperties?Object.defineProperty:function($target$jscomp$59$$,$property$jscomp$6$$,$descriptor$jscomp$2$$){if($descriptor$jscomp$2$$.get||$descriptor$jscomp$2$$.set)throw new TypeError("ES3 does not support getters and setters.");$target$jscomp$59$$!=Array.prototype&&$target$jscomp$59$$!=Object.prototype&&($target$jscomp$59$$[$property$jscomp$6$$]=$descriptor$jscomp$2$$.value)},$$jscomp$global$$="undefined"!=typeof window&&window===this?
this:"undefined"!=typeof global&&null!=global?global:this;function $$jscomp$initSymbol$$(){$$jscomp$initSymbol$$=function $$$jscomp$initSymbol$$$(){};$$jscomp$global$$.Symbol||($$jscomp$global$$.Symbol=$$jscomp$Symbol$$)}var $$jscomp$symbolCounter_$$=0;function $$jscomp$Symbol$$($opt_description$jscomp$1$$){return"jscomp_symbol_"+($opt_description$jscomp$1$$||"")+$$jscomp$symbolCounter_$$++}
function $$jscomp$initSymbolIterator$$(){$$jscomp$initSymbol$$();var $symbolIterator$$=$$jscomp$global$$.Symbol.iterator;$symbolIterator$$||($symbolIterator$$=$$jscomp$global$$.Symbol.iterator=$$jscomp$global$$.Symbol("iterator"));"function"!=typeof Array.prototype[$symbolIterator$$]&&$$jscomp$defineProperty$$(Array.prototype,$symbolIterator$$,{configurable:!0,writable:!0,value:function(){return $$jscomp$arrayIterator$$(this)}});$$jscomp$initSymbolIterator$$=function $$$jscomp$initSymbolIterator$$$(){}}
function $$jscomp$arrayIterator$$($array$jscomp$5$$){var $index$jscomp$43$$=0;return $$jscomp$iteratorPrototype$$(function(){return $index$jscomp$43$$<$array$jscomp$5$$.length?{done:!1,value:$array$jscomp$5$$[$index$jscomp$43$$++]}:{done:!0}})}
function $$jscomp$iteratorPrototype$$($iterator$jscomp$6_next$$){$$jscomp$initSymbolIterator$$();$iterator$jscomp$6_next$$={next:$iterator$jscomp$6_next$$};$iterator$jscomp$6_next$$[$$jscomp$global$$.Symbol.iterator]=function $$iterator$jscomp$6_next$$$$$jscomp$global$$$Symbol$iterator$(){return this};return $iterator$jscomp$6_next$$}
function $$jscomp$polyfill$$($property$jscomp$7_split_target$jscomp$60$$,$impl_polyfill$$){if($impl_polyfill$$){var $obj$jscomp$25$$=$$jscomp$global$$;$property$jscomp$7_split_target$jscomp$60$$=$property$jscomp$7_split_target$jscomp$60$$.split(".");for(var $i$jscomp$3_orig$$=0;$i$jscomp$3_orig$$<$property$jscomp$7_split_target$jscomp$60$$.length-1;$i$jscomp$3_orig$$++){var $key$jscomp$31$$=$property$jscomp$7_split_target$jscomp$60$$[$i$jscomp$3_orig$$];$key$jscomp$31$$ in $obj$jscomp$25$$||($obj$jscomp$25$$[$key$jscomp$31$$]=
{});$obj$jscomp$25$$=$obj$jscomp$25$$[$key$jscomp$31$$]}$property$jscomp$7_split_target$jscomp$60$$=$property$jscomp$7_split_target$jscomp$60$$[$property$jscomp$7_split_target$jscomp$60$$.length-1];$i$jscomp$3_orig$$=$obj$jscomp$25$$[$property$jscomp$7_split_target$jscomp$60$$];$impl_polyfill$$=$impl_polyfill$$($i$jscomp$3_orig$$);$impl_polyfill$$!=$i$jscomp$3_orig$$&&null!=$impl_polyfill$$&&$$jscomp$defineProperty$$($obj$jscomp$25$$,$property$jscomp$7_split_target$jscomp$60$$,{configurable:!0,writable:!0,
value:$impl_polyfill$$})}}
$$jscomp$polyfill$$("Array.from",function($orig$jscomp$1$$){return $orig$jscomp$1$$?$orig$jscomp$1$$:function($arrayLike$jscomp$1$$,$opt_mapFn$jscomp$10$$,$opt_thisArg$jscomp$7$$){$$jscomp$initSymbolIterator$$();$opt_mapFn$jscomp$10$$=$opt_mapFn$jscomp$10$$?$opt_mapFn$jscomp$10$$:function($x$jscomp$66$$){return $x$jscomp$66$$};var $result$$=[],$iteratorFunction_len_next$jscomp$1$$=$arrayLike$jscomp$1$$[Symbol.iterator];if("function"==typeof $iteratorFunction_len_next$jscomp$1$$)for($arrayLike$jscomp$1$$=$iteratorFunction_len_next$jscomp$1$$.call($arrayLike$jscomp$1$$);!($iteratorFunction_len_next$jscomp$1$$=
$arrayLike$jscomp$1$$.next()).done;)$result$$.push($opt_mapFn$jscomp$10$$.call($opt_thisArg$jscomp$7$$,$iteratorFunction_len_next$jscomp$1$$.value));else for(var $iteratorFunction_len_next$jscomp$1$$=$arrayLike$jscomp$1$$.length,$i$jscomp$4$$=0;$i$jscomp$4$$<$iteratorFunction_len_next$jscomp$1$$;$i$jscomp$4$$++)$result$$.push($opt_mapFn$jscomp$10$$.call($opt_thisArg$jscomp$7$$,$arrayLike$jscomp$1$$[$i$jscomp$4$$]));return $result$$}});
$$jscomp$polyfill$$("String.prototype.startsWith",function($orig$jscomp$2$$){return $orig$jscomp$2$$?$orig$jscomp$2$$:function($searchString$jscomp$3$$,$i$jscomp$5_opt_position$jscomp$3$$){var $string$jscomp$3$$;if(null==this)throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");if($searchString$jscomp$3$$ instanceof RegExp)throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");$string$jscomp$3$$=this+"";
$searchString$jscomp$3$$+="";var $strLen$$=$string$jscomp$3$$.length,$searchLen$$=$searchString$jscomp$3$$.length;$i$jscomp$5_opt_position$jscomp$3$$=Math.max(0,Math.min($i$jscomp$5_opt_position$jscomp$3$$|0,$string$jscomp$3$$.length));for(var $j$$=0;$j$$<$searchLen$$&&$i$jscomp$5_opt_position$jscomp$3$$<$strLen$$;)if($string$jscomp$3$$[$i$jscomp$5_opt_position$jscomp$3$$++]!=$searchString$jscomp$3$$[$j$$++])return!1;return $j$$>=$searchLen$$}});
$$jscomp$polyfill$$("Object.assign",function($orig$jscomp$3$$){return $orig$jscomp$3$$?$orig$jscomp$3$$:function($target$jscomp$61$$,$var_args$jscomp$54$$){for(var $i$jscomp$6$$=1;$i$jscomp$6$$<arguments.length;$i$jscomp$6$$++){var $source$jscomp$13$$=arguments[$i$jscomp$6$$];if($source$jscomp$13$$)for(var $key$jscomp$32$$ in $source$jscomp$13$$)Object.prototype.hasOwnProperty.call($source$jscomp$13$$,$key$jscomp$32$$)&&($target$jscomp$61$$[$key$jscomp$32$$]=$source$jscomp$13$$[$key$jscomp$32$$])}return $target$jscomp$61$$}});
window.__debug__=window.__debug=!0;function $_sendLog$$($severity$$,$items_module$jscomp$1$$,$messages$$){$items_module$jscomp$1$$=["["+$items_module$jscomp$1$$+"]: "+$messages$$[0]].concat($messages$$.slice(1));switch($severity$$){case 0:console.info.apply(console,$items_module$jscomp$1$$);break;case 1:console.warn.apply(console,$items_module$jscomp$1$$);break;case 2:console.error.apply(console,$items_module$jscomp$1$$);break;case 3:console.error.apply(console,$items_module$jscomp$1$$);break;default:console.log.apply(console,$items_module$jscomp$1$$)}}
var $Logging$$={say:function say($module$jscomp$2$$,$var_args$jscomp$56$$){$_sendLog$$(-1,$module$jscomp$2$$,Array.from(arguments).slice(1))},info:function info($module$jscomp$3$$,$var_args$jscomp$57$$){$_sendLog$$(0,$module$jscomp$3$$,Array.from(arguments).slice(1))},warn:function warn($module$jscomp$4$$,$var_args$jscomp$58$$){$_sendLog$$(1,$module$jscomp$4$$,Array.from(arguments).slice(1))},error:function error($module$jscomp$5$$,$var_args$jscomp$59$$){$_sendLog$$(2,$module$jscomp$5$$,Array.from(arguments).slice(1))},
severe:function severe($module$jscomp$6$$,$var_args$jscomp$60$$){$_sendLog$$(3,$module$jscomp$6$$,Array.from(arguments).slice(1))}};window.Logging=$Logging$$;function $HashedItem$$(){}function $AlgorithmNotSupported$$(){this.name="AlgorithmNotSupported"}
function $_md5cycle$$($x$jscomp$67$$,$k$$){var $a$$=$x$jscomp$67$$[0],$b$$=$x$jscomp$67$$[1],$c$$=$x$jscomp$67$$[2],$d$$=$x$jscomp$67$$[3],$a$$=$ff$$($a$$,$b$$,$c$$,$d$$,$k$$[0],7,-680876936),$d$$=$ff$$($d$$,$a$$,$b$$,$c$$,$k$$[1],12,-389564586),$c$$=$ff$$($c$$,$d$$,$a$$,$b$$,$k$$[2],17,606105819),$b$$=$ff$$($b$$,$c$$,$d$$,$a$$,$k$$[3],22,-1044525330),$a$$=$ff$$($a$$,$b$$,$c$$,$d$$,$k$$[4],7,-176418897),$d$$=$ff$$($d$$,$a$$,$b$$,$c$$,$k$$[5],12,1200080426),$c$$=$ff$$($c$$,$d$$,$a$$,$b$$,$k$$[6],17,
-1473231341),$b$$=$ff$$($b$$,$c$$,$d$$,$a$$,$k$$[7],22,-45705983),$a$$=$ff$$($a$$,$b$$,$c$$,$d$$,$k$$[8],7,1770035416),$d$$=$ff$$($d$$,$a$$,$b$$,$c$$,$k$$[9],12,-1958414417),$c$$=$ff$$($c$$,$d$$,$a$$,$b$$,$k$$[10],17,-42063),$b$$=$ff$$($b$$,$c$$,$d$$,$a$$,$k$$[11],22,-1990404162),$a$$=$ff$$($a$$,$b$$,$c$$,$d$$,$k$$[12],7,1804603682),$d$$=$ff$$($d$$,$a$$,$b$$,$c$$,$k$$[13],12,-40341101),$c$$=$ff$$($c$$,$d$$,$a$$,$b$$,$k$$[14],17,-1502002290),$b$$=$ff$$($b$$,$c$$,$d$$,$a$$,$k$$[15],22,1236535329),$a$$=
$gg$$($a$$,$b$$,$c$$,$d$$,$k$$[1],5,-165796510),$d$$=$gg$$($d$$,$a$$,$b$$,$c$$,$k$$[6],9,-1069501632),$c$$=$gg$$($c$$,$d$$,$a$$,$b$$,$k$$[11],14,643717713),$b$$=$gg$$($b$$,$c$$,$d$$,$a$$,$k$$[0],20,-373897302),$a$$=$gg$$($a$$,$b$$,$c$$,$d$$,$k$$[5],5,-701558691),$d$$=$gg$$($d$$,$a$$,$b$$,$c$$,$k$$[10],9,38016083),$c$$=$gg$$($c$$,$d$$,$a$$,$b$$,$k$$[15],14,-660478335),$b$$=$gg$$($b$$,$c$$,$d$$,$a$$,$k$$[4],20,-405537848),$a$$=$gg$$($a$$,$b$$,$c$$,$d$$,$k$$[9],5,568446438),$d$$=$gg$$($d$$,$a$$,$b$$,
$c$$,$k$$[14],9,-1019803690),$c$$=$gg$$($c$$,$d$$,$a$$,$b$$,$k$$[3],14,-187363961),$b$$=$gg$$($b$$,$c$$,$d$$,$a$$,$k$$[8],20,1163531501),$a$$=$gg$$($a$$,$b$$,$c$$,$d$$,$k$$[13],5,-1444681467),$d$$=$gg$$($d$$,$a$$,$b$$,$c$$,$k$$[2],9,-51403784),$c$$=$gg$$($c$$,$d$$,$a$$,$b$$,$k$$[7],14,1735328473),$b$$=$gg$$($b$$,$c$$,$d$$,$a$$,$k$$[12],20,-1926607734),$a$$=$cmn$$($b$$^$c$$^$d$$,$a$$,$b$$,$k$$[5],4,-378558),$d$$=$cmn$$($a$$^$b$$^$c$$,$d$$,$a$$,$k$$[8],11,-2022574463),$c$$=$cmn$$($d$$^$a$$^$b$$,$c$$,
$d$$,$k$$[11],16,1839030562),$b$$=$cmn$$($c$$^$d$$^$a$$,$b$$,$c$$,$k$$[14],23,-35309556),$a$$=$cmn$$($b$$^$c$$^$d$$,$a$$,$b$$,$k$$[1],4,-1530992060),$d$$=$cmn$$($a$$^$b$$^$c$$,$d$$,$a$$,$k$$[4],11,1272893353),$c$$=$cmn$$($d$$^$a$$^$b$$,$c$$,$d$$,$k$$[7],16,-155497632),$b$$=$cmn$$($c$$^$d$$^$a$$,$b$$,$c$$,$k$$[10],23,-1094730640),$a$$=$cmn$$($b$$^$c$$^$d$$,$a$$,$b$$,$k$$[13],4,681279174),$d$$=$cmn$$($a$$^$b$$^$c$$,$d$$,$a$$,$k$$[0],11,-358537222),$c$$=$cmn$$($d$$^$a$$^$b$$,$c$$,$d$$,$k$$[3],16,-722521979),
$b$$=$cmn$$($c$$^$d$$^$a$$,$b$$,$c$$,$k$$[6],23,76029189),$a$$=$cmn$$($b$$^$c$$^$d$$,$a$$,$b$$,$k$$[9],4,-640364487),$d$$=$cmn$$($a$$^$b$$^$c$$,$d$$,$a$$,$k$$[12],11,-421815835),$c$$=$cmn$$($d$$^$a$$^$b$$,$c$$,$d$$,$k$$[15],16,530742520),$b$$=$cmn$$($c$$^$d$$^$a$$,$b$$,$c$$,$k$$[2],23,-995338651),$a$$=$ii$$($a$$,$b$$,$c$$,$d$$,$k$$[0],6,-198630844),$d$$=$ii$$($d$$,$a$$,$b$$,$c$$,$k$$[7],10,1126891415),$c$$=$ii$$($c$$,$d$$,$a$$,$b$$,$k$$[14],15,-1416354905),$b$$=$ii$$($b$$,$c$$,$d$$,$a$$,$k$$[5],21,
-57434055),$a$$=$ii$$($a$$,$b$$,$c$$,$d$$,$k$$[12],6,1700485571),$d$$=$ii$$($d$$,$a$$,$b$$,$c$$,$k$$[3],10,-1894986606),$c$$=$ii$$($c$$,$d$$,$a$$,$b$$,$k$$[10],15,-1051523),$b$$=$ii$$($b$$,$c$$,$d$$,$a$$,$k$$[1],21,-2054922799),$a$$=$ii$$($a$$,$b$$,$c$$,$d$$,$k$$[8],6,1873313359),$d$$=$ii$$($d$$,$a$$,$b$$,$c$$,$k$$[15],10,-30611744),$c$$=$ii$$($c$$,$d$$,$a$$,$b$$,$k$$[6],15,-1560198380),$b$$=$ii$$($b$$,$c$$,$d$$,$a$$,$k$$[13],21,1309151649),$a$$=$ii$$($a$$,$b$$,$c$$,$d$$,$k$$[4],6,-145523070),$d$$=
$ii$$($d$$,$a$$,$b$$,$c$$,$k$$[11],10,-1120210379),$c$$=$ii$$($c$$,$d$$,$a$$,$b$$,$k$$[2],15,718787259),$b$$=$ii$$($b$$,$c$$,$d$$,$a$$,$k$$[9],21,-343485551);$x$jscomp$67$$[0]=$add32$$($a$$,$x$jscomp$67$$[0]);$x$jscomp$67$$[1]=$add32$$($b$$,$x$jscomp$67$$[1]);$x$jscomp$67$$[2]=$add32$$($c$$,$x$jscomp$67$$[2]);$x$jscomp$67$$[3]=$add32$$($d$$,$x$jscomp$67$$[3])}
function $cmn$$($q$$,$a$jscomp$1$$,$b$jscomp$1$$,$x$jscomp$68$$,$s$jscomp$2$$,$t$$){$a$jscomp$1$$=$add32$$($add32$$($a$jscomp$1$$,$q$$),$add32$$($x$jscomp$68$$,$t$$));return $add32$$($a$jscomp$1$$<<$s$jscomp$2$$|$a$jscomp$1$$>>>32-$s$jscomp$2$$,$b$jscomp$1$$)}
function $ff$$($a$jscomp$2$$,$b$jscomp$2$$,$c$jscomp$1$$,$d$jscomp$1$$,$x$jscomp$69$$,$s$jscomp$3$$,$t$jscomp$1$$){return $cmn$$($b$jscomp$2$$&$c$jscomp$1$$|~$b$jscomp$2$$&$d$jscomp$1$$,$a$jscomp$2$$,$b$jscomp$2$$,$x$jscomp$69$$,$s$jscomp$3$$,$t$jscomp$1$$)}
function $gg$$($a$jscomp$3$$,$b$jscomp$3$$,$c$jscomp$2$$,$d$jscomp$2$$,$x$jscomp$70$$,$s$jscomp$4$$,$t$jscomp$2$$){return $cmn$$($b$jscomp$3$$&$d$jscomp$2$$|$c$jscomp$2$$&~$d$jscomp$2$$,$a$jscomp$3$$,$b$jscomp$3$$,$x$jscomp$70$$,$s$jscomp$4$$,$t$jscomp$2$$)}
function $ii$$($a$jscomp$5$$,$b$jscomp$5$$,$c$jscomp$4$$,$d$jscomp$4$$,$x$jscomp$72$$,$s$jscomp$6$$,$t$jscomp$4$$){return $cmn$$($c$jscomp$4$$^($b$jscomp$5$$|~$d$jscomp$4$$),$a$jscomp$5$$,$b$jscomp$5$$,$x$jscomp$72$$,$s$jscomp$6$$,$t$jscomp$4$$)}
function $md51$$($s$jscomp$7$$){var $n$jscomp$3$$=$s$jscomp$7$$.length,$state$$=[1732584193,-271733879,-1732584194,271733878],$i$jscomp$8$$;for($i$jscomp$8$$=64;$i$jscomp$8$$<=$s$jscomp$7$$.length;$i$jscomp$8$$+=64){var $i$jscomp$inline_12_tail$$,$s$jscomp$inline_10$$=$s$jscomp$7$$.substring($i$jscomp$8$$-64,$i$jscomp$8$$),$md5blks$jscomp$inline_11$$=[];for($i$jscomp$inline_12_tail$$=0;64>$i$jscomp$inline_12_tail$$;$i$jscomp$inline_12_tail$$+=4)$md5blks$jscomp$inline_11$$[$i$jscomp$inline_12_tail$$>>
2]=$s$jscomp$inline_10$$.charCodeAt($i$jscomp$inline_12_tail$$)+($s$jscomp$inline_10$$.charCodeAt($i$jscomp$inline_12_tail$$+1)<<8)+($s$jscomp$inline_10$$.charCodeAt($i$jscomp$inline_12_tail$$+2)<<16)+($s$jscomp$inline_10$$.charCodeAt($i$jscomp$inline_12_tail$$+3)<<24);$_md5cycle$$($state$$,$md5blks$jscomp$inline_11$$)}$s$jscomp$7$$=$s$jscomp$7$$.substring($i$jscomp$8$$-64);$i$jscomp$inline_12_tail$$=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for($i$jscomp$8$$=0;$i$jscomp$8$$<$s$jscomp$7$$.length;$i$jscomp$8$$++)$i$jscomp$inline_12_tail$$[$i$jscomp$8$$>>
2]|=$s$jscomp$7$$.charCodeAt($i$jscomp$8$$)<<($i$jscomp$8$$%4<<3);$i$jscomp$inline_12_tail$$[$i$jscomp$8$$>>2]|=128<<($i$jscomp$8$$%4<<3);if(55<$i$jscomp$8$$)for($_md5cycle$$($state$$,$i$jscomp$inline_12_tail$$),$i$jscomp$8$$=0;16>$i$jscomp$8$$;$i$jscomp$8$$++)$i$jscomp$inline_12_tail$$[$i$jscomp$8$$]=0;$i$jscomp$inline_12_tail$$[14]=8*$n$jscomp$3$$;$_md5cycle$$($state$$,$i$jscomp$inline_12_tail$$);return $state$$}var $hex_chr$$="0123456789abcdef".split("");
function $internalHex$$($x$jscomp$73$$){for(var $i$jscomp$10$$=0;$i$jscomp$10$$<$x$jscomp$73$$.length;$i$jscomp$10$$++){for(var $n$jscomp$inline_14$$=$x$jscomp$73$$[$i$jscomp$10$$],$s$jscomp$inline_15$$="",$j$jscomp$inline_16$$=0;4>$j$jscomp$inline_16$$;$j$jscomp$inline_16$$++)$s$jscomp$inline_15$$+=$hex_chr$$[$n$jscomp$inline_14$$>>8*$j$jscomp$inline_16$$+4&15]+$hex_chr$$[$n$jscomp$inline_14$$>>8*$j$jscomp$inline_16$$&15];$x$jscomp$73$$[$i$jscomp$10$$]=$s$jscomp$inline_15$$}return $x$jscomp$73$$.join("")}
function $add32$$($a$jscomp$6$$,$b$jscomp$6$$){return $a$jscomp$6$$+$b$jscomp$6$$&4294967295}function $add32Alt$$($x$jscomp$74$$,$y$jscomp$51$$){var $lsw$$=($x$jscomp$74$$&65535)+($y$jscomp$51$$&65535);return($x$jscomp$74$$>>16)+($y$jscomp$51$$>>16)+($lsw$$>>16)<<16|$lsw$$&65535}"5d41402abc4b2a76b9719d911017c592"!==$internalHex$$($md51$$("hello"))&&($add32$$=$add32Alt$$);
window.hash=function hash($subject$$,$callback$jscomp$76$$,$algo_opt_algorithm$$){var $crypto$$=window.crypto||window.msCrypto||window.webkitCrypto||!1,$buffer$jscomp$9$$;if(!1===$crypto$$){if($algo_opt_algorithm$$&&"MD5"!==$algo_opt_algorithm$$)throw new $AlgorithmNotSupported$$;$callback$jscomp$76$$(new $HashedItem$$($internalHex$$($md51$$($subject$$))))}else{$buffer$jscomp$9$$=(new window.TextEncoder("utf-8")).encode($subject$$);if($algo_opt_algorithm$$)if("SHA-1"===$algo_opt_algorithm$$)$algo_opt_algorithm$$=
"SHA-1";else if("MD5"===$algo_opt_algorithm$$)$algo_opt_algorithm$$="MD5";else throw new $AlgorithmNotSupported$$;else $algo_opt_algorithm$$="SHA-1";$Logging$$.$say$("Hash","Hashing with algorithm: "+$algo_opt_algorithm$$+".");"MD5"===$algo_opt_algorithm$$?$callback$jscomp$76$$(new $HashedItem$$($internalHex$$($md51$$($subject$$)))):$crypto$$.subtle.digest($algo_opt_algorithm$$,$buffer$jscomp$9$$).then(function($hash$jscomp$1_view$jscomp$inline_20$$){var $hexCodes$jscomp$inline_19$$=[];$hash$jscomp$1_view$jscomp$inline_20$$=
new DataView($hash$jscomp$1_view$jscomp$inline_20$$);for(var $i$jscomp$inline_21$$=0;$i$jscomp$inline_21$$<$hash$jscomp$1_view$jscomp$inline_20$$.byteLength;$i$jscomp$inline_21$$+=4){var $paddedValue$jscomp$inline_22$$=("00000000"+$hash$jscomp$1_view$jscomp$inline_20$$.getUint32($i$jscomp$inline_21$$).toString(16)).slice(-8);$hexCodes$jscomp$inline_19$$.push($paddedValue$jscomp$inline_22$$)}$callback$jscomp$76$$(new $HashedItem$$)})}};window.Algorithm={$MD5$:"MD5",$SHA1$:"SHA1"};
window.HashedItem=$HashedItem$$;function $setupPolymer$$($callback$jscomp$80$$){if("registerElement"in document&&"import"in document.createElement("link")&&"content"in document.createElement("template"))$Logging$$.$say$("Common:Polymer","User agent natively supports Web Components."),$callback$jscomp$80$$();else{$Logging$$.$say$("Common:Polymer","Loading Web Components support.");var $e$jscomp$4$$=document.createElement("script");$e$jscomp$4$$.src="/assets/scripts/lib/components.js";$e$jscomp$4$$.onload=function $$e$jscomp$4$$$onload$(){$callback$jscomp$80$$()};
document.head.appendChild($e$jscomp$4$$)}};function $RPC$$($api$jscomp$1_method$jscomp$inline_28$$,$method$jscomp$5$$,$props$jscomp$2$$,$opt_payload_payload$jscomp$inline_27$$){this.api=$api$jscomp$1_method$jscomp$inline_28$$;this.method=$method$jscomp$5$$;$opt_payload_payload$jscomp$inline_27$$=this.$b$=$opt_payload_payload$jscomp$inline_27$$||null;$api$jscomp$1_method$jscomp$inline_28$$=window.gapi.client[$api$jscomp$1_method$jscomp$inline_28$$][$method$jscomp$5$$];this.$a$=$opt_payload_payload$jscomp$inline_27$$?$api$jscomp$1_method$jscomp$inline_28$$($props$jscomp$2$$,
$opt_payload_payload$jscomp$inline_27$$):$api$jscomp$1_method$jscomp$inline_28$$($props$jscomp$2$$)}
$RPC$$.prototype.then=function $$RPC$$$$then$($cbk$$,$err$jscomp$3$$){var $that$$=this;this.$a$.then(function($response$jscomp$1$$){null!==$response$jscomp$1$$&&200===$response$jscomp$1$$.status?($Logging$$.$say$("API","Received response for RPC.",{$rpc$:$that$$,response:$response$jscomp$1$$}),$cbk$$($response$jscomp$1$$)):($Logging$$.error("API","Received empty or invalid response for RPC.",{$rpc$:$that$$,response:$response$jscomp$1$$}),$err$jscomp$3$$(null))},function($reason$jscomp$5$$){$Logging$$.error("API",
"Received error response for RPC.",{$rpc$:$that$$,reason:$reason$jscomp$5$$});$err$jscomp$3$$($reason$jscomp$5$$)});return this.$a$};window.RPC=$RPC$$;function $resolveSimple$$($nodeList_nodeList$1_spec$$){return $nodeList_nodeList$1_spec$$&&"string"===typeof $nodeList_nodeList$1_spec$$?$nodeList_nodeList$1_spec$$.startsWith("#")?document.getElementById($nodeList_nodeList$1_spec$$.substr(1)):($nodeList_nodeList$1_spec$$=$nodeList_nodeList$1_spec$$.startsWith(".")?document.getElementsByClassName($nodeList_nodeList$1_spec$$.substr(1)):document.getElementsByTagName($nodeList_nodeList$1_spec$$.substr(1)))&&0<$nodeList_nodeList$1_spec$$.length?$nodeList_nodeList$1_spec$$.item(0):
null:$nodeList_nodeList$1_spec$$?$nodeList_nodeList$1_spec$$:null};var $assetDomain$$=-1!==window.location.href.indexOf("localhost:")?"":"https://app.bloomware.media",$bloomboxEmbedState$$={state:{node:null,$js$:!1,$html$:!1,$entrypoint$:null},$config$:Object.assign({},{apikey:null,partner:null,location:null,version:"v1",component:$assetDomain$$+"/assets/scripts/lib/embed/bundled.opt.html",logic:$assetDomain$$+"/assets/scripts/lib/embed/component.opt.js",entrypoint:"bloombox-embedded-menu",defer:!1})};
function $MissingEmbedConfig$$(){this.name="MissingEmbedConfig"}
function $installWidgetry$$($target$jscomp$62$$,$config$jscomp$2$$,$callback$jscomp$81$$){var $head$$=document.head,$body$jscomp$1$$=document.body,$linkElement$$=document.createElement("link"),$windowState$$=$target$jscomp$62$$.__bbembed__;$linkElement$$.setAttribute("rel","import");$linkElement$$.setAttribute("href",$config$jscomp$2$$.component);$linkElement$$.addEventListener("load",function(){$Logging$$.$say$("Embed","Loaded component HTML.");$windowState$$.$html$=!0;var $scriptElement$$=document.createElement("script");
$scriptElement$$.setAttribute("type","text/javascript");$scriptElement$$.setAttribute("src",$config$jscomp$2$$.logic);$scriptElement$$.addEventListener("load",function(){$Logging$$.$say$("Embed","Loaded component JS.");$windowState$$.$js$=!0;$callback$jscomp$81$$()},!1);!0===$config$jscomp$2$$.defer?($scriptElement$$.setAttribute("async","async"),$scriptElement$$.setAttribute("defer","defer"),$body$jscomp$1$$.appendChild($scriptElement$$)):$head$$.appendChild($scriptElement$$)},!1);!0===$config$jscomp$2$$.defer?
$body$jscomp$1$$.appendChild($linkElement$$):$head$$.appendChild($linkElement$$)}function $_validString$$($subject$jscomp$3$$){return"string"===typeof $subject$jscomp$3$$&&1<$subject$jscomp$3$$.length}
function $setup$$($node$jscomp$16$$,$userConfig$$){var $target$jscomp$64$$=window,$config$jscomp$4$$=Object.assign({},$bloomboxEmbedState$$.$config$,$userConfig$$||{});$Logging$$.info("Embed","Setting up Bloombox embed layer.",{target:$target$jscomp$64$$,config:$config$jscomp$4$$,node:$node$jscomp$16$$});$target$jscomp$64$$.__bbembed__=Object.assign({},$bloomboxEmbedState$$);"Polymer"in $target$jscomp$64$$||($target$jscomp$64$$.Polymer={dom:"shadow",lazyRegister:!0});var $targetNode$$=$resolveSimple$$($node$jscomp$16$$);
$Logging$$.$say$("Embed","Resolved target node.",{node:$targetNode$$});$target$jscomp$64$$.__bbembed__.state.node=$targetNode$$;$setupPolymer$$(function(){$Logging$$.$say$("Embed","Polymer layer ready. Installing widget code...",$config$jscomp$4$$);$installWidgetry$$($target$jscomp$64$$,$config$jscomp$4$$,function(){var $el$jscomp$10$$=document.createElement($config$jscomp$4$$.entrypoint);if(!$config$jscomp$4$$.apikey||!$_validString$$($config$jscomp$4$$.apikey))throw new $MissingEmbedConfig$$;if(!$config$jscomp$4$$.partner||
!$_validString$$($config$jscomp$4$$.partner))throw new $MissingEmbedConfig$$;if(!$config$jscomp$4$$.location||!$_validString$$($config$jscomp$4$$.location))throw new $MissingEmbedConfig$$;$el$jscomp$10$$.setAttribute("partner",$config$jscomp$4$$.partner);$el$jscomp$10$$.setAttribute("location",$config$jscomp$4$$.location);$el$jscomp$10$$.setAttribute("apikey",$config$jscomp$4$$.apikey);$Logging$$.info("Embed","Embed system is ready.",{config:$config$jscomp$4$$,component:$el$jscomp$10$$,target:$target$jscomp$64$$});
$targetNode$$.innerHTML="";setTimeout(function(){Polymer.dom($targetNode$$).appendChild($el$jscomp$10$$)},0)})})}window.bloombox={init:function init($node$jscomp$17$$,$config$jscomp$5$$){$setup$$($node$jscomp$17$$,$config$jscomp$5$$)}};window.__bb_debug=!0;
(function autoboot($scriptElement$jscomp$1$$){try{if($scriptElement$jscomp$1$$){var $apikey$$=$scriptElement$jscomp$1$$.getAttribute("data-bloombox-apikey"),$partnerId$$=$scriptElement$jscomp$1$$.getAttribute("data-bloombox-partner"),$locationId$$=$scriptElement$jscomp$1$$.getAttribute("data-bloombox-location"),$selectorId$$=$scriptElement$jscomp$1$$.getAttribute("data-bloombox-selector");$_validString$$($apikey$$)&&$_validString$$($partnerId$$)&&$_validString$$($locationId$$)&&$_validString$$($selectorId$$)&&
setTimeout(function(){$setup$$($selectorId$$,{apikey:$apikey$$,partner:$partnerId$$,location:$locationId$$,defer:!0})},0)}}catch($err$jscomp$4$$){$Logging$$.$say$("Embed","Autoboot failed to proceed. Continuing.",$err$jscomp$4$$)}})(document.getElementById("bbembed"));