import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../shared/selectedCategory";
import { ImageData } from "../shared/types";
import b1 from "../asset/test/building/옥우1.png";
import b2 from "../asset/test/building/옥우2.png";
import b3 from "../asset/test/building/옥우3.png";
import b4 from "../asset/test/building/옥우4.png";
import b5 from "../asset/test/building/옥우5.png";
import b6 from "../asset/test/building/옥우6.png";
import b7 from "../asset/test/building/옥우7.png";
import b8 from "../asset/test/building/옥우8.png";
import b9 from "../asset/test/building/옥우9.png";
import b10 from "../asset/test/building/옥우10.png";
import b11 from "../asset/test/building/옥우11.png";
import b12 from "../asset/test/building/옥우12.png";
import b13 from "../asset/test/building/옥우13.png";
import b14 from "../asset/test/building/옥우14.png";
import b15 from "../asset/test/building/옥우15.png";
import b16 from "../asset/test/building/옥우16.png";
import b17 from "../asset/test/building/옥우17.png";
import b18 from "../asset/test/building/옥우18.png";
import b19 from "../asset/test/building/옥우19.png";
import b20 from "../asset/test/building/옥우20.png";

import p1 from "../asset/test/people/인물1.png";
import p2 from "../asset/test/people/인물2.png";
import p3 from "../asset/test/people/인물3.png";
import p4 from "../asset/test/people/인물4.png";
import p5 from "../asset/test/people/인물5.png";
import p6 from "../asset/test/people/인물6.png";
import p7 from "../asset/test/people/인물7.png";
import p8 from "../asset/test/people/인물8.png";
import p9 from "../asset/test/people/인물9.png";
import p10 from "../asset/test/people/인물10.png";
import p11 from "../asset/test/people/인물11.png";
import p12 from "../asset/test/people/인물12.png";
import p13 from "../asset/test/people/인물13.png";
import p14 from "../asset/test/people/인물14.png";
import p15 from "../asset/test/people/인물15.png";
import p16 from "../asset/test/people/인물16.png";
import p17 from "../asset/test/people/인물17.png";
import p18 from "../asset/test/people/인물18.png";
import p19 from "../asset/test/people/인물19.png";
import p20 from "../asset/test/people/인물20.png";
import p21 from "../asset/test/people/인물21.png";
import p22 from "../asset/test/people/인물22.png";
import p23 from "../asset/test/people/인물23.png";
import p24 from "../asset/test/people/인물24.png";
import p25 from "../asset/test/people/인물25.png";
import p26 from "../asset/test/people/인물26.png";
import p27 from "../asset/test/people/인물27.png";
import p28 from "../asset/test/people/인물28.png";
import p29 from "../asset/test/people/인물29.png";
import p30 from "../asset/test/people/인물30.png";

import p128 from "../asset/test/people/인물128.png";
import p129 from "../asset/test/people/인물129.png";
import p130 from "../asset/test/people/인물130.png";
import p131 from "../asset/test/people/인물131.png";
import p132 from "../asset/test/people/인물132.png";
import p133 from "../asset/test/people/인물133.png";
import p134 from "../asset/test/people/인물134.png";
import p135 from "../asset/test/people/인물135.png";
import p136 from "../asset/test/people/인물136.png";


import a1 from "../asset/test/animal/동물1.png";
import a2 from "../asset/test/animal/동물2.png";
import a3 from "../asset/test/animal/동물3.png";
import a4 from "../asset/test/animal/동물4.png";
import a5 from "../asset/test/animal/동물5.png";
import a6 from "../asset/test/animal/동물6.png";
import a7 from "../asset/test/animal/동물7.png";
import a8 from "../asset/test/animal/동물8.png";
import a9 from "../asset/test/animal/동물9.png";
import a10 from "../asset/test/animal/동물10.png";
import a11 from "../asset/test/animal/동물11.png";
import a12 from "../asset/test/animal/동물12.png";
import a13 from "../asset/test/animal/동물13.png";
import a14 from "../asset/test/animal/동물14.png";
import a15 from "../asset/test/animal/동물15.png";
import a16 from "../asset/test/animal/동물16.png";
import a17 from "../asset/test/animal/동물17.png";
import a18 from "../asset/test/animal/동물18.png";
import a19 from "../asset/test/animal/동물19.png";
import a20 from "../asset/test/animal/동물20.png";
import a21 from "../asset/test/animal/동물21.png";
import a22 from "../asset/test/animal/동물22.png";
import a23 from "../asset/test/animal/동물23.png";
import a24 from "../asset/test/animal/동물24.png";
import a25 from "../asset/test/animal/동물25.png";
import a26 from "../asset/test/animal/동물26.png";
import a27 from "../asset/test/animal/동물27.png";
import a28 from "../asset/test/animal/동물28.png";
import a29 from "../asset/test/animal/동물29.png";
import a30 from "../asset/test/animal/동물30.png";

import bird_1 from "../asset/test/bird/새1.png";
import bird_2 from "../asset/test/bird/새2.png";
import bird_3 from "../asset/test/bird/새3.png";
import bird_4 from "../asset/test/bird/새4.png";
import bird_5 from "../asset/test/bird/새5.png";
import bird_6 from "../asset/test/bird/새6.png";
import bird_7 from "../asset/test/bird/새7.png";
import bird_8 from "../asset/test/bird/새8.png";
import bird_9 from "../asset/test/bird/새9.png";
import bird_10 from "../asset/test/bird/새10.png";
import bird_11 from "../asset/test/bird/새11.png";
import bird_12 from "../asset/test/bird/새12.png";
import bird_13 from "../asset/test/bird/새13.png";
import bird_14 from "../asset/test/bird/새14.png";
import bird_15 from "../asset/test/bird/새15.png";
import bird_16 from "../asset/test/bird/새16.png";
import bird_17 from "../asset/test/bird/새17.png";
import bird_18 from "../asset/test/bird/새18.png";
import bird_19 from "../asset/test/bird/새19.png";
import bird_20 from "../asset/test/bird/새20.png";
import bird_21 from "../asset/test/bird/새21.png";
import bird_22 from "../asset/test/bird/새22.png";
import bird_23 from "../asset/test/bird/새23.png";
import bird_24 from "../asset/test/bird/새24.png";
import bird_25 from "../asset/test/bird/새25.png";
import bird_26 from "../asset/test/bird/새26.png";

import i1 from "../asset/test/insect/곤충1.png";
import i2 from "../asset/test/insect/곤충2.png";
import i3 from "../asset/test/insect/곤충3.png";
import i4 from "../asset/test/insect/곤충4.png";
import i5 from "../asset/test/insect/곤충5.png";
import i6 from "../asset/test/insect/곤충6.png";
import i7 from "../asset/test/insect/곤충7.png";
import i8 from "../asset/test/insect/곤충8.png";
import i9 from "../asset/test/insect/곤충9.png";
import i10 from "../asset/test/insect/곤충10.png";
import i11 from "../asset/test/insect/곤충11.png";
import i12 from "../asset/test/insect/곤충12.png";
import i13 from "../asset/test/insect/곤충13.png";
import i14 from "../asset/test/insect/곤충14.png";


import jn72 from "../asset/test/plant/juknan/죽란보72.png";
import jn73 from "../asset/test/plant/juknan/죽란보73.png";
import jn74 from "../asset/test/plant/juknan/죽란보74.png";
import jn75 from "../asset/test/plant/juknan/죽란보75.png";
import jn76 from "../asset/test/plant/juknan/죽란보76.png";
import jn77 from "../asset/test/plant/juknan/죽란보77.png";
import jn78 from "../asset/test/plant/juknan/죽란보78.png";
import jn79 from "../asset/test/plant/juknan/죽란보79.png";
import jn80 from "../asset/test/plant/juknan/죽란보80.png";
import jn81 from "../asset/test/plant/juknan/죽란보81.png";
import jn82 from "../asset/test/plant/juknan/죽란보82.png";
import jn83 from "../asset/test/plant/juknan/죽란보83.png";
import jn84 from "../asset/test/plant/juknan/죽란보84.png";
import jn85 from "../asset/test/plant/juknan/죽란보85.png";
import jn86 from "../asset/test/plant/juknan/죽란보86.png";
import jn87 from "../asset/test/plant/juknan/죽란보87.png";
import jn88 from "../asset/test/plant/juknan/죽란보88.png";
import jn89 from "../asset/test/plant/juknan/죽란보89.png";
import jn90 from "../asset/test/plant/juknan/죽란보90.png";
import jn91 from "../asset/test/plant/juknan/죽란보91.png";
import jn92 from "../asset/test/plant/juknan/죽란보92.png";

// import jn1 from "../asset/test/plant/juknan/죽란보1.png";
// import jn2 from "../asset/test/plant/juknan/죽란보2.png";
// import jn3 from "../asset/test/plant/juknan/죽란보3.png";
// import jn4 from "../asset/test/plant/juknan/죽란보4.png";
// import jn5 from "../asset/test/plant/juknan/죽란보5.png";
// import jn6 from "../asset/test/plant/juknan/죽란보6.png";
// import jn7 from "../asset/test/plant/juknan/죽란보7.png";
// import jn8 from "../asset/test/plant/juknan/죽란보8.png";
// import jn9 from "../asset/test/plant/juknan/죽란보9.png";
// import jn10 from "../asset/test/plant/juknan/죽란보10.png";
// import jn11 from "../asset/test/plant/juknan/죽란보11.png";
// import jn12 from "../asset/test/plant/juknan/죽란보12.png";
// import jn13 from "../asset/test/plant/juknan/죽란보13.png";
// import jn14 from "../asset/test/plant/juknan/죽란보14.png";
// import jn15 from "../asset/test/plant/juknan/죽란보15.png";
// import jn16 from "../asset/test/plant/juknan/죽란보16.png";
// import jn17 from "../asset/test/plant/juknan/죽란보17.png";
// import jn18 from "../asset/test/plant/juknan/죽란보18.png";
// import jn19 from "../asset/test/plant/juknan/죽란보19.png";
// import jn20 from "../asset/test/plant/juknan/죽란보20.png";

import r1 from "../asset/test/rock/석보1.png";
import r2 from "../asset/test/rock/석보2.png";
import r3 from "../asset/test/rock/석보3.png";
import r4 from "../asset/test/rock/석보4.png";
import r5 from "../asset/test/rock/석보5.png";
import r6 from "../asset/test/rock/석보6.png";
import r7 from "../asset/test/rock/석보7.png";
import r8 from "../asset/test/rock/석보8.png";
import r9 from "../asset/test/rock/석보9.png";
import r10 from "../asset/test/rock/석보10.png";
import r11 from "../asset/test/rock/석보11.png";
import r12 from "../asset/test/rock/석보12.png";
import r13 from "../asset/test/rock/석보13.png";
import r14 from "../asset/test/rock/석보14.png";
import r15 from "../asset/test/rock/석보15.png";
import r16 from "../asset/test/rock/석보16.png";
import r17 from "../asset/test/rock/석보17.png";
import r18 from "../asset/test/rock/석보18.png";
import r19 from "../asset/test/rock/석보19.png";
import r20 from "../asset/test/rock/석보20.png";
import r21 from "../asset/test/rock/석보21.png";
import r22 from "../asset/test/rock/석보22.png";
import r23 from "../asset/test/rock/석보23.png";
import r24 from "../asset/test/rock/석보24.png";
import r25 from "../asset/test/rock/석보25.png";
import r26 from "../asset/test/rock/석보26.png";
import r27 from "../asset/test/rock/석보27.png";
import r28 from "../asset/test/rock/석보28.png";
import r29 from "../asset/test/rock/석보29.png";
import r30 from "../asset/test/rock/석보30.png";

import r108 from "../asset/test/rock/석보108.png";
import r109 from "../asset/test/rock/석보109.png";
import r110 from "../asset/test/rock/석보110.png";
import r111 from "../asset/test/rock/석보111.png";
import r112 from "../asset/test/rock/석보112.png";
import r113 from "../asset/test/rock/석보113.png";
import r114 from "../asset/test/rock/석보114.png";
import r115 from "../asset/test/rock/석보115.png";
import r116 from "../asset/test/rock/석보116.png";
import r117 from "../asset/test/rock/석보117.png";
import r118 from "../asset/test/rock/석보118.png";
import r119 from "../asset/test/rock/석보119.png";
import r120 from "../asset/test/rock/석보120.png";
import r121 from "../asset/test/rock/석보121.png";

import t1 from "../asset/test/tree/수보1.png";
import t2 from "../asset/test/tree/수보2.png";
import t3 from "../asset/test/tree/수보3.png";
import t4 from "../asset/test/tree/수보4.png";
import t5 from "../asset/test/tree/수보5.png";
import t6 from "../asset/test/tree/수보6.png";
import t7 from "../asset/test/tree/수보7.png";
import t8 from "../asset/test/tree/수보8.png";
import t9 from "../asset/test/tree/수보9.png";
import t10 from "../asset/test/tree/수보10.png";
import t11 from "../asset/test/tree/수보11.png";
import t12 from "../asset/test/tree/수보12.png";
import t13 from "../asset/test/tree/수보13.png";
import t14 from "../asset/test/tree/수보14.png";
import t15 from "../asset/test/tree/수보15.png";
import t16 from "../asset/test/tree/수보16.png";
import t17 from "../asset/test/tree/수보17.png";
import t18 from "../asset/test/tree/수보18.png";
import t19 from "../asset/test/tree/수보19.png";
import t20 from "../asset/test/tree/수보20.png";
import t21 from "../asset/test/tree/수보21.png";
import t22 from "../asset/test/tree/수보22.png";
import t23 from "../asset/test/tree/수보23.png";
import t24 from "../asset/test/tree/수보24.png";
import t25 from "../asset/test/tree/수보25.png";
import t26 from "../asset/test/tree/수보26.png";
import t27 from "../asset/test/tree/수보27.png";
import t28 from "../asset/test/tree/수보28.png";
import t29 from "../asset/test/tree/수보29.png";
import t30 from "../asset/test/tree/수보30.png";

import t154 from "../asset/test/tree/수보154.png";
import t155 from "../asset/test/tree/수보155.png";
import t156 from "../asset/test/tree/수보156.png";
import t157 from "../asset/test/tree/수보157.png";


import o1 from "../asset/test/other/기타1.png";
import o2 from "../asset/test/other/기타2.png";
import o3 from "../asset/test/other/기타3.png";
import o4 from "../asset/test/other/기타4.png";
import o5 from "../asset/test/other/기타5.png";
import o6 from "../asset/test/other/기타6.png";
import o7 from "../asset/test/other/기타7.png";
import o8 from "../asset/test/other/기타8.png";
import o9 from "../asset/test/other/기타9.png";
import o10 from "../asset/test/other/기타10.png";
import o11 from "../asset/test/other/기타11.png";
import o12 from "../asset/test/other/기타12.png";
import o13 from "../asset/test/other/기타13.png";
import o14 from "../asset/test/other/기타14.png";
import o15 from "../asset/test/other/기타15.png";
import o16 from "../asset/test/other/기타16.png";
import o17 from "../asset/test/other/기타17.png";
import o18 from "../asset/test/other/기타18.png";
import o19 from "../asset/test/other/기타19.png";
import o20 from "../asset/test/other/기타20.png";

import o51 from "../asset/test/other/기타51.png";
import o52 from "../asset/test/other/기타52.png";
import o53 from "../asset/test/other/기타53.png";
import o54 from "../asset/test/other/기타54.png";
import o55 from "../asset/test/other/기타55.png";
import o56 from "../asset/test/other/기타56.png";
import o57 from "../asset/test/other/기타57.png";
import o58 from "../asset/test/other/기타58.png";
import o59 from "../asset/test/other/기타59.png";
import o60 from "../asset/test/other/기타60.png";
import o61 from "../asset/test/other/기타61.png";
import o62 from "../asset/test/other/기타62.png";
import o63 from "../asset/test/other/기타63.png";
import o64 from "../asset/test/other/기타64.png";
import o65 from "../asset/test/other/기타65.png";
import o66 from "../asset/test/other/기타66.png";
import o67 from "../asset/test/other/기타67.png";
import o68 from "../asset/test/other/기타68.png";
import o69 from "../asset/test/other/기타69.png";
import o70 from "../asset/test/other/기타70.png";


const MAX_IMAGE_SIZE = 100;

const buildings: ImageData[] = [
  { id: "b_1", imageUrl: b1, width: 0, height: 0 },
  { id: "b_2", imageUrl: b2, width: 0, height: 0 },
  { id: "b_3", imageUrl: b3, width: 0, height: 0 },
  { id: "b_4", imageUrl: b4, width: 0, height: 0 },
  { id: "b_5", imageUrl: b5, width: 0, height: 0 },
  { id: "b_6", imageUrl: b6, width: 0, height: 0 },
  { id: "b_7", imageUrl: b7, width: 0, height: 0 },
  { id: "b_8", imageUrl: b8, width: 0, height: 0 },
  { id: "b_9", imageUrl: b9, width: 0, height: 0 },
  { id: "b_10", imageUrl: b10, width: 0, height: 0 },
  { id: "b_11", imageUrl: b11, width: 0, height: 0 },
  { id: "b_12", imageUrl: b12, width: 0, height: 0 },
  { id: "b_13", imageUrl: b13, width: 0, height: 0 },
  { id: "b_14", imageUrl: b14, width: 0, height: 0 },
  { id: "b_15", imageUrl: b15, width: 0, height: 0 },
  { id: "b_16", imageUrl: b16, width: 0, height: 0 },
  { id: "b_17", imageUrl: b17, width: 0, height: 0 },
  { id: "b_18", imageUrl: b18, width: 0, height: 0 },
  { id: "b_19", imageUrl: b19, width: 0, height: 0 },
  { id: "b_20", imageUrl: b20, width: 0, height: 0 },
];
const peoples: ImageData[] = [
  { id: "p_128", imageUrl: p128, width: 0, height: 0 },
  { id: "p_129", imageUrl: p129, width: 0, height: 0 },
  { id: "p_130", imageUrl: p130, width: 0, height: 0 },
  { id: "p_131", imageUrl: p131, width: 0, height: 0 },
  { id: "p_132", imageUrl: p132, width: 0, height: 0 },
  { id: "p_133", imageUrl: p133, width: 0, height: 0 },
  { id: "p_134", imageUrl: p134, width: 0, height: 0 },
  { id: "p_135", imageUrl: p135, width: 0, height: 0 },
  { id: "p_136", imageUrl: p136, width: 0, height: 0 },

  { id: "p_1", imageUrl: p1, width: 0, height: 0 },
  { id: "p_2", imageUrl: p2, width: 0, height: 0 },
  { id: "p_3", imageUrl: p3, width: 0, height: 0 },
  { id: "p_4", imageUrl: p4, width: 0, height: 0 },
  { id: "p_5", imageUrl: p5, width: 0, height: 0 },
  { id: "p_6", imageUrl: p6, width: 0, height: 0 },
  { id: "p_7", imageUrl: p7, width: 0, height: 0 },
  { id: "p_8", imageUrl: p8, width: 0, height: 0 },
  { id: "p_9", imageUrl: p9, width: 0, height: 0 },
  { id: "p_10", imageUrl: p10, width: 0, height: 0 },
  { id: "p_11", imageUrl: p11, width: 0, height: 0 },
  { id: "p_12", imageUrl: p12, width: 0, height: 0 },
  { id: "p_13", imageUrl: p13, width: 0, height: 0 },
  { id: "p_14", imageUrl: p14, width: 0, height: 0 },
  { id: "p_15", imageUrl: p15, width: 0, height: 0 },
  { id: "p_16", imageUrl: p16, width: 0, height: 0 },
  { id: "p_17", imageUrl: p17, width: 0, height: 0 },
  { id: "p_18", imageUrl: p18, width: 0, height: 0 },
  { id: "p_19", imageUrl: p19, width: 0, height: 0 },
  { id: "p_20", imageUrl: p20, width: 0, height: 0 },
  { id: "p_21", imageUrl: p21, width: 0, height: 0 },
  { id: "p_22", imageUrl: p22, width: 0, height: 0 },
  { id: "p_23", imageUrl: p23, width: 0, height: 0 },
  { id: "p_24", imageUrl: p24, width: 0, height: 0 },
  { id: "p_25", imageUrl: p25, width: 0, height: 0 },
  { id: "p_26", imageUrl: p26, width: 0, height: 0 },
  { id: "p_27", imageUrl: p27, width: 0, height: 0 },
  { id: "p_28", imageUrl: p28, width: 0, height: 0 },
  { id: "p_29", imageUrl: p29, width: 0, height: 0 },
  { id: "p_30", imageUrl: p30, width: 0, height: 0 },
];
const animals: ImageData[] = [
  { id: "a_21", imageUrl: a21, width: 0, height: 0 },
  { id: "a_22", imageUrl: a22, width: 0, height: 0 },
  { id: "a_23", imageUrl: a23, width: 0, height: 0 },
  { id: "a_24", imageUrl: a24, width: 0, height: 0 },
  { id: "a_25", imageUrl: a25, width: 0, height: 0 },
  { id: "a_26", imageUrl: a26, width: 0, height: 0 },
  { id: "a_27", imageUrl: a27, width: 0, height: 0 },
  { id: "a_28", imageUrl: a28, width: 0, height: 0 },
  { id: "a_29", imageUrl: a29, width: 0, height: 0 },
  { id: "a_30", imageUrl: a30, width: 0, height: 0 },

  { id: "a_1", imageUrl: a1, width: 0, height: 0 },
  { id: "a_2", imageUrl: a2, width: 0, height: 0 },
  { id: "a_3", imageUrl: a3, width: 0, height: 0 },
  { id: "a_4", imageUrl: a4, width: 0, height: 0 },
  { id: "a_5", imageUrl: a5, width: 0, height: 0 },
  { id: "a_6", imageUrl: a6, width: 0, height: 0 },
  { id: "a_7", imageUrl: a7, width: 0, height: 0 },
  { id: "a_8", imageUrl: a8, width: 0, height: 0 },
  { id: "a_9", imageUrl: a9, width: 0, height: 0 },
  { id: "a_10", imageUrl: a10, width: 0, height: 0 },
  { id: "a_11", imageUrl: a11, width: 0, height: 0 },
  { id: "a_12", imageUrl: a12, width: 0, height: 0 },
  { id: "a_13", imageUrl: a13, width: 0, height: 0 },
  { id: "a_14", imageUrl: a14, width: 0, height: 0 },
  { id: "a_15", imageUrl: a15, width: 0, height: 0 },
  { id: "a_16", imageUrl: a16, width: 0, height: 0 },
  { id: "a_17", imageUrl: a17, width: 0, height: 0 },
  { id: "a_18", imageUrl: a18, width: 0, height: 0 },
  { id: "a_19", imageUrl: a19, width: 0, height: 0 },
  { id: "a_20", imageUrl: a20, width: 0, height: 0 },
];
const birds: ImageData[] = [
  { id: "bd_21", imageUrl: bird_21, width: 0, height: 0 },
  { id: "bd_22", imageUrl: bird_22, width: 0, height: 0 },
  { id: "bd_23", imageUrl: bird_23, width: 0, height: 0 },
  { id: "bd_24", imageUrl: bird_24, width: 0, height: 0 },
  { id: "bd_25", imageUrl: bird_25, width: 0, height: 0 },
  { id: "bd_26", imageUrl: bird_26, width: 0, height: 0 },

  { id: "bd_1", imageUrl: bird_1, width: 0, height: 0 },
  { id: "bd_2", imageUrl: bird_2, width: 0, height: 0 },
  { id: "bd_3", imageUrl: bird_3, width: 0, height: 0 },
  { id: "bd_4", imageUrl: bird_4, width: 0, height: 0 },
  { id: "bd_5", imageUrl: bird_5, width: 0, height: 0 },
  { id: "bd_6", imageUrl: bird_6, width: 0, height: 0 },
  { id: "bd_7", imageUrl: bird_7, width: 0, height: 0 },
  { id: "bd_8", imageUrl: bird_8, width: 0, height: 0 },
  { id: "bd_9", imageUrl: bird_9, width: 0, height: 0 },
  { id: "bd_10", imageUrl: bird_10, width: 0, height: 0 },
  { id: "bd_11", imageUrl: bird_11, width: 0, height: 0 },
  { id: "bd_12", imageUrl: bird_12, width: 0, height: 0 },
  { id: "bd_13", imageUrl: bird_13, width: 0, height: 0 },
  { id: "bd_14", imageUrl: bird_14, width: 0, height: 0 },
  { id: "bd_15", imageUrl: bird_15, width: 0, height: 0 },
  { id: "bd_16", imageUrl: bird_16, width: 0, height: 0 },
  { id: "bd_17", imageUrl: bird_17, width: 0, height: 0 },
  { id: "bd_18", imageUrl: bird_18, width: 0, height: 0 },
  { id: "bd_19", imageUrl: bird_19, width: 0, height: 0 },
  { id: "bd_20", imageUrl: bird_20, width: 0, height: 0 },
];
const insects: ImageData[] = [
  { id: "i_1", imageUrl: i1, width: 0, height: 0 },
  { id: "i_2", imageUrl: i2, width: 0, height: 0 },
  { id: "i_3", imageUrl: i3, width: 0, height: 0 },
  { id: "i_4", imageUrl: i4, width: 0, height: 0 },
  { id: "i_5", imageUrl: i5, width: 0, height: 0 },
  { id: "i_6", imageUrl: i6, width: 0, height: 0 },
  { id: "i_7", imageUrl: i7, width: 0, height: 0 },
  { id: "i_8", imageUrl: i8, width: 0, height: 0 },
  { id: "i_9", imageUrl: i9, width: 0, height: 0 },
  { id: "i_10", imageUrl: i10, width: 0, height: 0 },
  { id: "i_11", imageUrl: i11, width: 0, height: 0 },
  { id: "i_12", imageUrl: i12, width: 0, height: 0 },
  { id: "i_13", imageUrl: i13, width: 0, height: 0 },
  { id: "i_14", imageUrl: i14, width: 0, height: 0 },
];

const plants: ImageData[] = [
  { id: "jn_72", imageUrl: jn72, width: 0, height: 0 },
  { id: "jn_73", imageUrl: jn73, width: 0, height: 0 },
  { id: "jn_74", imageUrl: jn74, width: 0, height: 0 },
  { id: "jn_75", imageUrl: jn75, width: 0, height: 0 },
  { id: "jn_76", imageUrl: jn76, width: 0, height: 0 },
  { id: "jn_77", imageUrl: jn77, width: 0, height: 0 },
  { id: "jn_78", imageUrl: jn78, width: 0, height: 0 },
  { id: "jn_79", imageUrl: jn79, width: 0, height: 0 },
  { id: "jn_80", imageUrl: jn80, width: 0, height: 0 },
  { id: "jn_81", imageUrl: jn81, width: 0, height: 0 },
  { id: "jn_82", imageUrl: jn82, width: 0, height: 0 },
  { id: "jn_83", imageUrl: jn83, width: 0, height: 0 },
  { id: "jn_84", imageUrl: jn84, width: 0, height: 0 },
  { id: "jn_85", imageUrl: jn85, width: 0, height: 0 },
  { id: "jn_86", imageUrl: jn86, width: 0, height: 0 },
  { id: "jn_87", imageUrl: jn87, width: 0, height: 0 },
  { id: "jn_88", imageUrl: jn88, width: 0, height: 0 },
  { id: "jn_89", imageUrl: jn89, width: 0, height: 0 },
  { id: "jn_90", imageUrl: jn90, width: 0, height: 0 },
  { id: "jn_91", imageUrl: jn91, width: 0, height: 0 },
  { id: "jn_92", imageUrl: jn92, width: 0, height: 0 },

  // { id: "jn_1", imageUrl: jn1, width: 0, height: 0 },
  // { id: "jn_2", imageUrl: jn2, width: 0, height: 0 },
  // { id: "jn_3", imageUrl: jn3, width: 0, height: 0 },
  // { id: "jn_4", imageUrl: jn4, width: 0, height: 0 },
  // { id: "jn_5", imageUrl: jn5, width: 0, height: 0 },
  // { id: "jn_6", imageUrl: jn6, width: 0, height: 0 },
  // { id: "jn_7", imageUrl: jn7, width: 0, height: 0 },
  // { id: "jn_8", imageUrl: jn8, width: 0, height: 0 },
  // { id: "jn_9", imageUrl: jn9, width: 0, height: 0 },
  // { id: "jn_10", imageUrl: jn10, width: 0, height: 0 },
  // { id: "jn_11", imageUrl: jn11, width: 0, height: 0 },
  // { id: "jn_12", imageUrl: jn12, width: 0, height: 0 },
  // { id: "jn_13", imageUrl: jn13, width: 0, height: 0 },
  // { id: "jn_14", imageUrl: jn14, width: 0, height: 0 },
  // { id: "jn_15", imageUrl: jn15, width: 0, height: 0 },
  // { id: "jn_16", imageUrl: jn16, width: 0, height: 0 },
  // { id: "jn_17", imageUrl: jn17, width: 0, height: 0 },
  // { id: "jn_18", imageUrl: jn18, width: 0, height: 0 },
  // { id: "jn_19", imageUrl: jn19, width: 0, height: 0 },
  // { id: "jn_20", imageUrl: jn20, width: 0, height: 0 },
];

const trees: ImageData[] = [
  { id: "t_154", imageUrl: t154, width: 0, height: 0 },
  { id: "t_155", imageUrl: t155, width: 0, height: 0 },
  { id: "t_156", imageUrl: t156, width: 0, height: 0 },
  { id: "t_157", imageUrl: t157, width: 0, height: 0 },

  { id: "t_1", imageUrl: t1, width: 0, height: 0 },
  { id: "t_2", imageUrl: t2, width: 0, height: 0 },
  { id: "t_3", imageUrl: t3, width: 0, height: 0 },
  { id: "t_4", imageUrl: t4, width: 0, height: 0 },
  { id: "t_5", imageUrl: t5, width: 0, height: 0 },
  { id: "t_6", imageUrl: t6, width: 0, height: 0 },
  { id: "t_7", imageUrl: t7, width: 0, height: 0 },
  { id: "t_8", imageUrl: t8, width: 0, height: 0 },
  { id: "t_9", imageUrl: t9, width: 0, height: 0 },
  { id: "t_10", imageUrl: t10, width: 0, height: 0 },
  { id: "t_11", imageUrl: t11, width: 0, height: 0 },
  { id: "t_12", imageUrl: t12, width: 0, height: 0 },
  { id: "t_13", imageUrl: t13, width: 0, height: 0 },
  { id: "t_14", imageUrl: t14, width: 0, height: 0 },
  { id: "t_15", imageUrl: t15, width: 0, height: 0 },
  { id: "t_16", imageUrl: t16, width: 0, height: 0 },
  { id: "t_17", imageUrl: t17, width: 0, height: 0 },
  { id: "t_18", imageUrl: t18, width: 0, height: 0 },
  { id: "t_19", imageUrl: t19, width: 0, height: 0 },
  { id: "t_20", imageUrl: t20, width: 0, height: 0 },
  { id: "t_21", imageUrl: t21, width: 0, height: 0 },
  { id: "t_22", imageUrl: t22, width: 0, height: 0 },
  { id: "t_23", imageUrl: t23, width: 0, height: 0 },
  { id: "t_24", imageUrl: t24, width: 0, height: 0 },
  { id: "t_25", imageUrl: t25, width: 0, height: 0 },
  { id: "t_26", imageUrl: t26, width: 0, height: 0 },
  { id: "t_27", imageUrl: t27, width: 0, height: 0 },
  { id: "t_28", imageUrl: t28, width: 0, height: 0 },
  { id: "t_29", imageUrl: t29, width: 0, height: 0 },
  { id: "t_30", imageUrl: t30, width: 0, height: 0 },
];

const rocks: ImageData[] = [
  { id: "r_108", imageUrl: r108, width: 0, height: 0 },
  { id: "r_109", imageUrl: r109, width: 0, height: 0 },
  { id: "r_110", imageUrl: r110, width: 0, height: 0 },
  { id: "r_111", imageUrl: r111, width: 0, height: 0 },
  { id: "r_112", imageUrl: r112, width: 0, height: 0 },
  { id: "r_113", imageUrl: r113, width: 0, height: 0 },
  { id: "r_114", imageUrl: r114, width: 0, height: 0 },
  { id: "r_115", imageUrl: r115, width: 0, height: 0 },
  { id: "r_116", imageUrl: r116, width: 0, height: 0 },
  { id: "r_117", imageUrl: r117, width: 0, height: 0 },
  { id: "r_118", imageUrl: r118, width: 0, height: 0 },
  { id: "r_119", imageUrl: r119, width: 0, height: 0 },
  { id: "r_120", imageUrl: r120, width: 0, height: 0 },
  { id: "r_121", imageUrl: r121, width: 0, height: 0 },

  { id: "r_1", imageUrl: r1, width: 0, height: 0 },
  { id: "r_2", imageUrl: r2, width: 0, height: 0 },
  { id: "r_3", imageUrl: r3, width: 0, height: 0 },
  { id: "r_4", imageUrl: r4, width: 0, height: 0 },
  { id: "r_5", imageUrl: r5, width: 0, height: 0 },
  { id: "r_6", imageUrl: r6, width: 0, height: 0 },
  { id: "r_7", imageUrl: r7, width: 0, height: 0 },
  { id: "r_8", imageUrl: r8, width: 0, height: 0 },
  { id: "r_9", imageUrl: r9, width: 0, height: 0 },
  { id: "r_10", imageUrl: r10, width: 0, height: 0 },
  { id: "r_11", imageUrl: r11, width: 0, height: 0 },
  { id: "r_12", imageUrl: r12, width: 0, height: 0 },
  { id: "r_13", imageUrl: r13, width: 0, height: 0 },
  { id: "r_14", imageUrl: r14, width: 0, height: 0 },
  { id: "r_15", imageUrl: r15, width: 0, height: 0 },
  { id: "r_16", imageUrl: r16, width: 0, height: 0 },
  { id: "r_17", imageUrl: r17, width: 0, height: 0 },
  { id: "r_18", imageUrl: r18, width: 0, height: 0 },
  { id: "r_19", imageUrl: r19, width: 0, height: 0 },
  { id: "r_20", imageUrl: r20, width: 0, height: 0 },
  { id: "r_21", imageUrl: r21, width: 0, height: 0 },
  { id: "r_22", imageUrl: r22, width: 0, height: 0 },
  { id: "r_23", imageUrl: r23, width: 0, height: 0 },
  { id: "r_24", imageUrl: r24, width: 0, height: 0 },
  { id: "r_25", imageUrl: r25, width: 0, height: 0 },
  { id: "r_26", imageUrl: r26, width: 0, height: 0 },
  { id: "r_27", imageUrl: r27, width: 0, height: 0 },
  { id: "r_28", imageUrl: r28, width: 0, height: 0 },
  { id: "r_29", imageUrl: r29, width: 0, height: 0 },
  { id: "r_30", imageUrl: r30, width: 0, height: 0 },
];
const others: ImageData[] = [
  { id: "o_51", imageUrl: o51, width: 0, height: 0 },
  { id: "o_52", imageUrl: o52, width: 0, height: 0 },
  { id: "o_53", imageUrl: o53, width: 0, height: 0 },
  { id: "o_54", imageUrl: o54, width: 0, height: 0 },
  { id: "o_55", imageUrl: o55, width: 0, height: 0 },
  { id: "o_56", imageUrl: o56, width: 0, height: 0 },
  { id: "o_57", imageUrl: o57, width: 0, height: 0 },
  { id: "o_58", imageUrl: o58, width: 0, height: 0 },
  { id: "o_59", imageUrl: o59, width: 0, height: 0 },
  { id: "o_60", imageUrl: o60, width: 0, height: 0 },
  { id: "o_61", imageUrl: o61, width: 0, height: 0 },
  { id: "o_62", imageUrl: o62, width: 0, height: 0 },
  { id: "o_63", imageUrl: o63, width: 0, height: 0 },
  { id: "o_64", imageUrl: o64, width: 0, height: 0 },
  { id: "o_65", imageUrl: o65, width: 0, height: 0 },
  { id: "o_66", imageUrl: o66, width: 0, height: 0 },
  { id: "o_67", imageUrl: o67, width: 0, height: 0 },
  { id: "o_68", imageUrl: o68, width: 0, height: 0 },
  { id: "o_69", imageUrl: o69, width: 0, height: 0 },
  { id: "o_70", imageUrl: o70, width: 0, height: 0 },

  // { id: "o_1", imageUrl: o1, width: 0, height: 0 },
  // { id: "o_2", imageUrl: o2, width: 0, height: 0 },
  // { id: "o_3", imageUrl: o3, width: 0, height: 0 },
  // { id: "o_4", imageUrl: o4, width: 0, height: 0 },
  // { id: "o_5", imageUrl: o5, width: 0, height: 0 },
  // { id: "o_6", imageUrl: o6, width: 0, height: 0 },
  // { id: "o_7", imageUrl: o7, width: 0, height: 0 },
  // { id: "o_8", imageUrl: o8, width: 0, height: 0 },
  // { id: "o_9", imageUrl: o9, width: 0, height: 0 },
  // { id: "o_10", imageUrl: o10, width: 0, height: 0 },
  // { id: "o_11", imageUrl: o11, width: 0, height: 0 },
  // { id: "o_12", imageUrl: o12, width: 0, height: 0 },
  // { id: "o_13", imageUrl: o13, width: 0, height: 0 },
  // { id: "o_14", imageUrl: o14, width: 0, height: 0 },
  // { id: "o_15", imageUrl: o15, width: 0, height: 0 },
  // { id: "o_16", imageUrl: o16, width: 0, height: 0 },
  // { id: "o_17", imageUrl: o17, width: 0, height: 0 },
  // { id: "o_18", imageUrl: o18, width: 0, height: 0 },
  // { id: "o_19", imageUrl: o19, width: 0, height: 0 },
  // { id: "o_20", imageUrl: o20, width: 0, height: 0 },
];

const DraggableCategoryImageList: React.FC = () => {
  const { selectedCategory } = useStore();
  const [images, setImages] = useState<ImageData[]>([]);
  const makeImagesToLoad = () => {
    switch (selectedCategory) {
      case "Buildings":
        return buildings;
      case "People":
        return peoples;
      case "Animal":
        return animals;
      case "Bird":
        return birds;
      case "Insect":
        return insects;
      case "Plant":
        return plants;
      case "Tree":
        return trees;
      case "Rock":
        return rocks;
      default:
        return others;
    }
  };

  useEffect(() => {
    const imagesToLoad = makeImagesToLoad();

    const loadImages = async () => {
      const updatedImages = await Promise.all(
        imagesToLoad.map(async (image) => {
          const img = await loadImage(image.imageUrl);
          let width, height;
          const aspectRatio = img.width / img.height;
          if (img.width > img.height) {
            width = Math.min(img.width, MAX_IMAGE_SIZE);
            height = width / aspectRatio;
          } else {
            height = Math.min(img.height, MAX_IMAGE_SIZE);
            width = height * aspectRatio;
          }
          return {
            ...image,
            width,
            height,
          };
        }),
      );

      setImages(updatedImages);
    };
    loadImages();
  }, [selectedCategory]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    imageData: ImageData,
  ) => {
    e.dataTransfer.setData("application/json", JSON.stringify(imageData));
    e.dataTransfer.effectAllowed = "copy";
  };

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src; // Directly using the image URL
    });
  };

  return (
    <Container>
      <ImageList>
        {images.map((image) => (
          <ImageContainer
            key={image.id}
            $isDraggable={true}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, image)}
            $aspectRatio={image.width / image.height}
          >
            <img src={image.imageUrl} alt={`Image ${image.id}`} />
          </ImageContainer>
        ))}
      </ImageList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
`;

interface ImageContainerProps {
  $isDraggable?: boolean;
  $aspectRatio: number;
}

const ImageContainer = styled.div<ImageContainerProps>`
  border: 1px solid #e5e7eb;
  cursor: ${(props) => (props.$isDraggable ? "move" : "default")};
  flex: 0 0 auto;
  width: ${(props) => props.$aspectRatio * MAX_IMAGE_SIZE}px;
  height: ${MAX_IMAGE_SIZE}px;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default DraggableCategoryImageList;
