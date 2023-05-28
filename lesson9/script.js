window.addEventListener("DOMContentLoaded", (event) => {
    // setInterval(HelloWorld, 2000); многократное срабатывание кода через определенный промежуток времени
    // setTimeout(HelloWorld, 1000); разовое срабатывание кода через определенный промежуток времени
    // console.log(Date.now());
    // const today = new Date(1728357351109);
    // console.log(today);
    // let date1 = new Date("2021-05-17"); // год-месяц-день
    // console.log(date1);
    // let date2 = new Date("06/25/2021"); // месяц/день/год
    // console.log(date2);
    // const date3 = new Date('November 2, 1999 13:25:00');
    // console.log(date3);
    // const date4 = new Date('1999-11-02T13:25:00');
    // console.log(date4);
    // const date5 = new Date('02 November 1999 13:25:00');
    // console.log(date5);

    // let group1 = ['Deniels', 'Jonhson', 'Overton',
    // 'Stufford', 'Templeton'],
    // group2 = ['Greenwood','Liner','Takerman'];
    // let students = group1.splice(2,2);
    // console.log(students);
    // group2 = group2.concat(students);
    // console.log(group1, group2);

    // const john = new Human('John', 'Smith', '09-17-2003');
    // console.log(john);
    // console.log(john.id);


    // var docPrint = new PrintMachine(16,"rgb(255,0,0)","Roboto");  // task1
    // docPrint.print("Текст красный из JS");

    var article = new Article("Мой заголовок1","Небольшой текст моей статьи 1 ", ["custom","news"],new Date(1680000000000)); //task2
    var article2 = new Article("Мой заголовок2","Небольшой текст моей статьи 2 ", ["old","news"],new Date(1270000000000)); //task2
    var article3 = new Article("Мой заголовок3","Небольшой текст моей статьи 3 ", ["fresh","news"],new Date(1360000000000)); //task2
    var article4 = new Article("Мой заголовок4","Небольшой текст моей статьи 4 ", ["old","news"],new Date(1450000000000)); //task2
    var article5 = new Article("Мой заголовок5","Небольшой текст моей статьи 5 ", ["fruit","news"],new Date(1540000000000)); //task2
    //article.print();

    var news  = new News([article,article2,article3,article4]);  //task3
    console.log(news.length);
    //news.printAllNews();
    news.AddNews(article5);
    news.DeleteNews("Мой заголовок3");
    //news.printAllNews();
    news.Sort();
    //news.printAllNews();
    var oldNews = new News(news.SearchByTag("old"));
    oldNews.printAllNews();
});
// function HelloWorld() {
//     alert("Hello world!");
// }

// class Human {   example form module 2
//     #id 
//     constructor(firstname, lastname, birthday) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.birthday = birthday;
//         this.#id = Math.floor(Math.random()*10e6)
//     }
//     showInfo() {
//         console.log(this.firstname + ' ' +
//         this.lastname);
//     }
//     showAge() {
//         const deltaTime = Date.now() -  Date.parse(this.birthday);
//         const age = Math.floor(deltaTime / (365 * 24 * 60 * 60 * 1000));
//         console.log(this.firstname + ' ' +  this.lastname + ' is ' + age + ' years old.');
//     }
//     get id() {
//         return this.#id;
//     }
//     set id(value) {
//         this.#id = value;
//     }
// }

// class PrintMachine {   //task1
//     constructor(fontsize, fontcolor, fontfamily) {
//         this.fontsize = fontsize;
//         this.fontcolor = fontcolor;
//         this.fontfamily = fontfamily;
//     }
//     print(text) {
//         document.write(`<p style=" font-size: ${this.fontsize}px; color: ${this.fontcolor}; font-family: ${this.fontfamily};">  ${text} </p>`);
//     }
// }

class Article {  //task2
    constructor(header, text, tags, date)
    {
        this.header = header;
        this.text = text;
        this.tags = tags;
        this.date = date;
    }
    print() {
        this.outputString = "<div class='article'>";
        this.outputString += `<h2>${this.header}</h2>`;
        if (Date.now() - this.date < 24*60*60*1000) {
            this.outputString += `<p>Сегодня</p>`;
        }
        else if (Date.now() - this.date < 7*24*60*60*1000) {
            this.outputString += `<p>${Math.floor((Date.now() - this.date)/1000/60/60/24)} дней назад</p>`;
        }
        else {
            this.outputString += `<p>${this.date.getDate()}.${this.date.getMonth()}.${this.date.getFullYear()}</p>`;
        }        
        this.outputString += `<p>${this.text}</p>`;
        this.outputString += "<p>";
        if(this.tags instanceof Array) {
            for(let i = 0; i < this.tags.length; i++)
            {
                this.outputString += ` #${this.tags[i]} `;
            }
        }
        else {
            this.outputString += ` #${this.tags} `;
        }
        this.outputString += "</p>";
        this.outputString += "</div>";
        document.write(this.outputString);
    }
}

class News {  //task3
    constructor(articles)
    {
        this.articles = articles;
    }
    get length() {
        return this.articles.length;
    }
    printAllNews() {
        this.articles.forEach((article) => {
            article.print();
        });
    }
    AddNews(article) {
        this.articles.push(article);
    }
    DeleteNews(header) {
        let index = -1;
        for(let i = 0; i < this.articles.length; i++) {
            if(this.articles[i].header == header) {
                index = i;
                break;
            }
        }
        if(index >= 0) {
            this.articles.splice(index,1);
        }        
    }
    Sort() {
        this.articles.sort((a,b) => {
            if(a.date > b.date) {
                return -1;
            }
            if(a.date < b.date) {
                return 1;
            }
            if(a.date === b.date) {
                return 0;
            }
        });
    }
    SearchByTag(tag) {
        let newArticles = [];
        this.articles.forEach((article) => {
            if(article.tags.includes(tag))
                newArticles.push(article);
        });
        return newArticles;
    }
}