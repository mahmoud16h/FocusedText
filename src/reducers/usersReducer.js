const initialState = [
    {
        id: 'mahmoud',
        display: 'Mahmoud Hassan',
    },
    {
        id: 'jesse',
        display: 'Jesse Owens',
    },
    {
        id: 'eden',
        display: 'Eden Hazard',
    },
    {
        id: 'Mo',
        display: 'Mo Salah',
    },
    {
        id: 'kante',
        display: 'Ngolo Kante',
    },
    {
        id: 'cabaye',
        display: 'Yohan Cabaye',
    },
    {
        id: 'henry',
        display: 'Thierry Henry',
    },
]

export const users = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            let mentionsArray = []
            const post = action.text.split("@")
            const results =  post.filter((post) => post.startsWith("["))
            results.forEach(res => {
                const arr = res.split('(')
                mentionsArray.push(arr[0])
            })
            console.log({
                mentions: mentionsArray,
                fullPost: action.text
            })
            // i've intentionally returned the same state as i only wanted to console log the mention object.
            // Of course this would include much more info such as the person who posted it, the time, ID's etc.
            return state
        default:
            return state
    }
}