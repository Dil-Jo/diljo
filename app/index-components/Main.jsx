"use client";
import { useRef } from "react";
import White from "../../assets/White.svg";
import "./Main.css";

export default function Main() {
  const videoContainerRef = useRef(null);

  function clickCoolButton() {
    const scrollHeight = window.innerHeight - 50;
    const element = document.querySelector("#coolscrolldownbutton");

    if (
      document.body.scrollTop === scrollHeight ||
      document.documentElement.scrollTop === scrollHeight
    ) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="-mt-[4.49rem] grid h-screen w-full place-items-end bg-black">
      <div>
        {/*<svg*/}
        {/*  id="svg113"*/}
        {/*  width="978"*/}
        {/*  height="1024"*/}
        {/*  viewBox="0 0 978 1024"*/}
        {/*  xmlns="http://www.w3.org/2000/svg"*/}
        {/*>*/}
        {/*  <clipPath clipPathUnits="userSpaceOnUse" id="clipPath14684">*/}
        {/*    <path*/}
        {/*      id="path14686"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 489.37109,115.46875 c -0.47182,0.51599 -1.07301,1.09353 -1.57226,1.625 0.0832,0.0318 0.16434,0.0535 0.24805,0.0879 0.41141,-0.4023 0.82631,-0.80093 1.23828,-1.20312 0.0311,-0.16948 0.0547,-0.34031 0.0859,-0.50977 z m 10.8711,12.74609 c -1.22316,7.0375 -2.37802,14.08738 -3.40235,21.16016 -2.00832,12.0462 -4.20402,24.05738 -6.32031,36.08398 -1.20717,7.18558 -2.80954,14.29122 -5.41601,21.11524 -1.00042,3.08609 -2.1859,6.10101 -3.34766,9.125 l 32.9043,148.59961 1.38672,5.51562 c -1.36812,0.0255 -3.39844,0.0723 -3.39844,0.0723 l -16.8711,-9.08594 -10.91406,-0.99219 c -1.40584,-0.0773 -2.81237,-0.14286 -4.21875,-0.21093 -10.44146,0.40938 -20.88904,0.76994 -31.30859,1.5664 -15.65295,1.27215 -31.25196,3.14777 -46.85938,4.88086 -6.23862,0.81653 -12.48717,1.55421 -18.73828,2.25 l 48.41602,6.50977 c -7.16227,2.84261 -64.19278,25.33406 -93.41602,31.42187 -24.05258,5.01146 -47.5493,15.08847 -75.49219,18.28711 -5.0165,12.58235 -10.91257,24.76726 -16.98047,36.86524 33.74204,-4.33137 91.91835,-15.07004 127.51368,-40.87696 36.69519,-26.60408 -15.39339,19.42721 -55.07618,65.19922 2.65539,2.27822 2.70774,7.21199 -2.48632,11.78321 -5.03704,4.43208 -8.88538,10.0035 -12.48438,15.61328 -0.39683,0.69434 -0.70392,1.43433 -1.07226,2.14257 -0.4629,2.36582 -1.42479,4.10924 -2.625,5.23829 -0.11145,0.23561 -0.23783,0.46379 -0.34961,0.69921 -1.15516,7.82742 -2.50647,15.62206 -3.69727,23.44336 -1.26544,7.30336 -2.26151,14.64633 -2.9668,22.02344 -1.02224,5.9168 -2.05073,11.84479 -3.35156,17.70703 -0.94772,4.23785 -0.48863,2.14364 -1.3789,6.28125 -1.91373,8.88973 -8.82555,10.11199 -11.74414,5.61719 -1.02992,3.96636 -2.05773,7.93393 -3.09961,11.89648 -0.88314,3.35761 -2.44599,5.55704 -4.18946,6.74805 -1.09738,19.72196 -0.60351,34.02734 -0.60351,34.02735 0,0 6.49331,63.59877 44.12695,97.33984 3.36014,3.01254 6.54305,5.94567 9.76563,8.89648 0.21021,0.12851 0.42791,0.24563 0.63867,0.375 2.89013,1.7761 5.81202,3.53901 8.82617,5.10547 3.57059,2.01063 7.12499,4.11165 10.44531,6.51758 3.14441,2.04863 6.16796,4.28743 9.31641,6.32813 3.31434,1.96751 6.58273,3.96754 10.02734,5.70117 3.32033,1.52279 6.50222,3.31309 9.83399,4.82226 3.48531,1.1173 6.9041,2.41275 10.3164,3.73438 3.76726,1.41534 7.55008,2.78276 11.37891,4.02539 4.50624,1.05158 8.90717,2.47075 13.3418,3.78125 1.35226,0.40705 2.65772,0.94459 3.98828,1.41015 0.65292,0.0402 1.30627,0.0713 1.95898,0.1211 4.6602,0.33953 9.21987,1.41507 13.79297,2.35547 2.41937,0.007 4.83871,0.0239 7.25781,0.0273 1.84436,0.006 3.68754,0.002 5.53125,-0.002 40.75314,-7.25104 51.94202,1.5957 106.03321,-46.55078 2.34473,-3.91222 5.27288,-7.33781 9.32031,-10.75977 0.70391,-0.55923 1.42013,-1.0997 2.14062,-1.63281 0.80235,-1.06997 1.63702,-2.11148 2.39258,-3.22266 2.71888,-3.54514 5.39717,-7.10194 7.76953,-10.89648 2.0566,-3.00389 3.99391,-6.08879 6.20703,-8.98047 1.03844,-1.50333 2.12139,-2.90415 5.88282,-8.66797 1.13002,-2.03853 2.33235,-4.03995 3.39257,-6.11523 3.75605,-7.3553 6.58488,-15.15522 9.44922,-22.89844 0.29342,-2.24926 0.63251,-4.49124 1.09766,-6.71289 0.69186,-3.59613 0.83167,-7.2291 1.35937,-10.85156 0.43461,-2.36249 1.11692,-4.65001 1.76172,-6.95118 0.032,-1.03309 0.0298,-2.06705 0.0762,-3.09961 0.0969,-1.7604 0.20335,-3.52139 0.31836,-5.28125 -0.29549,-2.02734 -0.60362,-4.05413 -0.85156,-6.08984 -0.0782,-0.57339 -0.13296,-1.14873 -0.20508,-1.72266 -3.41008,20.82353 -10.92403,44.58674 -26.88867,64.4043 -37.63363,46.71765 -116.8138,86.95199 -195.97461,49.31836 -79.16081,-37.63364 -71.38281,-150.54883 -71.38281,-150.54883 0,0 36.34697,83.06148 106.42383,73.97656 70.07686,-9.08395 118.10351,-67.48828 118.10351,-67.48828 l 35.04297,-73.97656 4.91211,-55.25391 c -0.91613,-3.51822 -1.06962,-6.83243 -0.83984,-10.42382 l -9.26367,-60.21289 -2.72071,-13.0625 c 11.29966,-2.86671 23.79539,-8.45376 32.79688,-19.875 20.59593,-26.1346 3.35351,-75.98438 3.35351,-75.98438 l -49.81836,-51.19531 c 0,0 -0.28938,-0.95611 -0.52734,-1.74219 -2.46917,0.6921 -5.60373,0.40795 -7.78516,-0.5293 -1.02335,-0.43968 -1.95309,-1.06991 -2.92968,-1.60547 -3.92418,-2.15156 -2.68189,-3.88471 0.0566,-5.30859 -2.10214,-1.69804 -4.02113,-3.73752 -6.09571,-6.29101 -4.36168,-6.0907 -7.41129,-12.86067 -9.61328,-19.98438 -1.907,-7.46167 -2.73499,-15.14773 -3.67187,-22.77734 -1.52757,-7.92849 -2.58153,-15.92765 -3.6211,-23.92969 -0.98498,-7.99099 -2.42029,-15.91515 -3.45117,-23.90234 -0.62648,-4.78605 -0.94023,-9.60276 -1.20898,-14.41993 z m -23.74024,61.26172 c -0.18022,0.0248 -0.36162,0.0488 -0.53515,0.0703 l 0.27539,1.24609 c 0.0987,-0.43582 0.16494,-0.87959 0.25976,-1.31641 z m 58.21094,107.73047 35.04102,38.93555 c 0,0 9.08489,18.17093 -6.48829,25.95703 -4.36498,2.18297 -10.28879,3.70728 -16.51367,4.83789 L 542.5,346.52539 Z m -99.85351,77.96289 21.35937,2.8711 66.85156,19.70898 18.41407,73.25195 -4.79102,52.54102 -22.74609,59.18945 -70.08399,48.01953 -31.14844,10.38282 -53.21093,-15.57422 -29.85157,-28.55078 -15.57422,-45.42579 -5.1914,-14.27539 44.12695,-58.40429 37.63867,-45.42383 45.42383,-37.63672 z m -232.94922,118.9082 c -0.48274,0.67476 -0.99548,1.30567 -1.55664,1.86133 -0.0494,0.13919 -0.10332,0.27669 -0.15235,0.41602 l 1.48047,-0.88867 c 0.0368,-0.22886 0.15569,-0.94569 0.22852,-1.38868 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14688"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 470.94531,519.61914 -11.51562,2.00391 c -2.05392,2.08645 -4.09816,4.18298 -6.15625,6.26367 -0.35269,0.45994 -0.72733,0.90358 -1.08594,1.35937 -2.5096,3.32215 -5.0449,6.62513 -7.50195,9.98829 -4.38617,5.69135 -8.24913,11.73097 -11.8418,17.93359 -0.13909,1.14793 -0.28103,2.29548 -0.4082,3.44531 -0.74143,6.60372 -1.02304,13.24516 -1.24219,19.88281 -0.19111,6.13542 -0.22491,12.27429 -0.25781,18.41211 -0.0121,2.60366 -0.0133,5.20711 -0.0195,7.81055 0.97663,0.3453 1.98647,0.78997 3.05273,1.45703 1.91024,1.19506 3.85215,2.33593 5.77539,3.50586 l 28.77734,4.79492 c 0,0 12.97993,5.19234 19.46875,28.55274 6.48923,23.35999 -40.23437,67.48828 -40.23437,67.48828 l -73.97656,44.12695 c 0,0 -2.59425,14.27451 11.68164,1.29688 7.03964,-6.4 23.76748,-9.58489 39.0039,-11.22461 3.26025,-1.0424 6.5404,-2.02271 9.82618,-2.98438 2.40623,-0.82067 4.83132,-1.59291 7.22265,-2.45312 5.45594,-2.00729 11.06165,-3.49311 16.70703,-4.84571 0.43255,-0.0789 0.85587,-0.19013 1.28711,-0.27343 0.83215,-0.2416 1.62358,-0.40612 2.37305,-0.50391 1.68508,-0.35437 3.37804,-0.68145 5.05273,-1.07422 l 1.58789,-1.29883 7.81446,-10.65625 c 1.42319,-3.03427 2.8731,-6.05688 4.30078,-9.08593 3.28825,-6.93042 6.92904,-13.64738 10.94726,-20.1836 0.61471,-0.99766 1.24202,-1.98769 1.86719,-2.97851 l 2.03906,-4.48633 c 0.10487,-0.23882 0.21339,-0.47608 0.31836,-0.71485 l 12.94727,-36.25585 6.48828,-22.0625 -1.29687,-25.95704 -1.29883,-22.0625 -3.89258,-16.87304 -12.97852,-16.8711 -7.78711,-12.97851 -10.63671,-9.66992 c -0.25703,-0.1 -0.51441,-0.199 -0.77149,-0.29883 -1.9021,-0.776 -3.78228,-1.62519 -5.63672,-2.5293 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14690"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 301.39062,731.15039 11.55274,9.3457 c -2.83611,-1.60613 -5.46919,-3.64141 -8.50781,-4.82031 -2.29041,-0.88859 4.15755,2.617 6.23047,3.93555 2.24827,1.43012 4.5124,2.83687 6.73242,4.31055 5.43882,3.61034 10.65044,7.52912 15.89258,11.41406 6.40368,4.35758 12.48723,9.16734 19.02148,13.32812 13.12441,8.92888 27.7966,14.783 41.96289,21.69141 6.05894,2.69016 3.04555,1.36703 9.04492,3.9707 l -11.46093,-9.06836 c -5.96284,-2.60444 -2.97605,-1.27733 -8.96485,-3.98047 -6.72411,-3.22285 -13.57574,-6.1741 -20.2207,-9.55859 -0.23079,-0.11755 -0.69304,-0.37674 -1.02344,-0.55469 -5.00077,-3.40202 -9.75093,-7.17693 -14.83984,-10.46289 -14.58057,-10.69686 -29.45951,-20.96392 -45.41993,-29.55078 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14692"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 448.33203,534.37695 c -1.22064,1.6154 -2.45179,3.22218 -3.64648,4.85743 -4.36445,5.66317 -8.24373,11.65354 -11.82813,17.82031 -0.14411,1.18561 -0.29051,2.37094 -0.42187,3.55859 -0.55113,4.90875 -0.8485,9.83812 -1.05469,14.77149 1.03551,3.6817 2.76945,7.17609 4.56055,10.54296 1.41571,2.80854 3.79393,4.76697 6.27929,6.5918 0.40572,0.44111 1.43323,0.7221 1.6836,1.34961 l 13.1875,7.20703 c 0.75196,-1.97029 0.77149,-1.86662 -0.92188,-3.10937 -1.30865,-0.76534 -2.25634,-1.68196 -3.43945,-2.59961 -1.35158,-1.04832 -2.39565,-1.69943 -3.15235,-3.38086 -1.57908,-2.43584 -0.54841,-0.64231 -1.80273,-3.4668 -1.10265,-2.48295 -2.69572,-4.76518 -3.17383,-7.49023 -0.93021,-3.51422 -1.44647,-7.094 -1.89648,-10.69727 -0.0303,-4.03896 -0.0595,-8.0798 -0.0547,-12.11914 0.0449,-3.9336 0.0315,-7.92268 1.06445,-11.75 1.35455,-4.20057 3.59505,-7.7468 6.92578,-10.69531 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14694"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 451.21289,530.54102 c -0.89692,1.18313 -1.77815,2.37823 -2.67383,3.5625 2.46917,-0.26297 4.95347,-0.18024 7.46875,-0.0547 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14696"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 394.54492,410.11914 -3.85351,1.67578 c 1.36017,-0.37638 2.67373,-0.86386 3.85351,-1.67578 z m -3.85351,1.67578 c -2.61527,0.72369 -5.41129,1.00936 -7.82618,2.2168 -1.16186,0.58093 -2.06214,1.62094 -3.03906,2.50781 z m -10.86524,4.72461 -3.15429,1.37109 c 0.34626,0.068 0.69182,0.11904 1.00195,0.0156 0.81973,-0.27324 1.50252,-0.79679 2.15234,-1.38672 z m -3.15429,1.37109 c -0.57022,-0.11188 -1.14584,-0.28295 -1.59376,0.0156 -0.14585,0.0972 -0.5302,0.55096 -1,1.11133 z m -2.59376,1.12696 -23.16015,10.07031 c 6.23518,-2.1268 13.44297,-3.22735 18.96875,-5.99023 1.34634,-0.67317 3.08483,-2.76014 4.1914,-4.08008 z m -23.16015,10.07031 c -1.53581,0.52386 -3.01478,1.10798 -4.39258,1.79688 -0.15769,0.0788 -0.29779,0.18305 -0.42969,0.29882 z m -4.82227,2.0957 -7.09961,3.08594 c 1.67222,-0.21302 3.39401,-0.17322 4.9336,-0.78906 0.97241,-0.38896 1.3825,-1.60916 2.16601,-2.29688 z m -7.09961,3.08594 c -1.47741,0.18821 -2.91758,0.57189 -4.15234,1.80664 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14698"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 381.56641,407.52344 -29.84961,23.36133 50.61523,-15.57422 1.29883,-7.78711 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14700"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 414.28516,383.9043 c -2.02155,0 -4.32827,1.39345 -6.76172,5.44922 -5.01626,8.3603 -84.34456,20.48615 -141.65625,28.28125 -0.83165,2.26739 -1.69918,4.51934 -2.57031,6.75585 -2.11334,5.30756 -4.4155,10.52879 -6.78711,15.71876 l 14.74023,-1.4375 51.91406,-12.97852 51.91406,-7.78711 46.72071,-27.25391 c 0,0 -3.06643,-6.74804 -7.51367,-6.74804 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14702"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 376.375,410.11914 -37.63672,27.25391 62.29688,-19.4668 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14704"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 380.26953,414.01172 -12.97851,10.38281 -48.02344,61.875 c 2.06531,2.4656 1.74433,6.99507 -3.05078,11.21485 -3.82133,3.36268 -6.95713,7.38128 -9.82032,11.57421 l 23.25586,-8.08984 40.23438,-46.72266 28.55273,-32.44726 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14706"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 391.94922,403.63086 c 0,0 -58.02129,58.56837 -94.5586,132.19726 -0.47427,2.92963 -0.9556,5.85877 -1.40234,8.79297 -1.26544,7.30336 -2.26151,14.64608 -2.9668,22.02344 -1.02249,5.9168 -2.05073,11.84454 -3.35156,17.70703 -0.94772,4.23785 -0.48838,2.14339 -1.3789,6.28125 -1.91373,8.88998 -8.8253,10.11199 -11.74414,5.61719 -1.02992,3.96636 -2.05748,7.93368 -3.09961,11.89648 -0.59915,2.2779 -1.51165,4.02181 -2.58008,5.28321 -6.61266,39.95575 -0.90425,80.05633 27.63672,114.66211 103.82268,125.88516 202.46484,55.80664 202.46484,55.80664 l -49.31836,-1.29688 -70.08398,-14.27734 c 0,0 -38.93558,-25.95608 -44.12696,-29.84961 -5.19093,-3.89354 -32.44531,-28.55274 -32.44531,-28.55273 l -19.46875,-50.61719 c 0,0 5.19141,-67.48734 5.19141,-73.97657 0,-6.48877 7.78711,-45.42382 7.78711,-45.42382 l 29.85156,-37.63868 18.16992,-31.14843 18.16992,-18.16992 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14708"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 586.62695,690.45312 -45.42578,51.91407 -70.08398,33.74414 -79.16797,-1.29688 -59.70117,-40.23437 -31.14844,-29.84961 -9.08399,11.67969 2.59571,5.1914 v 5.19141 c 0,0 10.38499,48.02211 111.61523,73.97851 101.23024,25.95656 180.40039,-110.31835 180.40039,-110.31836 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 279.03676,648.92269 -10.38277,5.19138 c 0,0 -1.29784,46.72243 32.44614,85.65779 33.74398,38.93536 16.87199,-25.9569 16.87199,-25.9569 z"*/}
        {/*      id="path14710"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14712"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 350.41797,482.79883 -52.39258,49.04883 c -0.68877,4.25571 -1.38813,8.51078 -2.03711,12.77343 -0.66096,3.81468 -1.24315,7.64111 -1.7539,11.47657 l 9.46093,31.82617 44.12696,51.91406 48.02148,12.97852 44.125,-7.78711 48.02148,-23.36133 c 0,0 -7.78844,-32.44556 -16.87304,-12.97852 -9.0846,19.46704 -68.78516,33.74414 -68.78516,33.74414 0,0 -10.38502,3.89272 -70.08398,-42.82812 -59.69897,-46.72083 18.16992,-116.80664 18.16992,-116.80664 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14714"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 328.35547,507.45703 -28.55274,27.25586 -3.5957,8.54102 c -0.0705,0.45611 -0.14928,0.91088 -0.21875,1.36718 -1.26544,7.30336 -2.26151,14.64585 -2.9668,22.02344 -0.40048,2.31692 -0.8123,4.63356 -1.23046,6.94922 l 2.82031,16.92578 c 0,0 33.74406,40.23308 23.36133,-2.5957 -10.38274,-42.82877 10.38281,-80.4668 10.38281,-80.4668 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14716"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 480.08203,603.0918 c -0.60836,-0.24335 -2.47561,3.00111 -6.36914,12.08593 -15.57396,36.3394 -147.95312,7.78711 -147.95312,7.78711 l 59.70117,29.85157 40.23242,-6.49024 46.72266,-10.38281 c 0,0 9.49111,-32.12153 7.66601,-32.85156 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 511.35108,577.54119 -29.85045,1.29785 29.85045,16.87199 z"*/}
        {/*      id="path14718"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14720"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 465.93945,519.72656 c -0.29947,-0.005 -0.5889,0.002 -0.86914,0.0215 -26.45371,1.80957 32.00391,111.0039 32.00391,111.0039 l 15.57422,-42.82812 c 0,0 6.48832,-46.72213 -38.93555,-66.18945 -3.10519,-1.33081 -5.67716,-1.97133 -7.77344,-2.00782 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14722"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 338.73828,494.47852 -41.54883,42.61328 c -0.40498,2.50884 -0.81863,5.01656 -1.20117,7.52929 -0.62058,3.58162 -1.17362,7.17348 -1.66211,10.77344 l 59.98633,87.03906 c 0,0 64.89203,15.5729 0,-22.06445 -64.89203,-37.63736 -15.57422,-125.89062 -15.57422,-125.89062 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14724"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 317.97266,558.07422 9.08398,75.27344 c 0,0 55.80747,24.65898 28.55274,-7.78711 -27.25473,-32.4461 -37.63672,-67.48633 -37.63672,-67.48633 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 538.60583,439.96958 c 0,0 -5.19138,127.18885 -32.44613,154.4436 -27.25476,27.25475 38.93536,-53.21166 38.93536,-53.21166 l 5.19138,-93.44487 z"*/}
        {/*      id="path14726"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 528.22307,402.33207 10.38276,106.42332 11.68061,-45.42459 z"*/}
        {/*      id="path14728"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14730"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 537.33008,380.98828 c -3.78743,-0.44558 -5.21289,10.96094 -5.21289,10.96094 0,0 19.46679,92.1465 19.46679,97.33789 0,5.19134 -42.82812,134.97656 -42.82812,134.97656 0,0 73.97735,-40.23348 51.91406,-162.23047 -11.72112,-64.81087 -19.04746,-80.53993 -23.33984,-81.04492 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14732"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 345.22656,480.20312 -42.82812,53.21094 10.38281,55.8086 70.08398,67.48632 c 0,0 180.3958,-9.08431 35.04102,-22.0625 C 272.55147,621.66854 345.22656,480.20313 345.22656,480.20312 Z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14734"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 409.51953,411.61328 -68.18555,62.09961 -41.53125,107.72266 c 0,0 50.61472,93.44299 29.84961,5.1914 -18.16559,-77.20391 60.00951,-156.39686 79.86719,-175.01367 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14736"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 556.77539,445.16016 -3.89258,57.10546 -48.02148,109.01954 -107.6875,39.72851 c 35.20825,15.61185 74.95867,16.01502 110.2832,-25.45312 54.65416,-64.15924 60.94678,-117.16107 57.56641,-148.75586 -0.14057,-0.87965 -0.23706,-1.75614 -0.29688,-2.63281 -2.37754,-18.54057 -7.95117,-29.01172 -7.95117,-29.01172 z M 397.17383,651.01367 c -46.174,-20.47382 -84.27991,-66.89256 -94.47071,-80.06055 l 68.48047,89.6504 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 385.46008,760.53739 80.46641,-25.95691 -19.46768,-7.78707 -83.06211,35.04182 z"*/}
        {/*      id="path14738"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14740"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 506.16016,599.60547 -14.27735,68.78515 -27.2539,45.42383 -83.0625,46.72266 96.04101,-27.25391 35.8418,-87.87304 c 0.23615,-2.01649 0.57024,-4.02261 1.07617,-6.00782 0.29261,-1.08243 0.62038,-2.15043 0.95899,-3.21484 -0.0553,-1.96392 -0.0727,-3.9268 -0.006,-5.89258 0.0258,-0.75134 0.0975,-1.45329 0.20507,-2.11328 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14742"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 442.56445,587.92383 -9.08398,19.46875 -0.3125,0.3125 c 0.26454,0.14718 0.53115,0.30202 0.80078,0.4707 3.28857,2.05735 6.67942,3.9403 9.88672,6.1211 3.42422,2.32822 4.9907,5.02325 5.19531,7.36914 l 6.49219,1.29882 23.36133,-7.78711 15.57422,1.29883 -23.36133,-20.76562 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14744"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 490.58594,561.9668 5.1914,40.23437 19.66407,30.07227 c 0.006,-0.65926 0.0145,-1.31884 0.0371,-1.97852 0.0607,-1.7706 0.36893,-3.27802 0.84375,-4.54297 l -7.56641,-50.80664 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14746"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="M 455.54297,589.22266 431,590.51367 c -0.0302,2.79809 -0.0494,5.59644 -0.0645,8.39453 -0.012,2.59129 -0.0133,5.18237 -0.0195,7.77344 0.97205,0.34543 1.99213,0.83062 3.05273,1.49414 3.28857,2.05735 6.67942,3.9403 9.88672,6.1211 3.10383,2.11038 4.67805,4.52277 5.09961,6.70312 22.32967,4.55087 6.58789,-31.77734 6.58789,-31.77734 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14748"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 513.94727,346.52539 c 0,5.19139 42.82731,190.78304 -14.27735,249.18555 -57.10466,58.4025 2.59571,10.38281 2.5957,10.38281 l 46.72266,-58.40234 -2.5957,-92.14844 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14750"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 513.13086,216.08398 c 7.13312,116.85552 30.89579,485.10161 39.75195,329.01172 10.38273,-182.99563 -18.16992,-255.67578 -18.16992,-255.67578 l -10.72656,-53.63281 c -0.71441,-0.80376 -1.43358,-1.6425 -2.17774,-2.55859 -3.77814,-5.2753 -6.56685,-11.0614 -8.67773,-17.14454 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14752"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="M 537.30859,272.54688 519.13867,315.37695 564.6875,470 c 0.0949,-2.12145 0.33767,-4.32778 0.64453,-6.72461 0.0333,-0.25987 0.0786,-0.50407 0.12109,-0.75195 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="M 546.3929,294.6109 561.96705,478.90494 523.03169,302.39797 Z"*/}
        {/*      id="path14754"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14756"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 373.7793,423.09766 -20.76563,1.29687 -36.87695,60.125 c 4.85068,0.84963 6.63225,7.19891 0.0801,12.96485 -4.56488,4.01708 -8.13775,8.97634 -11.44922,14.04492 l 59.92773,-53.39063 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14758"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 355.98828,414.99219 c 0,0 -106.42361,146.65705 -83.0625,229.71875 23.36113,83.06166 35.04102,-118.10352 35.04102,-118.10352 l 71.38281,-111.61523 h -19.46875 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 276.44106,678.77313 c 0,0 -2.59569,64.89227 68.78581,93.44487 71.3815,28.5526 32.44613,0 32.44613,0 l -51.91381,-40.23321 z"*/}
        {/*      id="path14760"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14762"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 538.60547,490.58594 c 0,0 -16.87368,138.86936 -131.08203,149.25195 -114.20853,10.38259 10.38281,19.4668 10.38281,19.4668 L 512.64844,598.30664 542.5,524.33008 Z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14764"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 339.0625,469.55664 -43.1543,106.6875 21.47461,20.63086 c -5.93229,-48.78758 13.394,-105.79738 21.67969,-127.31836 z M 317.38281,596.875 c 4.87892,40.12349 26.81986,74.69201 86.24805,79.30273 150.54751,11.68044 153.14453,-125.89062 153.14453,-125.89062 L 429.58594,650.2207 362.09961,639.83789 Z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14766"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 550.28711,403.63086 v 119.40039 l -35.04297,68.78711 c 0,0 -60.54088,41.3017 -94.01367,62.69726 45.89308,11.3795 93.70167,7.28121 118.67383,-43.23046 57.10399,-115.50604 10.38281,-207.6543 10.38281,-207.6543 z M 421.23047,654.51562 c -59.05154,-14.64206 -114.93945,-54.91015 -114.93945,-54.91015 0,0 88.25392,67.48633 93.44531,67.48633 1.34168,0 9.82829,-5.11925 21.49414,-12.57618 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14768"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 304.23828,589.84961 c -1.1711,0 -1.83984,0.99447 -1.83984,3.26562 0,18.16975 23.36111,68.78531 81.76367,84.35938 58.40256,15.57398 111.61523,-18.16992 111.61523,-18.16992 L 345.22656,638.53906 c 0,0 -32.79064,-48.68945 -40.98828,-48.68945 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14770"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 500.49219,126.83984 c -0.51619,2.94436 -1.02557,5.89009 -1.51172,8.83985 l 13.66797,144.65429 31.14844,154.44336 c 0,0 10.38391,121.99751 24.66015,51.91407 13.17065,-64.6559 -52.51203,-307.89925 -67.96484,-359.85157 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 558.07351,285.52598 -40.23321,-38.93536 9.08492,-18.16983 33.74398,45.42458 z"*/}
        {/*      id="path14772"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14774"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 568.45703,433.48047 -14.27734,49.31836 -3.89258,79.16797 -51.91406,59.70117 -53.21289,36.33984 -73.97657,-16.87304 -50.61523,-44.125 -6.49024,-101.23243 c 0,0 -42.82641,197.27224 120.69922,185.5918 163.5258,-11.68044 133.67969,-247.88867 133.67969,-247.88867 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14776"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="M 268.6543,416.60742 228.41992,491.88281 253.08008,481.5 271.25,439.96875 Z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14778"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 484.84375,359.30859 c -0.59649,0.0899 -1.20562,0.1686 -1.87109,0.19532 -11.21674,0.45023 -22.44247,0.80449 -33.63672,1.66015 -15.65321,1.27215 -31.2517,3.14777 -46.85938,4.88086 -2.89223,0.37853 -5.78879,0.72148 -8.68359,1.07617 l 127.94141,14.44532 -32.44727,-22.0625 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14780"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 447.75586,590.51953 -10.38281,19.46875 25.95703,24.6582 22.06445,3.89258 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14782"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 508.75586,600.90234 -73.97852,2.59571 -3.86523,5.15625 c -4e-5,0.0215 4e-5,0.043 0,0.0644 l 22.03516,23.33203 12.97851,-10.38281 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000", strokeWidth: "1.57442" }}*/}
        {/*      d="m 555.94506,629.455 -29.01983,37.40848 26.78753,26.18595 29.01981,-37.40848 z"*/}
        {/*      id="path14784"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14786"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 431.17383,581.43555 c -0.16651,5.82265 -0.20706,11.64804 -0.23828,17.47265 -0.0211,4.5647 -0.0265,9.12891 -0.0332,13.69336 l 22.04493,22.04492 9.08593,-18.16992 -20.76562,-25.95703 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14788"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 597.00977,630.75195 -2.59571,12.97852 -19.46875,64.89258 -22.0625,23.36133 -23.36133,27.25585 15.1875,-5.42382 c 2.43106,-4.29412 5.48932,-7.98285 9.84571,-11.66602 2.88032,-2.28829 5.91746,-4.33014 9.02148,-6.27734 l 4.88086,-5.18555 5.19141,-6.49023 9.08398,-15.57422 7.78711,-20.76563 5.19141,-20.76562 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 577.54119,715.1128 c 0,0 -11.68061,37.63752 -73.97718,66.19012 -62.29658,28.55259 -123.29532,-6.48923 -123.29532,-6.48923 L 490.58555,772.218 Z"*/}
        {/*      id="path14790"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 552.88213,746.26109 c 0,0 -15.57415,31.14829 -71.3815,49.31812 -55.80735,18.16984 -121.99746,-22.06337 -121.99746,-22.06337 l 90.84917,9.08492 z"*/}
        {/*      id="path14792"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14794"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 434.95312,553.55078 c -0.71434,1.17508 -1.41079,2.36142 -2.10156,3.55078 -0.14203,1.17002 -0.28638,2.33973 -0.41601,3.51172 -0.74143,6.60372 -1.02304,13.24516 -1.24219,19.88281 -0.19111,6.13542 -0.22491,12.27429 -0.25781,18.41211 -0.0159,3.44485 -0.0188,6.88942 -0.0254,10.33399 l 29.82422,12.42578 -6.48829,-36.33985 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14796"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 465.84766,518.60156 c -1.30096,-0.007 -2.68102,0.19894 -4.10938,0.6836 -2.83854,2.83267 -5.62016,5.72543 -8.43945,8.57617 -0.4947,0.64663 -1.00686,1.28166 -1.51367,1.91992 -1.49596,1.97686 -2.97772,3.96468 -4.4668,5.94727 -11.41889,27.35112 32.88477,71.66406 32.88476,71.66406 l -3.89453,-84.36133 c 0,0 -4.39437,-4.39535 -10.46093,-4.42969 z"*/}
        {/*    />*/}
        {/*    <path*/}
        {/*      id="path14798"*/}
        {/*      style={{ fill: "#000000" }}*/}
        {/*      d="m 445.62891,537.97852 c -0.31132,0.42107 -0.63441,0.83298 -0.94336,1.25586 -4.37437,5.67603 -8.2484,11.68669 -11.83399,17.87109 -0.14186,1.16873 -0.28653,2.3371 -0.41601,3.50781 -0.53578,4.77201 -0.82771,9.56365 -1.03321,14.35938 24.12299,18.30447 99.41602,33.71679 99.41602,33.71679 L 441.26758,561.9668 Z"*/}
        {/*    />*/}
        {/*  </clipPath>*/}
        {/*  <path*/}
        {/*    d="m 513.84068,241.0236 39.4811,49.50797 23.7485,22.53283 6.824,12.77479 0.2216,20.88366 -2.0321,7.71679 -2.6588,7.09011 -6.4254,6.64698 -11.6605,6.57095 -11.3378,1.84855 -9.1918,1.95608 -18.7636,0.96229 -10.8947,-1.51295 -12.5597,-3.17795 -13.5851,-4.09571 -18.7885,-6.31136 -15.3011,-2.00062 -11.52145,-4.65288 -8.64106,-52.06799 v -18.38997 l 32.12701,-98.81839 11.0783,-12.85082 7.7548,-0.66469 9.0082,-12.31862 13.37,48.21229 7.8754,34.57732 5.4316,23.32201 7.2671,35.37991 c 0,0 5.9063,25.35952 5.9063,26.68891 0,1.3294 18.2759,89.63319 18.2759,89.63319 l 4.8745,70.01482 -5.0961,51.62485 -8.4195,27.03104 -22.607,41.62957 -36.9743,31.96084 -26.9473,11.90697 c -14.62264,-0.20889 -53.45417,9.67893 -49.508,2.50674 l -45.74786,-17.54712 -31.33414,-31.33416 -15.04039,-27.57404 5.01346,-60.16157 15.04039,-23.81395 23.81395,-38.85435 30.70747,-28.20073 31.96083,-28.82742 18.80049,-9.40025 7.5202,-7.52019 -7.5202,-10.65361 -139.7503,-16.92044 -20.05386,-43.24113 -57.02815,80.84211 -52.01469,78.33537 62.04162,20.68054 23.81395,-20.05386 23.81395,-35.72093 50.13464,-6.26683 48.25459,-16.29376 14.41371,-1.88004 -52.01469,55.1481 -15.66707,35.72093 -16.29376,36.34761 -17.54712,68.30844 c 0,0 1.88005,31.33416 1.88005,35.09425 0,3.7601 4.38678,35.72093 4.38678,35.72093 l 14.41371,41.98776 28.82741,31.96084 33.84089,18.80049 33.84088,10.65361 32.58752,1.88004 41.36104,-3.76009 47.6279,-23.81396 30.0808,-28.20073 27.574,-30.08078 9.4003,-29.4541 5.0135,-24.44064 c 0,0 -1.8801,-10.65361 -1.8801,-13.16034 0,-2.50673 2.5067,-40.7344 2.5067,-40.7344 l -47.6279,63.92167 -5.6401,10.65361 6.8935,7.5202 12.5337,-16.92045 -31.3342,-53.26805 -16.9204,24.44064 -31.3342,-77.70869 -17.5471,-10.02693 -18.8005,23.81395 0.6267,41.98776 6.2668,5.64015 21.9339,-1.88005 11.907,-13.78703 6.8935,21.93391 0.6267,23.81395 2.5067,20.68054 -5.6401,16.92044 -16.2938,25.69401 -9.4002,15.04038 c 0,0 -15.0404,8.14688 -18.8005,10.02693 -3.7601,1.88005 -21.93389,6.26683 -21.93389,6.26683 l -16.92044,6.89352 -10.65361,5.64014 -11.2803,4.38678 -3.7601,5.01347 -7.52019,3.13341"*/}
        {/*    id="path11061"*/}
        {/*    clipPath={"url(#clipPath14684)"}*/}
        {/*  />*/}
        {/*</svg>*/}
      </div>
      <div className="flex w-full justify-center">
        <div
          className="mb-14 h-16 w-16 transform rounded-full outline-dotted outline-4  outline-white duration-500 hover:-translate-y-3"
          id="coolscrolldownbutton"
          onClick={clickCoolButton}
        >
          <svg
            fill="#ffffff"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="mx-auto mt-4 h-10 w-10"
            viewBox="0 0 30.727 30.727"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0
        l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
