var Api = /** @class */ (function () {
    function Api() {
        this.courses = [
            {
                id: 'przyspieszony-kurs-angulara',
                slug: 'przyspieszony-kurs-angulara',
                title: 'Przyśpieszony kurs Angulara!!',
                author: '10min.pl',
                sections: [
                    {
                        header: 'Wstep',
                        type: 'TEXT',
                        content: 'Przyśpieszony kurs nie pozwala na zbytnie lanie wody'
                    },
                    this.getMockSection('Trochę rozwiniemy', 4),
                    { header: 'Zakończenie', type: 'TEXT', content: 'A więc już kończymy' }
                ]
            },
            {
                id: 'bardziej-rozwiniety-kurs-angulara',
                slug: 'bardziej-rozwiniety-kurs-angulara',
                title: 'Trochę bardziej rozwinięty kurs Angulara...',
                author: '10min.pl',
                sections: [
                    {
                        header: 'Wstep',
                        type: 'TEXT',
                        content: 'A więc zaczęło się w roku 2010....'
                    }
                ].concat(this.getMockSections(10), [
                    {
                        header: 'Zakończenie',
                        type: 'TEXT',
                        content: 'Uff dobrnęliśmy do końca, nudy jak flaki z olejem.'
                    }
                ])
            }
        ];
    }
    Api.prototype.getMockSections = function (howMany) {
        var sections = [];
        for (var section = 1; section <= howMany; section++) {
            sections.push(this.getMockSection('Chapter ' + section, Math.round(Math.random() * 100)));
        }
        return sections;
    };
    Api.prototype.getMockSection = function (header, howManyLines) {
        var content = [];
        for (var line = 0; line < howManyLines; line++) {
            content.push('Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + header);
        }
        return { header: header, type: 'TEXT', content: content.join() };
    };
    return Api;
}());
module.exports = function () {
    return { courses: new Api().courses };
};
