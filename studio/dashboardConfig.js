export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eb3d390cd3e6062460b768c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uqq18m7r',
                  apiId: '7f9b9ee2-a115-402d-a3aa-227261519673'
                },
                {
                  buildHookId: '5eb3d3905d279178763f1b6b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-vsk7svho',
                  apiId: '432f0f0d-acba-414a-a986-acc21b256270'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hyson1977/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-vsk7svho.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
