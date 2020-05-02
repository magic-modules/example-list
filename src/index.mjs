export const View = () =>
  GitList({
    org: 'magic-examples',
    header: [Link({ to: 'https://magic-examples.github.io' }, '@magic-examples')],
    desc: [
      'below is a collection of the available @magic example pages.',
      ' these are pages that have been prepared and setup already,',
      ' and that can be used to start working on a @magic app easily.',
    ],
    badges: false,
    items: [
      {
        name: 'minimal',
        description: 'a minimal example for those that want to start from (almost) scratch.',
      },
      {
        name: 'example',
        description: 'an example showing client side state management and module usage.',
      },
      {
        name: 'project',
        description: 'an example project page, using the @magic-themes/project theme.',
      },
    ],
  })
