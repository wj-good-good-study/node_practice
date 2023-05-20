
        let lorems = document.querySelectorAll('.lorem')
        lorems.forEach(lorem => {
            const words = lorem.textContent.split('')
            lorem.textContent = ''
            words.forEach((word, index) => {
                let span = document.createElement('span')
                span.textContent = word
                span.style.animationDelay = `${index * 0.03}s`
                lorem.append(span)
            })

        });
    