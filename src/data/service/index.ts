export interface IProduct {
    id: number
    descHeader: string
    descFooter: string
    name: string
    taste: string
    options: string[]
    weight: { value: number,  unit: string}
    balance: number
}
export async function getProductsRequests(): Promise<IProduct[]> {
    return new Promise<IProduct[]>((resolve, reject) => {
        const result: IProduct[] = [
            {
                id: 1,
                descHeader: 'Сказочное заморское яство',
                descFooter: 'Печень утки разварная с артишоками.',
                name: 'Нямушка',
                taste: 'с фуа-гра',
                options: ['10 порций', 'мышь в подарок'],
                weight: {
                    value: 0.5,
                    unit: 'кг'
                },
                balance: 10
            },
            {
                id: 2,
                descHeader: 'Сказочное заморское яство',
                descFooter: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
                name: 'Нямушка',
                taste: 'с рыбой',
                options: ['40 порций', '2 мыши в подарок'],
                weight: {
                    value: 2,
                    unit: 'кг'
                },
                balance: 0
            },
            {
                id: 3,
                descHeader: 'Сказочное заморское яство',
                descFooter: 'Филе из цыплят с трюфелями в бульоне.',
                name: 'Нямушка',
                taste: 'с курой',
                options: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
                weight: {
                    value: 5,
                    unit: 'кг'
                },
                balance: 10
            },
        ]
        resolve(result)
    })
}