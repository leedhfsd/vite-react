interface Episode {
  id: string;
  title: string;
  artist: string;
  thumbnail: string;
  description: string;
}

interface Chapter {
  title: string;
  views: string;
  liked: string;
  comments: string;
}

export const comicEpisodeList: Episode[] = [
  {
    id: "comic_01",
    title: "밤하늘의 별빛",
    artist: "佐藤陽葵",
    thumbnail: "../src/assets/banner/9.png",
    description:
      "한 소녀가 어린 시절부터 꿈꾸던 별빛을 따라서, 그녀는 도시 밖으로 모험을 떠난다. 그리고 그녀는 새로운 사람들을 만나며 자신의 이야기를 써 내려간다.",
  },
  {
    id: "comic_02",
    title: "시간의 색깔",
    artist: "박지민",
    thumbnail: "../src/assets/banner/8.png",
    description:
      "시간을 거슬러 올라가면서, 삶의 여러 순간들은 서로 다른 색깔로 물들어져 있다. 한 남자가 자신의 인생을 되돌아보며, 그가 겪은 모든 일들이 다양한 색깔로 표현되는 놀라운 발견을 하게 된다.",
  },
  {
    id: "comic_03",
    title: "해피 엔딩을 위한 로맨스",
    artist: "伊藤陽菜",
    thumbnail: "../src/assets/banner/5.png",
    description:
      "힘들게 일하며 돈을 모으던 한 남자가, 우연히 만난 한 여성과 로맨틱한 사랑을 시작한다. 그러나 서로의 성격이 맞지 않아 고민하던 그들은, 서로의 이야기를 들으며 서로를 이해하게 되고, 더 나은 사람으로 성장하며 해피 엔딩을 향해 달려간다.",
  },
  {
    id: "comic_04",
    title: "외로움을 달래는 음악",
    artist: "佐藤陽葵",
    thumbnail: "../src/assets/banner/12.png",
    description:
      "어려운 가정환경에서 자란 한 소녀는 음악으로 외로움을 달래면서 자신의 꿈을 향해 나아가게 된다. 그러나 그녀의 가족사정으로 인해 어려움을 겪게 되고, 마지막에는 그녀의 음악이 그녀를 구원해주게 된다.",
  },
  {
    id: "comic_05",
    title: "숲의 비밀",
    artist: "山田大翔",
    thumbnail: "../src/assets/banner/1.png",
    description:
      "한 소녀가 숲으로 향하면서, 그녀는 마법같은 순간들을 경험하게 된다. 그리고 그녀는 더 깊은 숲속으로 들어가면서 비밀스러운 인물들을 만나고, 자신의 운명을 깨닫게 된다.",
  },
  {
    id: "comic_06",
    title: "잊혀진 섬",
    artist: "usotsuki",
    thumbnail: "../src/assets/banner/11.png",
    description:
      "한 소녀가 어린 시절부터 꿈꾸던 별빛을 따라서, 그녀는 도시 밖으로 모험을 떠난다. 그리고 그녀는 새로운 사람들을 만나며 자신의 이야기를 써 내려간다.",
  },
];

export const novelEpisodeList: Episode[] = [
  {
    id: "novel_01",
    title: "최후의 용",
    artist: "전민희",
    thumbnail: "../src/assets/banner/2.png",
    description:
      "용이 멸종한 것으로 알려진 세상에서 하나라는 어린 소녀가 용의 알을 발견하고 그것을 부화시킨다. 마지막 용으로서 그녀는 그것을 통제하거나 파괴하려는 자들로부터 그것을 보호해야 합니다. 그 과정에서 그는 용의 역사와 마법에 대해 배우고 자신의 힘의 진정한 범위를 발견합니다.",
  },
  {
    id: "novel_02",
    title: "빛의 최후",
    artist: "이서진",
    thumbnail: "../src/assets/banner/8.png",
    description:
      "인간과 마법 생물이 공존하는 세계에서 모험가 일행이 기이한 생물을 마주하게 되는데. 그 과정에서 인간과 인간이 아닌 존재 사이의 복잡한 관계가 발생한다!!",
  },
  {
    id: "novel_03",
    title: "백야행",
    artist: "米津玄師",
    thumbnail: "../src/assets/banner/10.png",
    description:
      "아이러니컬하게도 빛의 속성은 거부당함으로써 제 빛깔을 여실히 드러내는 법. 이 소설의 빛깔을 말한다면 그야말로 '하얀 것'이다. 왠지 사람의 기분을 우울하게 만들고 급기야 눈물이 흐르는데...",
  },
  {
    id: "novel_04",
    title: "죄와벌",
    artist: "도스토예프스키",
    thumbnail: "../src/assets/banner/07.png",
    description:
      "은수라는 어린 소녀는 스승처럼 강력한 마법사가 되는 꿈을 꾸지만 자기 의심과 마법에 대한 통제력 부족으로 고군분투합니다. 어둠의 세력이 왕국을 위협할 때 그녀는 두려움에 맞서고 새로 찾은 힘을 사용하여 사람들을 구해야 합니다.",
  },
  {
    id: "novel_05",
    title: "모차르트",
    artist: "이현진",
    thumbnail: "../src/assets/banner/03.png",
    description:
      "어려운 가정환경에서 자란 한 소녀는 음악으로 외로움을 달래면서 자신의 꿈을 향해 나아가게 된다. 그러나 그녀의 가족사정으로 인해 어려움을 겪게 되고, 마지막에는 그녀의 음악이 그녀를 구원해주게 된다.",
  },
  {
    id: "novel_06",
    title: "매지컬 하트",
    artist: "田中翔太 ",
    thumbnail: "../src/assets/banner/04.png",
    description:
      "사랑과 용기로 가득한 마법의 세계를 배경으로 한 이야기입니다. 주인공인 소녀가 마법을 배우면서 자신의 마음을 찾아가고, 그 과정에서 소중한 친구와 사랑하는 가족을 만납니다. 희망과 행복을 전하는 마법의 이야기를 담은 작품입니다.",
  },
];

export const dummyChapters: Chapter[] = [
  {
    title: "Introduction",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-01-01",
  },
  {
    title: "Chapter 1",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-01-07",
  },
  {
    title: "Chapter 2",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-01-14",
  },
  {
    title: "Chapter 3",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-01-21",
  },
  {
    title: "Chapter 4",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-01-28",
  },
  {
    title: "Chapter 5",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-02-04",
  },
  {
    title: "Chapter 6",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-02-11",
  },
  {
    title: "Chapter 7",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-02-18",
  },
  {
    title: "Chapter 8",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-02-25",
  },
  {
    title: "Conclusion",
    thumbnail: "/images/test.jpg",
    uploadedDate: "2022-03-04",
  },
];
