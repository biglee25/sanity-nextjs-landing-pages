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
                  buildHookId: '603ba876e4f02895dd2dcd24',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zwvx5bnh',
                  apiId: '64603507-8688-4a40-8e3d-ef7c0763ba0e'
                },
                {
                  buildHookId: '603ba876bb172b7170718c3c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-djc8panx',
                  apiId: '2b2e6dd2-c1c0-41f5-888a-c56c5bf47e8c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/biglee25/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-djc8panx.netlify.app', category: 'apps'}
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
