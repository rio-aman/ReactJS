function customRender(reactElement,mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    mainContainer.appendChild(domElement)
}

// how does react see the element that we given in function
const reactElement = {
    type: 'a', //which type of element is that as div,p or as a tag etc
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('#root')

customRender(reactElement,mainContainer)
