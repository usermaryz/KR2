import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [
    {
      name: 'Как выбрать хлеб?',
      author: 'Чижик-пыжик',
      year: '01.11.21',
      text: 'Люблю ржаной хлеб, но это не так важно в холода, главное не умереть от холода',
      imageUrl:
        'https://cdn-icons.flaticon.com/png/512/2713/premium/2713563.png?token=exp=1636986379~hmac=bf76a78524002a0a9682fd943e94c70d',
      rating: 5,
    },
    {
      name: 'Как сташить морковку с огорода?',
      author: 'Зайчик-побегайчик',
      year: '12.08.21',
      text: 'сначала нужно пройти ряд тренировок, которые можно посмотреть в другом моем посте, а так главная задача - следить за бабкой и куда она с утра идет',
      imageUrl:
        'https://cdn-icons.flaticon.com/png/512/3136/premium/3136973.png?token=exp=1636986945~hmac=359330d8955514b982c2c1936f63ecdf',
      rating: 4,
    },
    {
      name: 'Как дружить со всеми?',
      author: 'Кот Леопольд',
      year: '13.10.21',
      text: 'Нужно просто быть мной и любить всех и каждого',
      imageUrl:
        'https://cdn-icons-png.flaticon.com/512/1864/1864514.png',
      rating: 5,
    },
    {
      name: 'Почему нельзя лаять на кошек?',
      author: 'Собака',
      year: '01.09.21',
      text: 'На кошек нельзя лаять потому что люди любят, а мы должны быть хорошими, чтобы нас не выгнали',
      imageUrl:
        'https://cdn-icons-png.flaticon.com/512/6138/6138615.png',
      rating: 2,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

