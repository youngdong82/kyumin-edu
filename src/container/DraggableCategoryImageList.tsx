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
import b21 from "../asset/test/building/옥우21.png";
import b22 from "../asset/test/building/옥우22.png";
import b23 from "../asset/test/building/옥우23.png";
import b24 from "../asset/test/building/옥우24.png";
import b25 from "../asset/test/building/옥우25.png";
import b26 from "../asset/test/building/옥우26.png";
import b27 from "../asset/test/building/옥우27.png";
import b28 from "../asset/test/building/옥우28.png";
import b29 from "../asset/test/building/옥우29.png";
import b30 from "../asset/test/building/옥우30.png";
import b31 from "../asset/test/building/옥우31.png";
import b32 from "../asset/test/building/옥우32.png";
import b33 from "../asset/test/building/옥우33.png";
import b34 from "../asset/test/building/옥우34.png";
import b35 from "../asset/test/building/옥우35.png";
import b36 from "../asset/test/building/옥우36.png";
import b37 from "../asset/test/building/옥우37.png";
import b38 from "../asset/test/building/옥우38.png";
import b39 from "../asset/test/building/옥우39.png";
import b40 from "../asset/test/building/옥우40.png";
import b41 from "../asset/test/building/옥우41.png";
import b42 from "../asset/test/building/옥우42.png";
import b43 from "../asset/test/building/옥우43.png";
import b44 from "../asset/test/building/옥우44.png";
import b45 from "../asset/test/building/옥우45.png";
import b46 from "../asset/test/building/옥우46.png";
import b47 from "../asset/test/building/옥우47.png";
import b48 from "../asset/test/building/옥우48.png";
import b49 from "../asset/test/building/옥우49.png";
import b50 from "../asset/test/building/옥우50.png";
import b51 from "../asset/test/building/옥우51.png";
import b52 from "../asset/test/building/옥우52.png";
import b53 from "../asset/test/building/옥우53.png";
import b54 from "../asset/test/building/옥우54.png";
import b55 from "../asset/test/building/옥우55.png";
import b56 from "../asset/test/building/옥우56.png";
import b57 from "../asset/test/building/옥우57.png";
import b58 from "../asset/test/building/옥우58.png";
import b59 from "../asset/test/building/옥우59.png";
import b60 from "../asset/test/building/옥우60.png";
import b61 from "../asset/test/building/옥우61.png";
import b62 from "../asset/test/building/옥우62.png";
import b63 from "../asset/test/building/옥우63.png";
import b64 from "../asset/test/building/옥우64.png";
import b65 from "../asset/test/building/옥우65.png";
import b66 from "../asset/test/building/옥우66.png";
import b67 from "../asset/test/building/옥우67.png";
import b68 from "../asset/test/building/옥우68.png";
import b69 from "../asset/test/building/옥우69.png";
import b70 from "../asset/test/building/옥우70.png";
import b71 from "../asset/test/building/옥우71.png";
import b72 from "../asset/test/building/옥우72.png";
import b73 from "../asset/test/building/옥우73.png";
import b74 from "../asset/test/building/옥우74.png";
import b75 from "../asset/test/building/옥우75.png";
import b76 from "../asset/test/building/옥우76.png";
import b77 from "../asset/test/building/옥우77.png";
import b78 from "../asset/test/building/옥우78.png";
import b79 from "../asset/test/building/옥우79.png";
import b80 from "../asset/test/building/옥우80.png";
import b81 from "../asset/test/building/옥우81.png";
import b82 from "../asset/test/building/옥우82.png";
import b83 from "../asset/test/building/옥우83.png";
import b84 from "../asset/test/building/옥우84.png";
import b85 from "../asset/test/building/옥우85.png";
import b86 from "../asset/test/building/옥우86.png";
import b87 from "../asset/test/building/옥우87.png";
import b88 from "../asset/test/building/옥우88.png";
import b89 from "../asset/test/building/옥우89.png";
import b90 from "../asset/test/building/옥우90.png";
import b91 from "../asset/test/building/옥우91.png";
import b92 from "../asset/test/building/옥우92.png";
import b93 from "../asset/test/building/옥우93.png";
import b94 from "../asset/test/building/옥우94.png";
import b95 from "../asset/test/building/옥우95.png";
import b96 from "../asset/test/building/옥우96.png";
import b97 from "../asset/test/building/옥우97.png";
import b98 from "../asset/test/building/옥우98.png";
import b99 from "../asset/test/building/옥우99.png";
import b100 from "../asset/test/building/옥우100.png";
import b101 from "../asset/test/building/옥우101.png";
import b102 from "../asset/test/building/옥우102.png";
import b103 from "../asset/test/building/옥우103.png";
import b104 from "../asset/test/building/옥우104.png";
import b105 from "../asset/test/building/옥우105.png";
import b106 from "../asset/test/building/옥우106.png";
import b107 from "../asset/test/building/옥우107.png";
import b108 from "../asset/test/building/옥우108.png";
import b109 from "../asset/test/building/옥우109.png";
import b110 from "../asset/test/building/옥우110.png";

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
import p31 from "../asset/test/people/인물31.png";
import p32 from "../asset/test/people/인물32.png";
import p33 from "../asset/test/people/인물33.png";
import p34 from "../asset/test/people/인물34.png";
import p35 from "../asset/test/people/인물35.png";
import p36 from "../asset/test/people/인물36.png";
import p37 from "../asset/test/people/인물37.png";
import p38 from "../asset/test/people/인물38.png";
import p39 from "../asset/test/people/인물39.png";
import p40 from "../asset/test/people/인물40.png";
import p41 from "../asset/test/people/인물41.png";
import p42 from "../asset/test/people/인물42.png";
import p43 from "../asset/test/people/인물43.png";
import p44 from "../asset/test/people/인물44.png";
import p45 from "../asset/test/people/인물45.png";
import p46 from "../asset/test/people/인물46.png";
import p47 from "../asset/test/people/인물47.png";
import p48 from "../asset/test/people/인물48.png";
import p49 from "../asset/test/people/인물49.png";
import p50 from "../asset/test/people/인물50.png";
import p51 from "../asset/test/people/인물51.png";
import p52 from "../asset/test/people/인물52.png";
import p53 from "../asset/test/people/인물53.png";
import p54 from "../asset/test/people/인물54.png";
import p55 from "../asset/test/people/인물55.png";
import p56 from "../asset/test/people/인물56.png";
import p57 from "../asset/test/people/인물57.png";
import p58 from "../asset/test/people/인물58.png";
import p59 from "../asset/test/people/인물59.png";
import p60 from "../asset/test/people/인물60.png";
import p61 from "../asset/test/people/인물61.png";
import p62 from "../asset/test/people/인물62.png";
import p63 from "../asset/test/people/인물63.png";
import p64 from "../asset/test/people/인물64.png";
import p65 from "../asset/test/people/인물65.png";
import p66 from "../asset/test/people/인물66.png";
import p67 from "../asset/test/people/인물67.png";
import p68 from "../asset/test/people/인물68.png";
import p69 from "../asset/test/people/인물69.png";
import p70 from "../asset/test/people/인물70.png";
import p71 from "../asset/test/people/인물71.png";
import p72 from "../asset/test/people/인물72.png";
import p73 from "../asset/test/people/인물73.png";
import p74 from "../asset/test/people/인물74.png";
import p75 from "../asset/test/people/인물75.png";
import p76 from "../asset/test/people/인물76.png";
import p77 from "../asset/test/people/인물77.png";
import p78 from "../asset/test/people/인물78.png";
import p79 from "../asset/test/people/인물79.png";
import p80 from "../asset/test/people/인물80.png";
import p81 from "../asset/test/people/인물81.png";
import p82 from "../asset/test/people/인물82.png";
import p83 from "../asset/test/people/인물83.png";
import p84 from "../asset/test/people/인물84.png";
import p85 from "../asset/test/people/인물85.png";
import p86 from "../asset/test/people/인물86.png";
import p87 from "../asset/test/people/인물87.png";
import p88 from "../asset/test/people/인물88.png";
import p89 from "../asset/test/people/인물89.png";
import p90 from "../asset/test/people/인물90.png";
import p91 from "../asset/test/people/인물91.png";
import p92 from "../asset/test/people/인물92.png";
import p93 from "../asset/test/people/인물93.png";
import p94 from "../asset/test/people/인물94.png";
import p95 from "../asset/test/people/인물95.png";
import p96 from "../asset/test/people/인물96.png";
import p97 from "../asset/test/people/인물97.png";
import p98 from "../asset/test/people/인물98.png";
import p99 from "../asset/test/people/인물99.png";
import p100 from "../asset/test/people/인물100.png";
import p101 from "../asset/test/people/인물101.png";
import p102 from "../asset/test/people/인물102.png";
import p103 from "../asset/test/people/인물103.png";
import p104 from "../asset/test/people/인물104.png";
import p105 from "../asset/test/people/인물105.png";
import p106 from "../asset/test/people/인물106.png";
import p107 from "../asset/test/people/인물107.png";
import p108 from "../asset/test/people/인물108.png";
import p109 from "../asset/test/people/인물109.png";
import p110 from "../asset/test/people/인물110.png";
import p111 from "../asset/test/people/인물111.png";
import p112 from "../asset/test/people/인물112.png";
import p113 from "../asset/test/people/인물113.png";
import p114 from "../asset/test/people/인물114.png";
import p115 from "../asset/test/people/인물115.png";
import p116 from "../asset/test/people/인물116.png";
import p117 from "../asset/test/people/인물117.png";
import p118 from "../asset/test/people/인물118.png";
import p119 from "../asset/test/people/인물119.png";
import p120 from "../asset/test/people/인물120.png";
import p121 from "../asset/test/people/인물121.png";
import p122 from "../asset/test/people/인물122.png";
import p123 from "../asset/test/people/인물123.png";
import p124 from "../asset/test/people/인물124.png";
import p125 from "../asset/test/people/인물125.png";
import p126 from "../asset/test/people/인물126.png";
import p127 from "../asset/test/people/인물127.png";
import p128 from "../asset/test/people/인물128.png";
import p129 from "../asset/test/people/인물129.png";
import p130 from "../asset/test/people/인물130.png";
import p131 from "../asset/test/people/인물131.png";
import p132 from "../asset/test/people/인물132.png";
import p133 from "../asset/test/people/인물133.png";
import p134 from "../asset/test/people/인물134.png";
import p135 from "../asset/test/people/인물135.png";
import p136 from "../asset/test/people/인물136.png";
import p137 from "../asset/test/people/인물137.png";
import p138 from "../asset/test/people/인물138.png";
import p139 from "../asset/test/people/인물139.png";
import p140 from "../asset/test/people/인물140.png";
import p141 from "../asset/test/people/인물141.png";
import p142 from "../asset/test/people/인물142.png";
import p143 from "../asset/test/people/인물143.png";
import p144 from "../asset/test/people/인물144.png";
import p145 from "../asset/test/people/인물145.png";
import p146 from "../asset/test/people/인물146.png";
import p147 from "../asset/test/people/인물147.png";
import p148 from "../asset/test/people/인물148.png";


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
import bird_27 from "../asset/test/bird/새27.png";
import bird_28 from "../asset/test/bird/새28.png";
import bird_29 from "../asset/test/bird/새29.png";
import bird_30 from "../asset/test/bird/새30.png";
import bird_31 from "../asset/test/bird/새31.png";
import bird_32 from "../asset/test/bird/새32.png";

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
import i15 from "../asset/test/insect/곤충15.png";
import i16 from "../asset/test/insect/곤충16.png";


import jn26 from "../asset/test/plant/juknan/죽란보26.png";
import jn27 from "../asset/test/plant/juknan/죽란보27.png";
import jn28 from "../asset/test/plant/juknan/죽란보28.png";
import jn29 from "../asset/test/plant/juknan/죽란보29.png";
import jn30 from "../asset/test/plant/juknan/죽란보30.png";
import jn31 from "../asset/test/plant/juknan/죽란보31.png";
import jn32 from "../asset/test/plant/juknan/죽란보32.png";
import jn33 from "../asset/test/plant/juknan/죽란보33.png";
import jn34 from "../asset/test/plant/juknan/죽란보34.png";
import jn35 from "../asset/test/plant/juknan/죽란보35.png";
import jn36 from "../asset/test/plant/juknan/죽란보36.png";
import jn37 from "../asset/test/plant/juknan/죽란보37.png";
import jn38 from "../asset/test/plant/juknan/죽란보38.png";
import jn39 from "../asset/test/plant/juknan/죽란보39.png";
import jn40 from "../asset/test/plant/juknan/죽란보40.png";
import jn41 from "../asset/test/plant/juknan/죽란보41.png";
import jn42 from "../asset/test/plant/juknan/죽란보42.png";
import jn43 from "../asset/test/plant/juknan/죽란보43.png";
import jn44 from "../asset/test/plant/juknan/죽란보44.png";
import jn45 from "../asset/test/plant/juknan/죽란보45.png";
import jn46 from "../asset/test/plant/juknan/죽란보46.png";
import jn47 from "../asset/test/plant/juknan/죽란보47.png";
import jn48 from "../asset/test/plant/juknan/죽란보48.png";
import jn49 from "../asset/test/plant/juknan/죽란보49.png";
import jn50 from "../asset/test/plant/juknan/죽란보50.png";
import jn51 from "../asset/test/plant/juknan/죽란보51.png";
import jn52 from "../asset/test/plant/juknan/죽란보52.png";
import jn53 from "../asset/test/plant/juknan/죽란보53.png";
import jn54 from "../asset/test/plant/juknan/죽란보54.png";
import jn55 from "../asset/test/plant/juknan/죽란보55.png";
import jn56 from "../asset/test/plant/juknan/죽란보56.png";
import jn57 from "../asset/test/plant/juknan/죽란보57.png";
import jn58 from "../asset/test/plant/juknan/죽란보58.png";
import jn59 from "../asset/test/plant/juknan/죽란보59.png";
import jn60 from "../asset/test/plant/juknan/죽란보60.png";
import jn61 from "../asset/test/plant/juknan/죽란보61.png";
import jn62 from "../asset/test/plant/juknan/죽란보62.png";
import jn63 from "../asset/test/plant/juknan/죽란보63.png";
import jn64 from "../asset/test/plant/juknan/죽란보64.png";
import jn65 from "../asset/test/plant/juknan/죽란보65.png";
import jn66 from "../asset/test/plant/juknan/죽란보66.png";
import jn67 from "../asset/test/plant/juknan/죽란보67.png";
import jn68 from "../asset/test/plant/juknan/죽란보68.png";
import jn69 from "../asset/test/plant/juknan/죽란보69.png";
import jn70 from "../asset/test/plant/juknan/죽란보70.png";
import jn71 from "../asset/test/plant/juknan/죽란보71.png";
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
import jn93 from "../asset/test/plant/juknan/죽란보93.png";
import jn94 from "../asset/test/plant/juknan/죽란보94.png";
import jn95 from "../asset/test/plant/juknan/죽란보95.png";
import jn96 from "../asset/test/plant/juknan/죽란보96.png";
import jn97 from "../asset/test/plant/juknan/죽란보97.png";
import jn98 from "../asset/test/plant/juknan/죽란보98.png";
import jn99 from "../asset/test/plant/juknan/죽란보99.png";
import jn100 from "../asset/test/plant/juknan/죽란보100.png";
import jn101 from "../asset/test/plant/juknan/죽란보101.png";
import jn102 from "../asset/test/plant/juknan/죽란보102.png";
import jn103 from "../asset/test/plant/juknan/죽란보103.png";
import jn104 from "../asset/test/plant/juknan/죽란보104.png";
import jn105 from "../asset/test/plant/juknan/죽란보105.png";
import jn106 from "../asset/test/plant/juknan/죽란보106.png";
import jn107 from "../asset/test/plant/juknan/죽란보107.png";
import jn108 from "../asset/test/plant/juknan/죽란보108.png";
import jn109 from "../asset/test/plant/juknan/죽란보109.png";
import jn110 from "../asset/test/plant/juknan/죽란보110.png";
import jn111 from "../asset/test/plant/juknan/죽란보111.png";
import jn112 from "../asset/test/plant/juknan/죽란보112.png";
import jn113 from "../asset/test/plant/juknan/죽란보113.png";
import jn114 from "../asset/test/plant/juknan/죽란보114.png";
import jn115 from "../asset/test/plant/juknan/죽란보115.png";
import jn116 from "../asset/test/plant/juknan/죽란보116.png";
import jn117 from "../asset/test/plant/juknan/죽란보117.png";
import jn118 from "../asset/test/plant/juknan/죽란보118.png";
import jn119 from "../asset/test/plant/juknan/죽란보119.png";
import jn120 from "../asset/test/plant/juknan/죽란보120.png";
import jn121 from "../asset/test/plant/juknan/죽란보121.png";
import jn122 from "../asset/test/plant/juknan/죽란보122.png";
import jn123 from "../asset/test/plant/juknan/죽란보123.png";
import jn124 from "../asset/test/plant/juknan/죽란보124.png";
import jn125 from "../asset/test/plant/juknan/죽란보125.png";
import jn126 from "../asset/test/plant/juknan/죽란보126.png";
import jn127 from "../asset/test/plant/juknan/죽란보127.png";
import jn128 from "../asset/test/plant/juknan/죽란보128.png";
import jn129 from "../asset/test/plant/juknan/죽란보129.png";
import jn130 from "../asset/test/plant/juknan/죽란보130.png";
import jn131 from "../asset/test/plant/juknan/죽란보131.png";
import jn132 from "../asset/test/plant/juknan/죽란보132.png";
import jn133 from "../asset/test/plant/juknan/죽란보133.png";
import jn134 from "../asset/test/plant/juknan/죽란보134.png";
import jn135 from "../asset/test/plant/juknan/죽란보135.png";
import jn136 from "../asset/test/plant/juknan/죽란보136.png";
import jn137 from "../asset/test/plant/juknan/죽란보137.png";
import jn138 from "../asset/test/plant/juknan/죽란보138.png";
import jn139 from "../asset/test/plant/juknan/죽란보139.png";
import jn140 from "../asset/test/plant/juknan/죽란보140.png";
import jn141 from "../asset/test/plant/juknan/죽란보141.png";
import jn142 from "../asset/test/plant/juknan/죽란보142.png";
import jn143 from "../asset/test/plant/juknan/죽란보143.png";
import jn144 from "../asset/test/plant/juknan/죽란보144.png";
import jn145 from "../asset/test/plant/juknan/죽란보145.png";
import jn146 from "../asset/test/plant/juknan/죽란보146.png";
import jn147 from "../asset/test/plant/juknan/죽란보147.png";
import jn148 from "../asset/test/plant/juknan/죽란보148.png";
import jn149 from "../asset/test/plant/juknan/죽란보149.png";
import jn150 from "../asset/test/plant/juknan/죽란보150.png";
import jn151 from "../asset/test/plant/juknan/죽란보151.png";
import jn152 from "../asset/test/plant/juknan/죽란보152.png";
import jn153 from "../asset/test/plant/juknan/죽란보153.png";
import jn154 from "../asset/test/plant/juknan/죽란보154.png";
import jn155 from "../asset/test/plant/juknan/죽란보155.png";
import jn156 from "../asset/test/plant/juknan/죽란보156.png";
import jn157 from "../asset/test/plant/juknan/죽란보157.png";
import jn158 from "../asset/test/plant/juknan/죽란보158.png";
import jn159 from "../asset/test/plant/juknan/죽란보159.png";
import jn160 from "../asset/test/plant/juknan/죽란보160.png";
import jn161 from "../asset/test/plant/juknan/죽란보161.png";
import jn162 from "../asset/test/plant/juknan/죽란보162.png";
import jn163 from "../asset/test/plant/juknan/죽란보163.png";
import jn164 from "../asset/test/plant/juknan/죽란보164.png";
import jn165 from "../asset/test/plant/juknan/죽란보165.png";
import jn166 from "../asset/test/plant/juknan/죽란보166.png";
import jn167 from "../asset/test/plant/juknan/죽란보167.png";
import jn168 from "../asset/test/plant/juknan/죽란보168.png";
import jn169 from "../asset/test/plant/juknan/죽란보169.png";
import jn170 from "../asset/test/plant/juknan/죽란보170.png";
import jn171 from "../asset/test/plant/juknan/죽란보171.png";
import jn172 from "../asset/test/plant/juknan/죽란보172.png";
import jn173 from "../asset/test/plant/juknan/죽란보173.png";
import jn174 from "../asset/test/plant/juknan/죽란보174.png";
import jn175 from "../asset/test/plant/juknan/죽란보175.png";
import jn176 from "../asset/test/plant/juknan/죽란보176.png";


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
import r31 from "../asset/test/rock/석보31.png";
import r32 from "../asset/test/rock/석보32.png";
import r33 from "../asset/test/rock/석보33.png";
import r34 from "../asset/test/rock/석보34.png";
import r35 from "../asset/test/rock/석보35.png";
import r36 from "../asset/test/rock/석보36.png";
import r37 from "../asset/test/rock/석보37.png";
import r38 from "../asset/test/rock/석보38.png";
import r39 from "../asset/test/rock/석보39.png";
import r40 from "../asset/test/rock/석보40.png";
import r41 from "../asset/test/rock/석보41.png";
import r42 from "../asset/test/rock/석보42.png";
import r43 from "../asset/test/rock/석보43.png";
import r44 from "../asset/test/rock/석보44.png";
import r45 from "../asset/test/rock/석보45.png";
import r46 from "../asset/test/rock/석보46.png";
import r47 from "../asset/test/rock/석보47.png";
import r48 from "../asset/test/rock/석보48.png";
import r49 from "../asset/test/rock/석보49.png";
import r50 from "../asset/test/rock/석보50.png";
import r51 from "../asset/test/rock/석보51.png";
import r52 from "../asset/test/rock/석보52.png";
import r53 from "../asset/test/rock/석보53.png";
import r54 from "../asset/test/rock/석보54.png";
import r55 from "../asset/test/rock/석보55.png";

import r58 from "../asset/test/rock/석보58.png";
import r59 from "../asset/test/rock/석보59.png";
import r60 from "../asset/test/rock/석보60.png";
import r61 from "../asset/test/rock/석보61.png";
import r62 from "../asset/test/rock/석보62.png";
import r63 from "../asset/test/rock/석보63.png";
import r64 from "../asset/test/rock/석보64.png";
import r65 from "../asset/test/rock/석보65.png";
import r66 from "../asset/test/rock/석보66.png";
import r67 from "../asset/test/rock/석보67.png";
import r68 from "../asset/test/rock/석보68.png";
import r69 from "../asset/test/rock/석보69.png";
import r70 from "../asset/test/rock/석보70.png";
import r71 from "../asset/test/rock/석보71.png";
import r72 from "../asset/test/rock/석보72.png";
import r73 from "../asset/test/rock/석보73.png";
import r74 from "../asset/test/rock/석보74.png";
import r75 from "../asset/test/rock/석보75.png";
import r76 from "../asset/test/rock/석보76.png";
import r77 from "../asset/test/rock/석보77.png";
import r78 from "../asset/test/rock/석보78.png";
import r79 from "../asset/test/rock/석보79.png";
import r80 from "../asset/test/rock/석보80.png";
import r81 from "../asset/test/rock/석보81.png";
import r82 from "../asset/test/rock/석보82.png";
import r83 from "../asset/test/rock/석보83.png";
import r84 from "../asset/test/rock/석보84.png";
import r85 from "../asset/test/rock/석보85.png";
import r86 from "../asset/test/rock/석보86.png";
import r87 from "../asset/test/rock/석보87.png";
import r88 from "../asset/test/rock/석보88.png";
import r89 from "../asset/test/rock/석보89.png";
import r90 from "../asset/test/rock/석보90.png";
import r91 from "../asset/test/rock/석보91.png";
import r92 from "../asset/test/rock/석보92.png";
import r93 from "../asset/test/rock/석보93.png";
import r94 from "../asset/test/rock/석보94.png";
import r95 from "../asset/test/rock/석보95.png";
import r96 from "../asset/test/rock/석보96.png";
import r97 from "../asset/test/rock/석보97.png";
import r98 from "../asset/test/rock/석보98.png";
import r99 from "../asset/test/rock/석보99.png";
import r100 from "../asset/test/rock/석보100.png";
import r101 from "../asset/test/rock/석보101.png";
import r102 from "../asset/test/rock/석보102.png";
import r103 from "../asset/test/rock/석보103.png";
import r104 from "../asset/test/rock/석보104.png";
import r105 from "../asset/test/rock/석보105.png";

import r107 from "../asset/test/rock/석보107.png";
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
import r122 from "../asset/test/rock/석보122.png";
import r123 from "../asset/test/rock/석보123.png";
import r124 from "../asset/test/rock/석보124.png";
import r125 from "../asset/test/rock/석보125.png";
import r126 from "../asset/test/rock/석보126.png";
import r127 from "../asset/test/rock/석보127.png";
import r128 from "../asset/test/rock/석보128.png";
import r129 from "../asset/test/rock/석보129.png";
import r130 from "../asset/test/rock/석보130.png";
import r131 from "../asset/test/rock/석보131.png";
import r132 from "../asset/test/rock/석보132.png";
import r133 from "../asset/test/rock/석보133.png";
import r134 from "../asset/test/rock/석보134.png";
import r135 from "../asset/test/rock/석보135.png";
import r136 from "../asset/test/rock/석보136.png";
import r137 from "../asset/test/rock/석보137.png";
import r138 from "../asset/test/rock/석보138.png";


import t1_1 from "../asset/test/tree/수보1-1.png";
import t1_2 from "../asset/test/tree/수보1-2.png";
import t1_3 from "../asset/test/tree/수보1-3.png";
import t1_4 from "../asset/test/tree/수보1-4.png";
import t1_5 from "../asset/test/tree/수보1-5.png";
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
import t12_1 from "../asset/test/tree/수보12-1.png";
import t12_2 from "../asset/test/tree/수보12-2.png";
import t12 from "../asset/test/tree/수보12.png";
import t13 from "../asset/test/tree/수보13.png";
import t14_1 from "../asset/test/tree/수보14-1.png";
import t14_2 from "../asset/test/tree/수보14-2.png";
import t15 from "../asset/test/tree/수보15.png";
import t16_1 from "../asset/test/tree/수보16-1.png";
import t16_2 from "../asset/test/tree/수보16-2.png";
import t16_3 from "../asset/test/tree/수보16-3.png";
import t16_4 from "../asset/test/tree/수보16-4.png";
import t16_5 from "../asset/test/tree/수보16-5.png";
import t17 from "../asset/test/tree/수보17.png";
import t18 from "../asset/test/tree/수보18.png";
import t19 from "../asset/test/tree/수보19.png";
import t20 from "../asset/test/tree/수보20.png";
import t21 from "../asset/test/tree/수보21.png";
import t22_1 from "../asset/test/tree/수보22-1.png";
import t22_2 from "../asset/test/tree/수보22-2.png";
import t23 from "../asset/test/tree/수보23.png";
import t24 from "../asset/test/tree/수보24.png";
import t25 from "../asset/test/tree/수보25.png";
import t26 from "../asset/test/tree/수보26.png";
import t27 from "../asset/test/tree/수보27.png";
import t28 from "../asset/test/tree/수보28.png";
import t29 from "../asset/test/tree/수보29.png";
import t30 from "../asset/test/tree/수보30.png";
import t31 from "../asset/test/tree/수보31.png";
import t32 from "../asset/test/tree/수보32.png";
import t33 from "../asset/test/tree/수보33.png";
import t34 from "../asset/test/tree/수보34.png";
import t35 from "../asset/test/tree/수보35.png";
import t36 from "../asset/test/tree/수보36.png";
import t37 from "../asset/test/tree/수보37.png";

import t39 from "../asset/test/tree/수보39.png";

import t41 from "../asset/test/tree/수보41.png";

import t43 from "../asset/test/tree/수보43.png";

import t47 from "../asset/test/tree/수보47.png";
import t48 from "../asset/test/tree/수보48.png";

import t52 from "../asset/test/tree/수보52.png";

import t54 from "../asset/test/tree/수보54.png";
import t55 from "../asset/test/tree/수보55.png";
import t56 from "../asset/test/tree/수보56.png";
import t57 from "../asset/test/tree/수보57.png";
import t58 from "../asset/test/tree/수보58.png";

import t60 from "../asset/test/tree/수보60.png";

import t63 from "../asset/test/tree/수보63.png";
import t64 from "../asset/test/tree/수보64.png";

import t66 from "../asset/test/tree/수보66.png";


import t69 from "../asset/test/tree/수보69.png";

import t71 from "../asset/test/tree/수보71.png";
import t72 from "../asset/test/tree/수보72.png";

import t74 from "../asset/test/tree/수보74.png";

import t76 from "../asset/test/tree/수보76.png";
import t77 from "../asset/test/tree/수보77.png";

import t80 from "../asset/test/tree/수보80.png";


import t85 from "../asset/test/tree/수보85.png";


import t91 from "../asset/test/tree/수보91.png";
import t92 from "../asset/test/tree/수보92.png";
import t93 from "../asset/test/tree/수보93.png";
import t94 from "../asset/test/tree/수보94.png";
import t95 from "../asset/test/tree/수보95.png";

import t97 from "../asset/test/tree/수보97.png";
import t98 from "../asset/test/tree/수보98.png";


import t103 from "../asset/test/tree/수보103.png";

import t106 from "../asset/test/tree/수보106.png";
import t107 from "../asset/test/tree/수보107.png";
import t108 from "../asset/test/tree/수보108.png";
import t109 from "../asset/test/tree/수보109.png";
import t110 from "../asset/test/tree/수보110.png";
import t111 from "../asset/test/tree/수보111.png";

import t113 from "../asset/test/tree/수보113.png";
import t114 from "../asset/test/tree/수보114.png";
import t115 from "../asset/test/tree/수보115.png";
import t116 from "../asset/test/tree/수보116.png";

import t118 from "../asset/test/tree/수보118.png";

import t120 from "../asset/test/tree/수보120.png";
import t121 from "../asset/test/tree/수보121.png";
import t122 from "../asset/test/tree/수보122.png";

import t124 from "../asset/test/tree/수보124.png";
import t125 from "../asset/test/tree/수보125.png";
import t126 from "../asset/test/tree/수보126.png";
import t127 from "../asset/test/tree/수보127.png";
import t128 from "../asset/test/tree/수보128.png";
import t129 from "../asset/test/tree/수보129.png";

import t131 from "../asset/test/tree/수보131.png";
import t132 from "../asset/test/tree/수보132.png";
import t133 from "../asset/test/tree/수보133.png";
import t134 from "../asset/test/tree/수보134.png";
import t135 from "../asset/test/tree/수보135.png";
import t136 from "../asset/test/tree/수보136.png";
import t137 from "../asset/test/tree/수보137.png";
import t138 from "../asset/test/tree/수보138.png";
import t139 from "../asset/test/tree/수보139.png";
import t140 from "../asset/test/tree/수보140.png";
import t141 from "../asset/test/tree/수보141.png";
import t142 from "../asset/test/tree/수보142.png";
import t143 from "../asset/test/tree/수보143.png";
import t144 from "../asset/test/tree/수보144.png";
import t145 from "../asset/test/tree/수보145.png";
import t146 from "../asset/test/tree/수보146.png";
import t147 from "../asset/test/tree/수보147.png";
import t148 from "../asset/test/tree/수보148.png";
import t149 from "../asset/test/tree/수보149.png";
import t150 from "../asset/test/tree/수보150.png";
import t151 from "../asset/test/tree/수보151.png";
import t152 from "../asset/test/tree/수보152.png";
import t153 from "../asset/test/tree/수보153.png";
import t154 from "../asset/test/tree/수보154.png";
import t155 from "../asset/test/tree/수보155.png";
import t156 from "../asset/test/tree/수보156.png";
import t157 from "../asset/test/tree/수보157.png";
import t158 from "../asset/test/tree/수보158.png";
import t159 from "../asset/test/tree/수보159.png";
import t160 from "../asset/test/tree/수보160.png";
import t161 from "../asset/test/tree/수보161.png";
import t162 from "../asset/test/tree/수보162.png";
import t163 from "../asset/test/tree/수보163.png";
import t164 from "../asset/test/tree/수보164.png";
import t165 from "../asset/test/tree/수보165.png";
import t166 from "../asset/test/tree/수보166.png";
import t167 from "../asset/test/tree/수보167.png";
import t168 from "../asset/test/tree/수보168.png";
import t169 from "../asset/test/tree/수보169.png";
import t170 from "../asset/test/tree/수보170.png";
import t171 from "../asset/test/tree/수보171.png";
import t172 from "../asset/test/tree/수보172.png";
import t173 from "../asset/test/tree/수보173.png";
import t174 from "../asset/test/tree/수보174.png";
import t175 from "../asset/test/tree/수보175.png";
import t176 from "../asset/test/tree/수보176.png";
import t177 from "../asset/test/tree/수보177.png";
import t178 from "../asset/test/tree/수보178.png";
import t179 from "../asset/test/tree/수보179.png";
import t180 from "../asset/test/tree/수보180.png";
import t181 from "../asset/test/tree/수보181.png";
import t182 from "../asset/test/tree/수보182.png";
import t183 from "../asset/test/tree/수보183.png";
import t184 from "../asset/test/tree/수보184.png";
import t185 from "../asset/test/tree/수보185.png";
import t186 from "../asset/test/tree/수보186.png";
import t187 from "../asset/test/tree/수보187.png";
import t188 from "../asset/test/tree/수보188.png";
import t189 from "../asset/test/tree/수보189.png";
import t190 from "../asset/test/tree/수보190.png";
import t191 from "../asset/test/tree/수보191.png";
import t192 from "../asset/test/tree/수보192.png";
import t193 from "../asset/test/tree/수보193.png";
import t194 from "../asset/test/tree/수보194.png";
import t195 from "../asset/test/tree/수보195.png";
import t196 from "../asset/test/tree/수보196.png";
import t197 from "../asset/test/tree/수보197.png";
import t198 from "../asset/test/tree/수보198.png";
import t199 from "../asset/test/tree/수보199.png";
import t200 from "../asset/test/tree/수보200.png";
import t201 from "../asset/test/tree/수보201.png";
import t202 from "../asset/test/tree/수보202.png";
import t203 from "../asset/test/tree/수보203.png";
import t204 from "../asset/test/tree/수보204.png";
import t205 from "../asset/test/tree/수보205.png";
import t206 from "../asset/test/tree/수보206.png";
import t207 from "../asset/test/tree/수보207.png";
import t208 from "../asset/test/tree/수보208.png";
import t209 from "../asset/test/tree/수보209.png";
import t210 from "../asset/test/tree/수보210.png";
import t211 from "../asset/test/tree/수보211.png";
import t212 from "../asset/test/tree/수보212.png";
import t213 from "../asset/test/tree/수보213.png";
import t214 from "../asset/test/tree/수보214.png";
import t215 from "../asset/test/tree/수보215.png";
import t216 from "../asset/test/tree/수보216.png";
import t217 from "../asset/test/tree/수보217.png";
import t218 from "../asset/test/tree/수보218.png";
import t219 from "../asset/test/tree/수보219.png";
import t220 from "../asset/test/tree/수보220.png";
import t221 from "../asset/test/tree/수보221.png";
import t222 from "../asset/test/tree/수보222.png";
import t223 from "../asset/test/tree/수보223.png";
import t224 from "../asset/test/tree/수보224.png";
import t225 from "../asset/test/tree/수보225.png";
import t226 from "../asset/test/tree/수보226.png";
import t227 from "../asset/test/tree/수보227.png";
import t228 from "../asset/test/tree/수보228.png";


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
import o21 from "../asset/test/other/기타21.png";
import o22 from "../asset/test/other/기타22.png";
import o23 from "../asset/test/other/기타23.png";
import o24 from "../asset/test/other/기타24.png";
import o25 from "../asset/test/other/기타25.png";
import o26 from "../asset/test/other/기타26.png";
import o27 from "../asset/test/other/기타27.png";
import o28 from "../asset/test/other/기타28.png";
import o29 from "../asset/test/other/기타29.png";
import o30 from "../asset/test/other/기타30.png";
import o31 from "../asset/test/other/기타31.png";
import o32 from "../asset/test/other/기타32.png";
import o33 from "../asset/test/other/기타33.png";
import o34 from "../asset/test/other/기타34.png";
import o35 from "../asset/test/other/기타35.png";
import o36 from "../asset/test/other/기타36.png";
import o37 from "../asset/test/other/기타37.png";
import o38 from "../asset/test/other/기타38.png";
import o39 from "../asset/test/other/기타39.png";
import o40 from "../asset/test/other/기타40.png";
import o41 from "../asset/test/other/기타41.png";
import o42 from "../asset/test/other/기타42.png";
import o43 from "../asset/test/other/기타43.png";
import o44 from "../asset/test/other/기타44.png";
import o45 from "../asset/test/other/기타45.png";
import o46 from "../asset/test/other/기타46.png";
import o47 from "../asset/test/other/기타47.png";
import o48 from "../asset/test/other/기타48.png";
import o49 from "../asset/test/other/기타49.png";
import o50 from "../asset/test/other/기타50.png";
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
import o71 from "../asset/test/other/기타71.png";
import o72 from "../asset/test/other/기타72.png";
import o73 from "../asset/test/other/기타73.png";


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
  { id: "b_21", imageUrl: b21, width: 0, height: 0 },
  { id: "b_22", imageUrl: b22, width: 0, height: 0 },
  { id: "b_23", imageUrl: b23, width: 0, height: 0 },
  { id: "b_24", imageUrl: b24, width: 0, height: 0 },
  { id: "b_25", imageUrl: b25, width: 0, height: 0 },
  { id: "b_26", imageUrl: b26, width: 0, height: 0 },
  { id: "b_27", imageUrl: b27, width: 0, height: 0 },
  { id: "b_28", imageUrl: b28, width: 0, height: 0 },
  { id: "b_29", imageUrl: b29, width: 0, height: 0 },
  { id: "b_30", imageUrl: b30, width: 0, height: 0 },
  { id: "b_31", imageUrl: b31, width: 0, height: 0 },
  { id: "b_32", imageUrl: b32, width: 0, height: 0 },
  { id: "b_33", imageUrl: b33, width: 0, height: 0 },
  { id: "b_34", imageUrl: b34, width: 0, height: 0 },
  { id: "b_35", imageUrl: b35, width: 0, height: 0 },
  { id: "b_36", imageUrl: b36, width: 0, height: 0 },
  { id: "b_37", imageUrl: b37, width: 0, height: 0 },
  { id: "b_38", imageUrl: b38, width: 0, height: 0 },
  { id: "b_39", imageUrl: b39, width: 0, height: 0 },
  { id: "b_40", imageUrl: b40, width: 0, height: 0 },
  { id: "b_41", imageUrl: b41, width: 0, height: 0 },
  { id: "b_42", imageUrl: b42, width: 0, height: 0 },
  { id: "b_43", imageUrl: b43, width: 0, height: 0 },
  { id: "b_44", imageUrl: b44, width: 0, height: 0 },
  { id: "b_45", imageUrl: b45, width: 0, height: 0 },
  { id: "b_46", imageUrl: b46, width: 0, height: 0 },
  { id: "b_47", imageUrl: b47, width: 0, height: 0 },
  { id: "b_48", imageUrl: b48, width: 0, height: 0 },
  { id: "b_49", imageUrl: b49, width: 0, height: 0 },
  { id: "b_50", imageUrl: b50, width: 0, height: 0 },
  { id: "b_51", imageUrl: b51, width: 0, height: 0 },
  { id: "b_52", imageUrl: b52, width: 0, height: 0 },
  { id: "b_53", imageUrl: b53, width: 0, height: 0 },
  { id: "b_54", imageUrl: b54, width: 0, height: 0 },
  { id: "b_55", imageUrl: b55, width: 0, height: 0 },
  { id: "b_56", imageUrl: b56, width: 0, height: 0 },
  { id: "b_57", imageUrl: b57, width: 0, height: 0 },
  { id: "b_58", imageUrl: b58, width: 0, height: 0 },
  { id: "b_59", imageUrl: b59, width: 0, height: 0 },
  { id: "b_60", imageUrl: b60, width: 0, height: 0 },
  { id: "b_61", imageUrl: b61, width: 0, height: 0 },
  { id: "b_62", imageUrl: b62, width: 0, height: 0 },
  { id: "b_63", imageUrl: b63, width: 0, height: 0 },
  { id: "b_64", imageUrl: b64, width: 0, height: 0 },
  { id: "b_65", imageUrl: b65, width: 0, height: 0 },
  { id: "b_66", imageUrl: b66, width: 0, height: 0 },
  { id: "b_67", imageUrl: b67, width: 0, height: 0 },
  { id: "b_68", imageUrl: b68, width: 0, height: 0 },
  { id: "b_69", imageUrl: b69, width: 0, height: 0 },
  { id: "b_70", imageUrl: b70, width: 0, height: 0 },
  { id: "b_71", imageUrl: b71, width: 0, height: 0 },
  { id: "b_72", imageUrl: b72, width: 0, height: 0 },
  { id: "b_73", imageUrl: b73, width: 0, height: 0 },
  { id: "b_74", imageUrl: b74, width: 0, height: 0 },
  { id: "b_75", imageUrl: b75, width: 0, height: 0 },
  { id: "b_76", imageUrl: b76, width: 0, height: 0 },
  { id: "b_77", imageUrl: b77, width: 0, height: 0 },
  { id: "b_78", imageUrl: b78, width: 0, height: 0 },
  { id: "b_79", imageUrl: b79, width: 0, height: 0 },
  { id: "b_80", imageUrl: b80, width: 0, height: 0 },
  { id: "b_81", imageUrl: b81, width: 0, height: 0 },
  { id: "b_82", imageUrl: b82, width: 0, height: 0 },
  { id: "b_83", imageUrl: b83, width: 0, height: 0 },
  { id: "b_84", imageUrl: b84, width: 0, height: 0 },
  { id: "b_85", imageUrl: b85, width: 0, height: 0 },
  { id: "b_86", imageUrl: b86, width: 0, height: 0 },
  { id: "b_87", imageUrl: b87, width: 0, height: 0 },
  { id: "b_88", imageUrl: b88, width: 0, height: 0 },
  { id: "b_89", imageUrl: b89, width: 0, height: 0 },
  { id: "b_90", imageUrl: b90, width: 0, height: 0 },
  { id: "b_91", imageUrl: b91, width: 0, height: 0 },
  { id: "b_92", imageUrl: b92, width: 0, height: 0 },
  { id: "b_93", imageUrl: b93, width: 0, height: 0 },
  { id: "b_94", imageUrl: b94, width: 0, height: 0 },
  { id: "b_95", imageUrl: b95, width: 0, height: 0 },
  { id: "b_96", imageUrl: b96, width: 0, height: 0 },
  { id: "b_97", imageUrl: b97, width: 0, height: 0 },
  { id: "b_98", imageUrl: b98, width: 0, height: 0 },
  { id: "b_99", imageUrl: b99, width: 0, height: 0 },
  { id: "b_100", imageUrl: b100, width: 0, height: 0 },
  { id: "b_101", imageUrl: b101, width: 0, height: 0 },
  { id: "b_102", imageUrl: b102, width: 0, height: 0 },
  { id: "b_103", imageUrl: b103, width: 0, height: 0 },
  { id: "b_104", imageUrl: b104, width: 0, height: 0 },
  { id: "b_105", imageUrl: b105, width: 0, height: 0 },
  { id: "b_106", imageUrl: b106, width: 0, height: 0 },
  { id: "b_107", imageUrl: b107, width: 0, height: 0 },
  { id: "b_108", imageUrl: b108, width: 0, height: 0 },
  { id: "b_109", imageUrl: b109, width: 0, height: 0 },
  { id: "b_110", imageUrl: b110, width: 0, height: 0 },
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
  { id: "p_137", imageUrl: p137, width: 0, height: 0 },
  { id: "p_138", imageUrl: p138, width: 0, height: 0 },
  { id: "p_139", imageUrl: p139, width: 0, height: 0 },
  { id: "p_140", imageUrl: p140, width: 0, height: 0 },
  { id: "p_141", imageUrl: p141, width: 0, height: 0 },
  { id: "p_142", imageUrl: p142, width: 0, height: 0 },
  { id: "p_143", imageUrl: p143, width: 0, height: 0 },
  { id: "p_144", imageUrl: p144, width: 0, height: 0 },
  { id: "p_145", imageUrl: p145, width: 0, height: 0 },
  { id: "p_146", imageUrl: p146, width: 0, height: 0 },
  { id: "p_147", imageUrl: p147, width: 0, height: 0 },
  { id: "p_148", imageUrl: p148, width: 0, height: 0 },
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
  { id: "p_31", imageUrl: p31, width: 0, height: 0 },
  { id: "p_32", imageUrl: p32, width: 0, height: 0 },
  { id: "p_33", imageUrl: p33, width: 0, height: 0 },
  { id: "p_34", imageUrl: p34, width: 0, height: 0 },
  { id: "p_35", imageUrl: p35, width: 0, height: 0 },
  { id: "p_36", imageUrl: p36, width: 0, height: 0 },
  { id: "p_37", imageUrl: p37, width: 0, height: 0 },
  { id: "p_38", imageUrl: p38, width: 0, height: 0 },
  { id: "p_39", imageUrl: p39, width: 0, height: 0 },
  { id: "p_40", imageUrl: p40, width: 0, height: 0 },
  { id: "p_41", imageUrl: p41, width: 0, height: 0 },
  { id: "p_42", imageUrl: p42, width: 0, height: 0 },
  { id: "p_43", imageUrl: p43, width: 0, height: 0 },
  { id: "p_44", imageUrl: p44, width: 0, height: 0 },
  { id: "p_45", imageUrl: p45, width: 0, height: 0 },
  { id: "p_46", imageUrl: p46, width: 0, height: 0 },
  { id: "p_47", imageUrl: p47, width: 0, height: 0 },
  { id: "p_48", imageUrl: p48, width: 0, height: 0 },
  { id: "p_49", imageUrl: p49, width: 0, height: 0 },
  { id: "p_50", imageUrl: p50, width: 0, height: 0 },
  { id: "p_51", imageUrl: p51, width: 0, height: 0 },
  { id: "p_52", imageUrl: p52, width: 0, height: 0 },
  { id: "p_53", imageUrl: p53, width: 0, height: 0 },
  { id: "p_54", imageUrl: p54, width: 0, height: 0 },
  { id: "p_55", imageUrl: p55, width: 0, height: 0 },
  { id: "p_56", imageUrl: p56, width: 0, height: 0 },
  { id: "p_57", imageUrl: p57, width: 0, height: 0 },
  { id: "p_58", imageUrl: p58, width: 0, height: 0 },
  { id: "p_59", imageUrl: p59, width: 0, height: 0 },
  { id: "p_60", imageUrl: p60, width: 0, height: 0 },
  { id: "p_61", imageUrl: p61, width: 0, height: 0 },
  { id: "p_62", imageUrl: p62, width: 0, height: 0 },
  { id: "p_63", imageUrl: p63, width: 0, height: 0 },
  { id: "p_64", imageUrl: p64, width: 0, height: 0 },
  { id: "p_65", imageUrl: p65, width: 0, height: 0 },
  { id: "p_66", imageUrl: p66, width: 0, height: 0 },
  { id: "p_67", imageUrl: p67, width: 0, height: 0 },
  { id: "p_68", imageUrl: p68, width: 0, height: 0 },
  { id: "p_69", imageUrl: p69, width: 0, height: 0 },
  { id: "p_70", imageUrl: p70, width: 0, height: 0 },
  { id: "p_71", imageUrl: p71, width: 0, height: 0 },
  { id: "p_72", imageUrl: p72, width: 0, height: 0 },
  { id: "p_73", imageUrl: p73, width: 0, height: 0 },
  { id: "p_74", imageUrl: p74, width: 0, height: 0 },
  { id: "p_75", imageUrl: p75, width: 0, height: 0 },
  { id: "p_76", imageUrl: p76, width: 0, height: 0 },
  { id: "p_77", imageUrl: p77, width: 0, height: 0 },
  { id: "p_78", imageUrl: p78, width: 0, height: 0 },
  { id: "p_79", imageUrl: p79, width: 0, height: 0 },
  { id: "p_80", imageUrl: p80, width: 0, height: 0 },
  { id: "p_81", imageUrl: p81, width: 0, height: 0 },
  { id: "p_82", imageUrl: p82, width: 0, height: 0 },
  { id: "p_83", imageUrl: p83, width: 0, height: 0 },
  { id: "p_84", imageUrl: p84, width: 0, height: 0 },
  { id: "p_85", imageUrl: p85, width: 0, height: 0 },
  { id: "p_86", imageUrl: p86, width: 0, height: 0 },
  { id: "p_87", imageUrl: p87, width: 0, height: 0 },
  { id: "p_88", imageUrl: p88, width: 0, height: 0 },
  { id: "p_89", imageUrl: p89, width: 0, height: 0 },
  { id: "p_90", imageUrl: p90, width: 0, height: 0 },
  { id: "p_91", imageUrl: p91, width: 0, height: 0 },
  { id: "p_92", imageUrl: p92, width: 0, height: 0 },
  { id: "p_93", imageUrl: p93, width: 0, height: 0 },
  { id: "p_94", imageUrl: p94, width: 0, height: 0 },
  { id: "p_95", imageUrl: p95, width: 0, height: 0 },
  { id: "p_96", imageUrl: p96, width: 0, height: 0 },
  { id: "p_97", imageUrl: p97, width: 0, height: 0 },
  { id: "p_98", imageUrl: p98, width: 0, height: 0 },
  { id: "p_99", imageUrl: p99, width: 0, height: 0 },
  { id: "p_100", imageUrl: p100, width: 0, height: 0 },
  { id: "p_101", imageUrl: p101, width: 0, height: 0 },
  { id: "p_102", imageUrl: p102, width: 0, height: 0 },
  { id: "p_103", imageUrl: p103, width: 0, height: 0 },
  { id: "p_104", imageUrl: p104, width: 0, height: 0 },
  { id: "p_105", imageUrl: p105, width: 0, height: 0 },
  { id: "p_106", imageUrl: p106, width: 0, height: 0 },
  { id: "p_107", imageUrl: p107, width: 0, height: 0 },
  { id: "p_108", imageUrl: p108, width: 0, height: 0 },
  { id: "p_109", imageUrl: p109, width: 0, height: 0 },
  { id: "p_110", imageUrl: p110, width: 0, height: 0 },
  { id: "p_111", imageUrl: p111, width: 0, height: 0 },
  { id: "p_112", imageUrl: p112, width: 0, height: 0 },
  { id: "p_113", imageUrl: p113, width: 0, height: 0 },
  { id: "p_114", imageUrl: p114, width: 0, height: 0 },
  { id: "p_115", imageUrl: p115, width: 0, height: 0 },
  { id: "p_116", imageUrl: p116, width: 0, height: 0 },
  { id: "p_117", imageUrl: p117, width: 0, height: 0 },
  { id: "p_118", imageUrl: p118, width: 0, height: 0 },
  { id: "p_119", imageUrl: p119, width: 0, height: 0 },
  { id: "p_120", imageUrl: p120, width: 0, height: 0 },
  { id: "p_121", imageUrl: p121, width: 0, height: 0 },
  { id: "p_122", imageUrl: p122, width: 0, height: 0 },
  { id: "p_123", imageUrl: p123, width: 0, height: 0 },
  { id: "p_124", imageUrl: p124, width: 0, height: 0 },
  { id: "p_125", imageUrl: p125, width: 0, height: 0 },
  { id: "p_126", imageUrl: p126, width: 0, height: 0 },
  { id: "p_127", imageUrl: p127, width: 0, height: 0 },
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
  { id: "bd_18", imageUrl: bird_18, width: 0, height: 0 },
  { id: "bd_19", imageUrl: bird_19, width: 0, height: 0 },
  { id: "bd_20", imageUrl: bird_20, width: 0, height: 0 },
  { id: "bd_21", imageUrl: bird_21, width: 0, height: 0 },
  { id: "bd_22", imageUrl: bird_22, width: 0, height: 0 },
  { id: "bd_23", imageUrl: bird_23, width: 0, height: 0 },
  { id: "bd_24", imageUrl: bird_24, width: 0, height: 0 },
  { id: "bd_25", imageUrl: bird_25, width: 0, height: 0 },
  { id: "bd_26", imageUrl: bird_26, width: 0, height: 0 },
  { id: "bd_27", imageUrl: bird_27, width: 0, height: 0 },
  { id: "bd_28", imageUrl: bird_28, width: 0, height: 0 },
  { id: "bd_29", imageUrl: bird_29, width: 0, height: 0 },
  { id: "bd_30", imageUrl: bird_30, width: 0, height: 0 },
  { id: "bd_31", imageUrl: bird_31, width: 0, height: 0 },
  { id: "bd_32", imageUrl: bird_32, width: 0, height: 0 },

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
  { id: "i_15", imageUrl: i15, width: 0, height: 0 },
  { id: "i_16", imageUrl: i16, width: 0, height: 0 },
];

const plants: ImageData[] = [
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

  { id: "jn_26", imageUrl: jn26, width: 0, height: 0 },
  { id: "jn_27", imageUrl: jn27, width: 0, height: 0 },
  { id: "jn_28", imageUrl: jn28, width: 0, height: 0 },
  { id: "jn_29", imageUrl: jn29, width: 0, height: 0 },
  { id: "jn_30", imageUrl: jn30, width: 0, height: 0 },
  { id: "jn_31", imageUrl: jn31, width: 0, height: 0 },
  { id: "jn_32", imageUrl: jn32, width: 0, height: 0 },
  { id: "jn_33", imageUrl: jn33, width: 0, height: 0 },
  { id: "jn_34", imageUrl: jn34, width: 0, height: 0 },
  { id: "jn_35", imageUrl: jn35, width: 0, height: 0 },
  { id: "jn_36", imageUrl: jn36, width: 0, height: 0 },
  { id: "jn_37", imageUrl: jn37, width: 0, height: 0 },
  { id: "jn_38", imageUrl: jn38, width: 0, height: 0 },
  { id: "jn_39", imageUrl: jn39, width: 0, height: 0 },
  { id: "jn_40", imageUrl: jn40, width: 0, height: 0 },
  { id: "jn_41", imageUrl: jn41, width: 0, height: 0 },
  { id: "jn_42", imageUrl: jn42, width: 0, height: 0 },
  { id: "jn_43", imageUrl: jn43, width: 0, height: 0 },
  { id: "jn_44", imageUrl: jn44, width: 0, height: 0 },
  { id: "jn_45", imageUrl: jn45, width: 0, height: 0 },
  { id: "jn_46", imageUrl: jn46, width: 0, height: 0 },
  { id: "jn_47", imageUrl: jn47, width: 0, height: 0 },
  { id: "jn_48", imageUrl: jn48, width: 0, height: 0 },
  { id: "jn_49", imageUrl: jn49, width: 0, height: 0 },
  { id: "jn_50", imageUrl: jn50, width: 0, height: 0 },
  { id: "jn_51", imageUrl: jn51, width: 0, height: 0 },
  { id: "jn_52", imageUrl: jn52, width: 0, height: 0 },
  { id: "jn_53", imageUrl: jn53, width: 0, height: 0 },
  { id: "jn_54", imageUrl: jn54, width: 0, height: 0 },
  { id: "jn_55", imageUrl: jn55, width: 0, height: 0 },
  { id: "jn_56", imageUrl: jn56, width: 0, height: 0 },
  { id: "jn_57", imageUrl: jn57, width: 0, height: 0 },
  { id: "jn_58", imageUrl: jn58, width: 0, height: 0 },
  { id: "jn_59", imageUrl: jn59, width: 0, height: 0 },
  { id: "jn_60", imageUrl: jn60, width: 0, height: 0 },
  { id: "jn_61", imageUrl: jn61, width: 0, height: 0 },
  { id: "jn_62", imageUrl: jn62, width: 0, height: 0 },
  { id: "jn_63", imageUrl: jn63, width: 0, height: 0 },
  { id: "jn_64", imageUrl: jn64, width: 0, height: 0 },
  { id: "jn_65", imageUrl: jn65, width: 0, height: 0 },
  { id: "jn_66", imageUrl: jn66, width: 0, height: 0 },
  { id: "jn_67", imageUrl: jn67, width: 0, height: 0 },
  { id: "jn_68", imageUrl: jn68, width: 0, height: 0 },
  { id: "jn_69", imageUrl: jn69, width: 0, height: 0 },
  { id: "jn_70", imageUrl: jn70, width: 0, height: 0 },
  { id: "jn_71", imageUrl: jn71, width: 0, height: 0 },
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
  { id: "jn_93", imageUrl: jn93, width: 0, height: 0 },
  { id: "jn_94", imageUrl: jn94, width: 0, height: 0 },
  { id: "jn_95", imageUrl: jn95, width: 0, height: 0 },
  { id: "jn_96", imageUrl: jn96, width: 0, height: 0 },
  { id: "jn_97", imageUrl: jn97, width: 0, height: 0 },
  { id: "jn_98", imageUrl: jn98, width: 0, height: 0 },
  { id: "jn_99", imageUrl: jn99, width: 0, height: 0 },
  { id: "jn_100", imageUrl: jn100, width: 0, height: 0 },
  { id: "jn_101", imageUrl: jn101, width: 0, height: 0 },
  { id: "jn_102", imageUrl: jn102, width: 0, height: 0 },
  { id: "jn_103", imageUrl: jn103, width: 0, height: 0 },
  { id: "jn_104", imageUrl: jn104, width: 0, height: 0 },
  { id: "jn_105", imageUrl: jn105, width: 0, height: 0 },
  { id: "jn_106", imageUrl: jn106, width: 0, height: 0 },
  { id: "jn_107", imageUrl: jn107, width: 0, height: 0 },
  { id: "jn_108", imageUrl: jn108, width: 0, height: 0 },
  { id: "jn_109", imageUrl: jn109, width: 0, height: 0 },
  { id: "jn_110", imageUrl: jn110, width: 0, height: 0 },
  { id: "jn_111", imageUrl: jn111, width: 0, height: 0 },
  { id: "jn_112", imageUrl: jn112, width: 0, height: 0 },
  { id: "jn_113", imageUrl: jn113, width: 0, height: 0 },
  { id: "jn_114", imageUrl: jn114, width: 0, height: 0 },
  { id: "jn_115", imageUrl: jn115, width: 0, height: 0 },
  { id: "jn_116", imageUrl: jn116, width: 0, height: 0 },
  { id: "jn_117", imageUrl: jn117, width: 0, height: 0 },
  { id: "jn_118", imageUrl: jn118, width: 0, height: 0 },
  { id: "jn_119", imageUrl: jn119, width: 0, height: 0 },
  { id: "jn_120", imageUrl: jn120, width: 0, height: 0 },
  { id: "jn_121", imageUrl: jn121, width: 0, height: 0 },
  { id: "jn_122", imageUrl: jn122, width: 0, height: 0 },
  { id: "jn_123", imageUrl: jn123, width: 0, height: 0 },
  { id: "jn_124", imageUrl: jn124, width: 0, height: 0 },
  { id: "jn_125", imageUrl: jn125, width: 0, height: 0 },
  { id: "jn_126", imageUrl: jn126, width: 0, height: 0 },
  { id: "jn_127", imageUrl: jn127, width: 0, height: 0 },
  { id: "jn_128", imageUrl: jn128, width: 0, height: 0 },
  { id: "jn_129", imageUrl: jn129, width: 0, height: 0 },
  { id: "jn_130", imageUrl: jn130, width: 0, height: 0 },
  { id: "jn_131", imageUrl: jn131, width: 0, height: 0 },
  { id: "jn_132", imageUrl: jn132, width: 0, height: 0 },
  { id: "jn_133", imageUrl: jn133, width: 0, height: 0 },
  { id: "jn_134", imageUrl: jn134, width: 0, height: 0 },
  { id: "jn_135", imageUrl: jn135, width: 0, height: 0 },
  { id: "jn_136", imageUrl: jn136, width: 0, height: 0 },
  { id: "jn_137", imageUrl: jn137, width: 0, height: 0 },
  { id: "jn_138", imageUrl: jn138, width: 0, height: 0 },
  { id: "jn_139", imageUrl: jn139, width: 0, height: 0 },
  { id: "jn_140", imageUrl: jn140, width: 0, height: 0 },
  { id: "jn_141", imageUrl: jn141, width: 0, height: 0 },
  { id: "jn_142", imageUrl: jn142, width: 0, height: 0 },
  { id: "jn_143", imageUrl: jn143, width: 0, height: 0 },
  { id: "jn_144", imageUrl: jn144, width: 0, height: 0 },
  { id: "jn_145", imageUrl: jn145, width: 0, height: 0 },
  { id: "jn_146", imageUrl: jn146, width: 0, height: 0 },
  { id: "jn_147", imageUrl: jn147, width: 0, height: 0 },
  { id: "jn_148", imageUrl: jn148, width: 0, height: 0 },
  { id: "jn_149", imageUrl: jn149, width: 0, height: 0 },
  { id: "jn_150", imageUrl: jn150, width: 0, height: 0 },
  { id: "jn_151", imageUrl: jn151, width: 0, height: 0 },
  { id: "jn_152", imageUrl: jn152, width: 0, height: 0 },
  { id: "jn_153", imageUrl: jn153, width: 0, height: 0 },
  { id: "jn_154", imageUrl: jn154, width: 0, height: 0 },
  { id: "jn_155", imageUrl: jn155, width: 0, height: 0 },
  { id: "jn_156", imageUrl: jn156, width: 0, height: 0 },
  { id: "jn_157", imageUrl: jn157, width: 0, height: 0 },
  { id: "jn_158", imageUrl: jn158, width: 0, height: 0 },
  { id: "jn_159", imageUrl: jn159, width: 0, height: 0 },
  { id: "jn_160", imageUrl: jn160, width: 0, height: 0 },
  { id: "jn_161", imageUrl: jn161, width: 0, height: 0 },
  { id: "jn_162", imageUrl: jn162, width: 0, height: 0 },
  { id: "jn_163", imageUrl: jn163, width: 0, height: 0 },
  { id: "jn_164", imageUrl: jn164, width: 0, height: 0 },
  { id: "jn_165", imageUrl: jn165, width: 0, height: 0 },
  { id: "jn_166", imageUrl: jn166, width: 0, height: 0 },
  { id: "jn_167", imageUrl: jn167, width: 0, height: 0 },
  { id: "jn_168", imageUrl: jn168, width: 0, height: 0 },
  { id: "jn_169", imageUrl: jn169, width: 0, height: 0 },
  { id: "jn_170", imageUrl: jn170, width: 0, height: 0 },
  { id: "jn_171", imageUrl: jn171, width: 0, height: 0 },
  { id: "jn_172", imageUrl: jn172, width: 0, height: 0 },
  { id: "jn_173", imageUrl: jn173, width: 0, height: 0 },
  { id: "jn_174", imageUrl: jn174, width: 0, height: 0 },
  { id: "jn_175", imageUrl: jn175, width: 0, height: 0 },
  { id: "jn_176", imageUrl: jn176, width: 0, height: 0 },
];

const trees: ImageData[] = [
  { id: "t_154", imageUrl: t154, width: 0, height: 0 },
  { id: "t_155", imageUrl: t155, width: 0, height: 0 },
  { id: "t_156", imageUrl: t156, width: 0, height: 0 },
  { id: "t_157", imageUrl: t157, width: 0, height: 0 },
  { id: "t_158", imageUrl: t158, width: 0, height: 0 },
  { id: "t_159", imageUrl: t159, width: 0, height: 0 },
  { id: "t_160", imageUrl: t160, width: 0, height: 0 },
  { id: "t_161", imageUrl: t161, width: 0, height: 0 },
  { id: "t_162", imageUrl: t162, width: 0, height: 0 },
  { id: "t_163", imageUrl: t163, width: 0, height: 0 },
  { id: "t_164", imageUrl: t164, width: 0, height: 0 },
  { id: "t_165", imageUrl: t165, width: 0, height: 0 },
  { id: "t_166", imageUrl: t166, width: 0, height: 0 },
  { id: "t_167", imageUrl: t167, width: 0, height: 0 },
  { id: "t_168", imageUrl: t168, width: 0, height: 0 },
  { id: "t_169", imageUrl: t169, width: 0, height: 0 },
  { id: "t_170", imageUrl: t170, width: 0, height: 0 },
  { id: "t_171", imageUrl: t171, width: 0, height: 0 },
  { id: "t_172", imageUrl: t172, width: 0, height: 0 },
  { id: "t_173", imageUrl: t173, width: 0, height: 0 },
  { id: "t_174", imageUrl: t174, width: 0, height: 0 },
  { id: "t_175", imageUrl: t175, width: 0, height: 0 },
  { id: "t_176", imageUrl: t176, width: 0, height: 0 },
  { id: "t_177", imageUrl: t177, width: 0, height: 0 },
  { id: "t_178", imageUrl: t178, width: 0, height: 0 },
  { id: "t_179", imageUrl: t179, width: 0, height: 0 },
  { id: "t_180", imageUrl: t180, width: 0, height: 0 },
  { id: "t_181", imageUrl: t181, width: 0, height: 0 },
  { id: "t_182", imageUrl: t182, width: 0, height: 0 },
  { id: "t_183", imageUrl: t183, width: 0, height: 0 },
  { id: "t_184", imageUrl: t184, width: 0, height: 0 },
  { id: "t_185", imageUrl: t185, width: 0, height: 0 },
  { id: "t_186", imageUrl: t186, width: 0, height: 0 },
  { id: "t_187", imageUrl: t187, width: 0, height: 0 },
  { id: "t_188", imageUrl: t188, width: 0, height: 0 },
  { id: "t_189", imageUrl: t189, width: 0, height: 0 },
  { id: "t_190", imageUrl: t190, width: 0, height: 0 },
  { id: "t_191", imageUrl: t191, width: 0, height: 0 },
  { id: "t_192", imageUrl: t192, width: 0, height: 0 },
  { id: "t_193", imageUrl: t193, width: 0, height: 0 },
  { id: "t_194", imageUrl: t194, width: 0, height: 0 },
  { id: "t_195", imageUrl: t195, width: 0, height: 0 },
  { id: "t_196", imageUrl: t196, width: 0, height: 0 },
  { id: "t_197", imageUrl: t197, width: 0, height: 0 },
  { id: "t_198", imageUrl: t198, width: 0, height: 0 },
  { id: "t_199", imageUrl: t199, width: 0, height: 0 },
  { id: "t_200", imageUrl: t200, width: 0, height: 0 },
  { id: "t_201", imageUrl: t201, width: 0, height: 0 },
  { id: "t_202", imageUrl: t202, width: 0, height: 0 },
  { id: "t_203", imageUrl: t203, width: 0, height: 0 },
  { id: "t_204", imageUrl: t204, width: 0, height: 0 },
  { id: "t_205", imageUrl: t205, width: 0, height: 0 },
  { id: "t_206", imageUrl: t206, width: 0, height: 0 },
  { id: "t_207", imageUrl: t207, width: 0, height: 0 },
  { id: "t_208", imageUrl: t208, width: 0, height: 0 },
  { id: "t_209", imageUrl: t209, width: 0, height: 0 },
  { id: "t_210", imageUrl: t210, width: 0, height: 0 },
  { id: "t_211", imageUrl: t211, width: 0, height: 0 },
  { id: "t_212", imageUrl: t212, width: 0, height: 0 },
  { id: "t_213", imageUrl: t213, width: 0, height: 0 },
  { id: "t_214", imageUrl: t214, width: 0, height: 0 },
  { id: "t_215", imageUrl: t215, width: 0, height: 0 },
  { id: "t_216", imageUrl: t216, width: 0, height: 0 },
  { id: "t_217", imageUrl: t217, width: 0, height: 0 },
  { id: "t_218", imageUrl: t218, width: 0, height: 0 },
  { id: "t_219", imageUrl: t219, width: 0, height: 0 },
  { id: "t_220", imageUrl: t220, width: 0, height: 0 },
  { id: "t_221", imageUrl: t221, width: 0, height: 0 },
  { id: "t_222", imageUrl: t222, width: 0, height: 0 },
  { id: "t_223", imageUrl: t223, width: 0, height: 0 },
  { id: "t_224", imageUrl: t224, width: 0, height: 0 },
  { id: "t_225", imageUrl: t225, width: 0, height: 0 },
  { id: "t_226", imageUrl: t226, width: 0, height: 0 },
  { id: "t_227", imageUrl: t227, width: 0, height: 0 },
  { id: "t_228", imageUrl: t228, width: 0, height: 0 },
  { id: "t_1_1", imageUrl: t1_1, width: 0, height: 0 },
  { id: "t_1_2", imageUrl: t1_2, width: 0, height: 0 },
  { id: "t_1_3", imageUrl: t1_3, width: 0, height: 0 },
  { id: "t_1_4", imageUrl: t1_4, width: 0, height: 0 },
  { id: "t_1_5", imageUrl: t1_5, width: 0, height: 0 },
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
  { id: "t_12_1", imageUrl: t12_1, width: 0, height: 0 },
  { id: "t_12_2", imageUrl: t12_2, width: 0, height: 0 },
  { id: "t_12", imageUrl: t12, width: 0, height: 0 },
  { id: "t_13", imageUrl: t13, width: 0, height: 0 },
  { id: "t_14_1", imageUrl: t14_1, width: 0, height: 0 },
  { id: "t_14_2", imageUrl: t14_2, width: 0, height: 0 },
  { id: "t_15", imageUrl: t15, width: 0, height: 0 },
  { id: "t_16_1", imageUrl: t16_1, width: 0, height: 0 },
  { id: "t_16_2", imageUrl: t16_2, width: 0, height: 0 },
  { id: "t_16_3", imageUrl: t16_3, width: 0, height: 0 },
  { id: "t_16_4", imageUrl: t16_4, width: 0, height: 0 },
  { id: "t_16_5", imageUrl: t16_5, width: 0, height: 0 },
  { id: "t_17", imageUrl: t17, width: 0, height: 0 },
  { id: "t_18", imageUrl: t18, width: 0, height: 0 },
  { id: "t_19", imageUrl: t19, width: 0, height: 0 },
  { id: "t_20", imageUrl: t20, width: 0, height: 0 },
  { id: "t_21", imageUrl: t21, width: 0, height: 0 },
  { id: "t_22_1", imageUrl: t22_1, width: 0, height: 0 },
  { id: "t_22_2", imageUrl: t22_2, width: 0, height: 0 },
  { id: "t_23", imageUrl: t23, width: 0, height: 0 },
  { id: "t_24", imageUrl: t24, width: 0, height: 0 },
  { id: "t_25", imageUrl: t25, width: 0, height: 0 },
  { id: "t_26", imageUrl: t26, width: 0, height: 0 },
  { id: "t_27", imageUrl: t27, width: 0, height: 0 },
  { id: "t_28", imageUrl: t28, width: 0, height: 0 },
  { id: "t_29", imageUrl: t29, width: 0, height: 0 },
  { id: "t_30", imageUrl: t30, width: 0, height: 0 },
  { id: "t_31", imageUrl: t31, width: 0, height: 0 },
  { id: "t_32", imageUrl: t32, width: 0, height: 0 },
  { id: "t_33", imageUrl: t33, width: 0, height: 0 },
  { id: "t_34", imageUrl: t34, width: 0, height: 0 },
  { id: "t_35", imageUrl: t35, width: 0, height: 0 },
  { id: "t_36", imageUrl: t36, width: 0, height: 0 },
  { id: "t_37", imageUrl: t37, width: 0, height: 0 },
  { id: "t_39", imageUrl: t39, width: 0, height: 0 },
  { id: "t_41", imageUrl: t41, width: 0, height: 0 },
  { id: "t_43", imageUrl: t43, width: 0, height: 0 },
  { id: "t_47", imageUrl: t47, width: 0, height: 0 },
  { id: "t_48", imageUrl: t48, width: 0, height: 0 },
  { id: "t_52", imageUrl: t52, width: 0, height: 0 },
  { id: "t_54", imageUrl: t54, width: 0, height: 0 },
  { id: "t_55", imageUrl: t55, width: 0, height: 0 },
  { id: "t_56", imageUrl: t56, width: 0, height: 0 },
  { id: "t_57", imageUrl: t57, width: 0, height: 0 },
  { id: "t_58", imageUrl: t58, width: 0, height: 0 },
  { id: "t_60", imageUrl: t60, width: 0, height: 0 },
  { id: "t_63", imageUrl: t63, width: 0, height: 0 },
  { id: "t_64", imageUrl: t64, width: 0, height: 0 },
  { id: "t_66", imageUrl: t66, width: 0, height: 0 },
  { id: "t_69", imageUrl: t69, width: 0, height: 0 },
  { id: "t_71", imageUrl: t71, width: 0, height: 0 },
  { id: "t_72", imageUrl: t72, width: 0, height: 0 },
  { id: "t_74", imageUrl: t74, width: 0, height: 0 },
  { id: "t_76", imageUrl: t76, width: 0, height: 0 },
  { id: "t_77", imageUrl: t77, width: 0, height: 0 },
  { id: "t_80", imageUrl: t80, width: 0, height: 0 },
  { id: "t_85", imageUrl: t85, width: 0, height: 0 },
  { id: "t_91", imageUrl: t91, width: 0, height: 0 },
  { id: "t_92", imageUrl: t92, width: 0, height: 0 },
  { id: "t_93", imageUrl: t93, width: 0, height: 0 },
  { id: "t_94", imageUrl: t94, width: 0, height: 0 },
  { id: "t_95", imageUrl: t95, width: 0, height: 0 },
  { id: "t_97", imageUrl: t97, width: 0, height: 0 },
  { id: "t_98", imageUrl: t98, width: 0, height: 0 },
  { id: "t_103", imageUrl: t103, width: 0, height: 0 },
  { id: "t_106", imageUrl: t106, width: 0, height: 0 },
  { id: "t_107", imageUrl: t107, width: 0, height: 0 },
  { id: "t_108", imageUrl: t108, width: 0, height: 0 },
  { id: "t_109", imageUrl: t109, width: 0, height: 0 },
  { id: "t_110", imageUrl: t110, width: 0, height: 0 },
  { id: "t_111", imageUrl: t111, width: 0, height: 0 },

  { id: "t_113", imageUrl: t113, width: 0, height: 0 },
  { id: "t_114", imageUrl: t114, width: 0, height: 0 },
  { id: "t_115", imageUrl: t115, width: 0, height: 0 },
  { id: "t_116", imageUrl: t116, width: 0, height: 0 },

  { id: "t_118", imageUrl: t118, width: 0, height: 0 },

  { id: "t_120", imageUrl: t120, width: 0, height: 0 },
  { id: "t_121", imageUrl: t121, width: 0, height: 0 },
  { id: "t_122", imageUrl: t122, width: 0, height: 0 },

  { id: "t_124", imageUrl: t124, width: 0, height: 0 },
  { id: "t_125", imageUrl: t125, width: 0, height: 0 },
  { id: "t_126", imageUrl: t126, width: 0, height: 0 },
  { id: "t_127", imageUrl: t127, width: 0, height: 0 },
  { id: "t_128", imageUrl: t128, width: 0, height: 0 },
  { id: "t_129", imageUrl: t129, width: 0, height: 0 },

  { id: "t_131", imageUrl: t131, width: 0, height: 0 },
  { id: "t_132", imageUrl: t132, width: 0, height: 0 },
  { id: "t_133", imageUrl: t133, width: 0, height: 0 },
  { id: "t_134", imageUrl: t134, width: 0, height: 0 },
  { id: "t_135", imageUrl: t135, width: 0, height: 0 },
  { id: "t_136", imageUrl: t136, width: 0, height: 0 },
  { id: "t_137", imageUrl: t137, width: 0, height: 0 },
  { id: "t_138", imageUrl: t138, width: 0, height: 0 },
  { id: "t_139", imageUrl: t139, width: 0, height: 0 },
  { id: "t_140", imageUrl: t140, width: 0, height: 0 },
  { id: "t_141", imageUrl: t141, width: 0, height: 0 },
  { id: "t_142", imageUrl: t142, width: 0, height: 0 },
  { id: "t_143", imageUrl: t143, width: 0, height: 0 },
  { id: "t_144", imageUrl: t144, width: 0, height: 0 },
  { id: "t_145", imageUrl: t145, width: 0, height: 0 },
  { id: "t_146", imageUrl: t146, width: 0, height: 0 },
  { id: "t_147", imageUrl: t147, width: 0, height: 0 },
  { id: "t_148", imageUrl: t148, width: 0, height: 0 },
  { id: "t_149", imageUrl: t149, width: 0, height: 0 },
  { id: "t_150", imageUrl: t150, width: 0, height: 0 },
  { id: "t_151", imageUrl: t151, width: 0, height: 0 },
  { id: "t_152", imageUrl: t152, width: 0, height: 0 },
  { id: "t_153", imageUrl: t153, width: 0, height: 0 },
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
  { id: "r_122", imageUrl: r122, width: 0, height: 0 },
  { id: "r_123", imageUrl: r123, width: 0, height: 0 },
  { id: "r_124", imageUrl: r124, width: 0, height: 0 },
  { id: "r_125", imageUrl: r125, width: 0, height: 0 },
  { id: "r_126", imageUrl: r126, width: 0, height: 0 },
  { id: "r_127", imageUrl: r127, width: 0, height: 0 },
  { id: "r_128", imageUrl: r128, width: 0, height: 0 },
  { id: "r_129", imageUrl: r129, width: 0, height: 0 },
  { id: "r_130", imageUrl: r130, width: 0, height: 0 },
  { id: "r_131", imageUrl: r131, width: 0, height: 0 },
  { id: "r_132", imageUrl: r132, width: 0, height: 0 },
  { id: "r_133", imageUrl: r133, width: 0, height: 0 },
  { id: "r_134", imageUrl: r134, width: 0, height: 0 },
  { id: "r_135", imageUrl: r135, width: 0, height: 0 },
  { id: "r_136", imageUrl: r136, width: 0, height: 0 },
  { id: "r_137", imageUrl: r137, width: 0, height: 0 },
  { id: "r_138", imageUrl: r138, width: 0, height: 0 },

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
  { id: "r_31", imageUrl: r31, width: 0, height: 0 },
  { id: "r_32", imageUrl: r32, width: 0, height: 0 },
  { id: "r_33", imageUrl: r33, width: 0, height: 0 },
  { id: "r_34", imageUrl: r34, width: 0, height: 0 },
  { id: "r_35", imageUrl: r35, width: 0, height: 0 },
  { id: "r_36", imageUrl: r36, width: 0, height: 0 },
  { id: "r_37", imageUrl: r37, width: 0, height: 0 },
  { id: "r_38", imageUrl: r38, width: 0, height: 0 },
  { id: "r_39", imageUrl: r39, width: 0, height: 0 },
  { id: "r_40", imageUrl: r40, width: 0, height: 0 },
  { id: "r_41", imageUrl: r41, width: 0, height: 0 },
  { id: "r_42", imageUrl: r42, width: 0, height: 0 },
  { id: "r_43", imageUrl: r43, width: 0, height: 0 },
  { id: "r_44", imageUrl: r44, width: 0, height: 0 },
  { id: "r_45", imageUrl: r45, width: 0, height: 0 },
  { id: "r_46", imageUrl: r46, width: 0, height: 0 },
  { id: "r_47", imageUrl: r47, width: 0, height: 0 },
  { id: "r_48", imageUrl: r48, width: 0, height: 0 },
  { id: "r_49", imageUrl: r49, width: 0, height: 0 },
  { id: "r_50", imageUrl: r50, width: 0, height: 0 },
  { id: "r_51", imageUrl: r51, width: 0, height: 0 },
  { id: "r_52", imageUrl: r52, width: 0, height: 0 },
  { id: "r_53", imageUrl: r53, width: 0, height: 0 },
  { id: "r_54", imageUrl: r54, width: 0, height: 0 },
  { id: "r_55", imageUrl: r55, width: 0, height: 0 },

  { id: "r_58", imageUrl: r58, width: 0, height: 0 },
  { id: "r_59", imageUrl: r59, width: 0, height: 0 },
  { id: "r_60", imageUrl: r60, width: 0, height: 0 },
  { id: "r_61", imageUrl: r61, width: 0, height: 0 },
  { id: "r_62", imageUrl: r62, width: 0, height: 0 },
  { id: "r_63", imageUrl: r63, width: 0, height: 0 },
  { id: "r_64", imageUrl: r64, width: 0, height: 0 },
  { id: "r_65", imageUrl: r65, width: 0, height: 0 },
  { id: "r_66", imageUrl: r66, width: 0, height: 0 },
  { id: "r_67", imageUrl: r67, width: 0, height: 0 },
  { id: "r_68", imageUrl: r68, width: 0, height: 0 },
  { id: "r_69", imageUrl: r69, width: 0, height: 0 },
  { id: "r_70", imageUrl: r70, width: 0, height: 0 },
  { id: "r_71", imageUrl: r71, width: 0, height: 0 },
  { id: "r_72", imageUrl: r72, width: 0, height: 0 },
  { id: "r_73", imageUrl: r73, width: 0, height: 0 },
  { id: "r_74", imageUrl: r74, width: 0, height: 0 },
  { id: "r_75", imageUrl: r75, width: 0, height: 0 },
  { id: "r_76", imageUrl: r76, width: 0, height: 0 },
  { id: "r_77", imageUrl: r77, width: 0, height: 0 },
  { id: "r_78", imageUrl: r78, width: 0, height: 0 },
  { id: "r_79", imageUrl: r79, width: 0, height: 0 },
  { id: "r_80", imageUrl: r80, width: 0, height: 0 },
  { id: "r_81", imageUrl: r81, width: 0, height: 0 },
  { id: "r_82", imageUrl: r82, width: 0, height: 0 },
  { id: "r_83", imageUrl: r83, width: 0, height: 0 },
  { id: "r_84", imageUrl: r84, width: 0, height: 0 },
  { id: "r_85", imageUrl: r85, width: 0, height: 0 },
  { id: "r_86", imageUrl: r86, width: 0, height: 0 },
  { id: "r_87", imageUrl: r87, width: 0, height: 0 },
  { id: "r_88", imageUrl: r88, width: 0, height: 0 },
  { id: "r_89", imageUrl: r89, width: 0, height: 0 },
  { id: "r_90", imageUrl: r90, width: 0, height: 0 },
  { id: "r_91", imageUrl: r91, width: 0, height: 0 },
  { id: "r_92", imageUrl: r92, width: 0, height: 0 },
  { id: "r_93", imageUrl: r93, width: 0, height: 0 },
  { id: "r_94", imageUrl: r94, width: 0, height: 0 },
  { id: "r_95", imageUrl: r95, width: 0, height: 0 },
  { id: "r_96", imageUrl: r96, width: 0, height: 0 },
  { id: "r_97", imageUrl: r97, width: 0, height: 0 },
  { id: "r_98", imageUrl: r98, width: 0, height: 0 },
  { id: "r_99", imageUrl: r99, width: 0, height: 0 },
  { id: "r_100", imageUrl: r100, width: 0, height: 0 },
  { id: "r_101", imageUrl: r101, width: 0, height: 0 },
  { id: "r_102", imageUrl: r102, width: 0, height: 0 },
  { id: "r_103", imageUrl: r103, width: 0, height: 0 },
  { id: "r_104", imageUrl: r104, width: 0, height: 0 },
  { id: "r_105", imageUrl: r105, width: 0, height: 0 },
  { id: "r_107", imageUrl: r107, width: 0, height: 0 },
];
const others: ImageData[] = [
  { id: "o_50", imageUrl: o50, width: 0, height: 0 },
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
  { id: "o_71", imageUrl: o71, width: 0, height: 0 },
  { id: "o_72", imageUrl: o72, width: 0, height: 0 },
  { id: "o_73", imageUrl: o73, width: 0, height: 0 },

  { id: "o_1", imageUrl: o1, width: 0, height: 0 },
  { id: "o_2", imageUrl: o2, width: 0, height: 0 },
  { id: "o_3", imageUrl: o3, width: 0, height: 0 },
  { id: "o_4", imageUrl: o4, width: 0, height: 0 },
  { id: "o_5", imageUrl: o5, width: 0, height: 0 },
  { id: "o_6", imageUrl: o6, width: 0, height: 0 },
  { id: "o_7", imageUrl: o7, width: 0, height: 0 },
  { id: "o_8", imageUrl: o8, width: 0, height: 0 },
  { id: "o_9", imageUrl: o9, width: 0, height: 0 },
  { id: "o_10", imageUrl: o10, width: 0, height: 0 },
  { id: "o_11", imageUrl: o11, width: 0, height: 0 },
  { id: "o_12", imageUrl: o12, width: 0, height: 0 },
  { id: "o_13", imageUrl: o13, width: 0, height: 0 },
  { id: "o_14", imageUrl: o14, width: 0, height: 0 },
  { id: "o_15", imageUrl: o15, width: 0, height: 0 },
  { id: "o_16", imageUrl: o16, width: 0, height: 0 },
  { id: "o_17", imageUrl: o17, width: 0, height: 0 },
  { id: "o_18", imageUrl: o18, width: 0, height: 0 },
  { id: "o_19", imageUrl: o19, width: 0, height: 0 },
  { id: "o_20", imageUrl: o20, width: 0, height: 0 },
  { id: "o_21", imageUrl: o21, width: 0, height: 0 },
  { id: "o_22", imageUrl: o22, width: 0, height: 0 },
  { id: "o_23", imageUrl: o23, width: 0, height: 0 },
  { id: "o_24", imageUrl: o24, width: 0, height: 0 },
  { id: "o_25", imageUrl: o25, width: 0, height: 0 },
  { id: "o_26", imageUrl: o26, width: 0, height: 0 },
  { id: "o_27", imageUrl: o27, width: 0, height: 0 },
  { id: "o_28", imageUrl: o28, width: 0, height: 0 },
  { id: "o_29", imageUrl: o29, width: 0, height: 0 },
  { id: "o_30", imageUrl: o30, width: 0, height: 0 },
  { id: "o_31", imageUrl: o31, width: 0, height: 0 },
  { id: "o_32", imageUrl: o32, width: 0, height: 0 },
  { id: "o_33", imageUrl: o33, width: 0, height: 0 },
  { id: "o_34", imageUrl: o34, width: 0, height: 0 },
  { id: "o_35", imageUrl: o35, width: 0, height: 0 },
  { id: "o_36", imageUrl: o36, width: 0, height: 0 },
  { id: "o_37", imageUrl: o37, width: 0, height: 0 },
  { id: "o_38", imageUrl: o38, width: 0, height: 0 },
  { id: "o_39", imageUrl: o39, width: 0, height: 0 },
  { id: "o_40", imageUrl: o40, width: 0, height: 0 },
  { id: "o_41", imageUrl: o41, width: 0, height: 0 },
  { id: "o_42", imageUrl: o42, width: 0, height: 0 },
  { id: "o_43", imageUrl: o43, width: 0, height: 0 },
  { id: "o_44", imageUrl: o44, width: 0, height: 0 },
  { id: "o_45", imageUrl: o45, width: 0, height: 0 },
  { id: "o_46", imageUrl: o46, width: 0, height: 0 },
  { id: "o_47", imageUrl: o47, width: 0, height: 0 },
  { id: "o_48", imageUrl: o48, width: 0, height: 0 },
  { id: "o_49", imageUrl: o49, width: 0, height: 0 },
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
  max-height: 300px; /* 최대 높이를 300px로 설정 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
  overflow-x: hidden; /* 가로 스크롤 제거 */
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
