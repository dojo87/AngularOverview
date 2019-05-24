class Api {
  public courses = [
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
        {
          header: 'Logo',
          type: 'IMAGE',
          content: 'https://angular.io/assets/images/logos/angular/angular.png'
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
        },
        ...this.getMockSections(10),
        {
          header: 'Zakończenie',
          type: 'TEXT',
          content: 'Uff dobrnęliśmy do końca, nudy jak flaki z olejem.'
        }
      ]
    }
  ];

  private getMockSections(howMany: number) {
    const sections = [];
    for (let section = 1; section <= howMany; section++) {
      sections.push(
        this.getMockSection(
          'Chapter ' + section,
          Math.round(Math.random() * 100)
        )
      );
    }

    return sections;
  }

  private getMockSection(header: string, howManyLines: number) {
    const content = [];
    for (let line = 0; line < howManyLines; line++) {
      content.push(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' + header
      );
    }

    return { header, type: 'TEXT', content: content.join() };
  }
}

module.exports = () => {
  return { courses: new Api().courses };
};
