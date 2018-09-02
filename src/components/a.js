import '../css/components/a.less'
// export function renderA () {
//     let a = document.getElementById('one')
//     a.innerHTML = `
//         <ul>
//             <li>11</li>
//             <li>22</li>
//             <li>33</li>
//         </ul>
//     `
// }

export function componentA () {
    let a = document.createElement('ul')
    a.innerHTML = `
        <li>11</li>
        <li>22</li>
        <li>33</li>
    `
    return a
}
