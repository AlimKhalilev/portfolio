export interface IWork {
    /** Уникальный id работы */
    id: number,
    /** Название работы */
    name: string,
    /** Ссылка на работу */
    link: string,
    /** Строка даты создания работы */
    date: string,
    /** Описание работы */
    description: string,
    /** Изображение формата png */
    picturePng: string,
    /** Изображение формата webp */
    pictureWebp: string,
    /** Изображение формата png для превью */
    picturePngMin: string,
    /** Изображение формата webp для превью */
    pictureWebpMin: string,
    /** Флаг темного изображения превью */
    isDarkTheme: boolean,
    /** Флаг половинчатой высоты картинки */
    isImgHalf: boolean
}