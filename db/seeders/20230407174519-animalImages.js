"use strict";

const images = [
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Flion1x1.jpg?alt=media&token=36b478a5-16bd-4342-91c9-545921687c1d",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Flion.jpg?alt=media&token=79ea3899-bc7c-4bc4-acbf-8b17a5d03a47",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fafricanpainteddog.jpg?alt=media&token=55e0848d-505e-4e7c-aa6d-a6cf11ce4d00",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fafricanpainteddog.jpg?alt=media&token=2567db82-8e3a-4601-85a6-588c5df4a5b0",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fafricanpenguin.jpg?alt=media&token=bdaa56e0-2305-49ba-abee-d805d5f16bcd",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fafricanpenguin.jpg?alt=media&token=0404b4bf-dfb3-42e7-9008-df129d02a9b5",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Falabratortoise.jpg?alt=media&token=9b72c277-b8b1-4dd0-bd83-b26c23ca07a1",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Faldabragianttortoise.jpg?alt=media&token=7dfdbd2e-6b0e-4ee6-824e-a556739461b9",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fasian-elephant-1X1.png?alt=media&token=b77d2c2c-cc39-4921-975e-d6dd259b578a",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fasianelephant.jpg?alt=media&token=174a02c5-9440-4738-86d2-0fffb46f49ee",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fasian-small-clawed-otter-1X1.png?alt=media&token=89790665-a38a-4ce3-a11b-7c9186d8ad38",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fasiansmallclawedotter.jpg?alt=media&token=6fa7876c-6e95-4597-ab23-a359f1404d0b",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2FBabirusa-1x1.jpg?alt=media&token=57d56af6-ff30-45f5-885e-65649db972fa",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fbabirusa.jpg?alt=media&token=617c0040-acb0-4ba8-b690-6d1bbfc18449",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Forangutan-1X1.png?alt=media&token=79ab8121-006a-4c9c-a51a-eebf960e9dfe",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Forangutan.jpg?alt=media&token=43ac15e2-ca49-4756-a78c-47331b0c19eb",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fbrown-lemur-1X1.png?alt=media&token=043aa03f-e9ba-491f-8ddb-a09292f84449",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fbrownlemur.jpg?alt=media&token=c6bdaafd-e3cb-4a69-8f6b-63a21d0bcf79",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fsealion.jpg?alt=media&token=b3f2ed04-349e-4f14-9520-4cd45d18500b",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fsealion.jpg?alt=media&token=fcdf634c-a37c-42a9-b8ad-f54f3ddff052",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fcelebes-crested-macaque-1X1.png?alt=media&token=d813d928-366b-450f-98de-eb0ef79afd77",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fcelebescrestedmacaque.jpg?alt=media&token=68e9576a-91a0-4995-a61b-18ee3b9165d9",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fcheetah-1X1.png?alt=media&token=7c04c48e-2fcb-42ab-8f38-e04b4a3650e0",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fcheetah.jpg?alt=media&token=4c38c1e2-6f6b-4160-92bf-09141de83786",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fchimpanzee-1X1.png?alt=media&token=ce5b6870-2a6a-469d-865c-12daa7c4eecf",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fchimpanzee.jpg?alt=media&token=c8d2d493-7ab8-4782-9e97-d263eaf543d0",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fcotton-top-tamarin-1X1.png?alt=media&token=29d00137-719c-4f55-8956-e06d090d0c02",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fcotton-toptamarin.jpg?alt=media&token=a1fd5c00-9f65-4acc-a184-db9b6a5ea2d3",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fcolobusmonkey.jpg?alt=media&token=7fee3aa9-dd74-401c-b05e-8904710ab281",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fblackandwhitecolobus.jpg?alt=media&token=a0e15ae6-18e2-4551-a69c-37a17f96517d",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Felectric-blue-gecko1x1.jpg?alt=media&token=546ea286-55da-47c7-8061-61f59fcfae2a",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Felectricbluegecko.jpg?alt=media&token=4e65ff5f-1328-425a-9837-6544efc9f6a5",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Festuarine-crocodile-1X1.png?alt=media&token=006a3f5d-fbbc-468d-8a9e-8d5ead7e9c0b",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Festuarinecrocodile.jpg?alt=media&token=dcf0d524-4dd5-4ab6-ab5c-4a3d4e55f727",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Ffossa-1x1.jpg?alt=media&token=5cfceafe-2c46-467c-a572-379966e62ced",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Ffossa.jpg?alt=media&token=2dc78c60-db5d-412f-9070-3d680e0100d1",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fgaboon-viper-1x1.png?alt=media&token=f2b7839b-64b7-4add-8fea-9022608e0779",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fgaboonviper.jpg?alt=media&token=b6d78b37-4967-4f69-894b-9c584f9714ad",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fgiraffe-1X1.png?alt=media&token=90587981-b0b3-42f8-8562-0782cbda2996",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fgiraffe.jpg?alt=media&token=ae254f13-6005-4b49-912c-35688daaa2d7",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fgolden-poison-frog1x1.jpg?alt=media&token=cbb3668a-cd03-40e2-8801-0ec7ad5d6191",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fgoldenpoisonfrog.jpg?alt=media&token=52ee2b2f-337c-424f-97a7-ddb327385c94",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2FLesser-Mousedeer-1x1.jpg?alt=media&token=4332a4d6-70d5-43d4-a876-ede549ae9c4c",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fmousedeer.jpg?alt=media&token=a62c5dad-892d-4649-bb07-33ddcc62461b",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fplumed-basilisk-1X1.png?alt=media&token=e3fef16d-9cd1-4ff2-83db-10efb843cfae",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fgreenbasilisk.jpg?alt=media&token=a075c85c-7316-4c82-90ca-451839217f18",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fgrey-kangaroo-1x1.png?alt=media&token=a406722c-9536-45b8-98ff-3e8d344187ee",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fgreykangaroo.jpg?alt=media&token=bf2a3536-33c2-467e-8443-694c2ea04f07",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fhamadryas-baboon-1X1.png?alt=media&token=c8b19f54-e036-48c7-a754-2d02deb0494e",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fhamadryasbaboon.jpg?alt=media&token=f34c8228-9c2a-4010-bb0f-ee4e32a72979",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Findian-gharial-1x1.png?alt=media&token=8a5f79e2-8b73-4659-b9e5-d64fa10af55c",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Findiangharial.jpg?alt=media&token=43d8b6f6-db3e-4aee-a5fe-940c680db61a",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fkomodo-dragon-1X1.png?alt=media&token=b74dc969-7767-4d2e-bf82-7df9d4a85fd2",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fkomododragon.jpg?alt=media&token=5e2fc067-6a92-4bd5-ab98-ab25c7e7028a",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Flhoestmonkey.jpg?alt=media&token=d1ace8fb-65e7-4b9b-a888-5704578f69fa",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Flhoestmonkey.png?alt=media&token=c749a665-fb32-4e8b-b86a-63a542139594",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fleopard-1X1.png?alt=media&token=453cf64c-5f06-4434-be76-709601d58a23",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fleopard.jpg?alt=media&token=0de96f2c-75e4-45c6-97ce-0039fa57ce4d",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Ftiger.jpg?alt=media&token=88fbfab3-bf5c-443e-931a-a9aea0957821",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Ftiger.jpg?alt=media&token=7035c0c5-87de-4a6b-b483-6a240ac7c497",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fmalayan-flying-fox-1X1.png?alt=media&token=6545e28d-3ef4-4877-a942-c13eb3faf6ee",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fmalayanflyingfox.jpg?alt=media&token=2ed66ace-2d60-4e3a-b536-629247ff455c",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fnaked-mole-rat-1X1.png?alt=media&token=2719323c-028c-4909-bbd0-315a2c847fa1",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fnakedmolerat.jpg?alt=media&token=e9d0b65e-bc0e-4dac-b8ed-e4e32c4ade8e",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fpanther-chameleon.jpg?alt=media&token=46e08e46-e798-4af7-a0b0-592457c1baee",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fpantherchameleon.jpg?alt=media&token=e167c976-9aef-47fa-8b70-99f62d01a84b",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fproboscis-monkey-1X1.png?alt=media&token=11e1acb4-9fdd-4d50-8565-9e9dc59b780b",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fproboscismonkey.jpg?alt=media&token=c9cfc541-1ea8-4456-87c7-4d4e68199be6",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2FPygmy-hippo-1x1.jpg?alt=media&token=009a6741-483b-472a-ab27-3706a7ba50d2",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fpygmyhippo.jpg?alt=media&token=31c67ebd-2adb-4228-a062-bdf442d8e5f1",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Frabbits-signpost-1x1.jpg?alt=media&token=716db28e-ac8b-4ef2-95bc-d12786f6566f",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Frabbit.jpg?alt=media&token=964a97de-971e-4406-9183-25b11666a6a4",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fredruffedlemur.jpg?alt=media&token=f7e3ff24-5c65-43b7-8d77-73fe2177b43d",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fred-ruffedlemur.jpg?alt=media&token=dbdc098e-3831-4e1f-a5b9-bf6090b223ea",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fdouclangur1x1.jpg?alt=media&token=7c759c39-b963-4361-9039-665dd44ba4bb",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fdouclangur.jpg?alt=media&token=eeee6b47-ce0e-4674-b7dc-0da62a05f201",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fregal-horned-lizard-1x1.png?alt=media&token=670f8c49-f1dd-48eb-9685-38be735f9072",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fregalhornedlizard.jpg?alt=media&token=3d9d21f1-4f6d-4937-9f61-d90edc8808c9",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fring-tailed-lemur-1X1.png?alt=media&token=b908f6cd-507e-49ad-8489-0fd67ba5c1e8",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fringtailedlemur.jpg?alt=media&token=67dd4d14-2230-48f4-9343-5927b77fdec0",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Froti-island-snake-necked-turtle.jpg?alt=media&token=e7a3e8b2-f66b-4bc1-aae4-6c9f03c5a23b",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Frotisnakeneckedturtle.jpg?alt=media&token=fc0a57f1-e74c-48be-8811-b6fc63ed156b",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fsun-bear-1x1.jpg?alt=media&token=b583ad5b-8e09-4b75-8d9b-1dbddf7f8824",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fsunbear.jpg?alt=media&token=75ae84c2-e289-4265-ab63-35f86305acc5",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Ftree-kangaroo-1X1.png?alt=media&token=bad72235-456e-4bc1-be7e-d80520995dd6",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Ftreekangaroo.jpg?alt=media&token=b4a8e81d-0a78-4403-8233-7ef7b0be7cdd",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Ftwo-toed-sloth-130819SZG-33A5006.jpg?alt=media&token=da586a15-3d6d-4e75-b99c-75b45be4edeb",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Flinnaeustwo-toedsloth.jpg?alt=media&token=0bf2b63e-e14c-4f7b-82ed-37061fd43f85",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Frhinocerus-1X1.png?alt=media&token=7d6dbd2c-1d17-437f-ad88-d76f22515898",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fwhiterhino.jpg?alt=media&token=d19df573-2bfb-45b5-b4bc-940351dc5932",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fwhitetiger.jpg?alt=media&token=93056e76-ebbe-45c6-a7e2-af78a623d697",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fwhitetiger.jpg?alt=media&token=35859e06-0123-41fd-a810-42df8b6311db",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fwhite-faced-saki-monkey-1X1%20(1).png?alt=media&token=92d0ff49-5c8d-48d3-b765-7dc07e4cb85f",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fwhitefacedsakimonkey.jpg?alt=media&token=a5ef97dc-810a-4612-8ece-6da78d4927ed",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2Fzebra.jpg?alt=media&token=6ffac5c4-4ff0-4263-bcef-702366635c97",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fgrevyzebra.png?alt=media&token=8a067b2d-4fef-472b-9423-3c309e7b6e6f",
  },
  {
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/animalthumbnails%2F35xnxdu2c8_Cassowary_black_WWfall2021.jpg?alt=media&token=60e73e23-2103-4330-833a-5c2246ba36fa",
    bannerUrl:
      "https://firebasestorage.googleapis.com/v0/b/project4-z.appspot.com/o/banner%2Fcassowary.jpg?alt=media&token=f9799bc5-c41d-486f-bfd6-6e19899ae5a6",
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 0; i < images.length; i++) {
      await queryInterface.bulkUpdate(
        "animals",
        {
          iconUrl: images[i].iconUrl,
          bannerUrl: images[i].bannerUrl,
        },
        {
          id: i + 1,
        }
      );
    }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
