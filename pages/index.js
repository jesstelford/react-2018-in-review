import React, { Fragment }  from 'react';
import sortBy from 'lodash/sortBy';
import styled, { createGlobalStyle } from 'styled-components';
import format from 'date-fns/format';

import '../css/h5bp.css';
import '../css/normalize.css';

const generateId = when => format(when, 'YYYY-MM-DD');

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: sans-serif;
  }

`

const Heading = styled.h1`
  font-size: 5em;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  font-size: 0.8em;
  margin-bottom: 5rem;
`;

const Header = styled.header`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2em;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 2em;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: #00007c;
  &:hover {
    text-decoration: underline;
  }
  &:visited {
    color: #00007c;
  }
`;

const Button = styled(Link).attrs({
  as: 'button',
})`
  border: 1px solid #222;
  border-radius: 2px;
  padding: 0.2em 0.4em;
  &:hover {
    text-decoration: none;
    background-color: #222;
    color: white;
  }
`;

const When = styled.div`
  font-weight: bold;
  font-size: small;
`;

const Title = styled.h2`

`;

const Blockquote = styled.blockquote`
  border-left: 3px solid lightgray;
  padding-left: 1em;
  font-style: italic;
`;

const Code = styled.code`
  background-color: #efefef;
  border-radius: 2px;
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
`;

const FullScreenImage = styled.img`
  max-width: 100%;
  max-height: 75vh;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: auto;
  right: 0;
  top: 0;
`;

const FullScreenVideo = styled(({ poster, src, className }) => (
  <video loop="loop" muted="muted" poster={poster} className={className} autoPlay="autoplay">
    <source src={src} type="video/mp4" />
  </video>
))`
  max-width: 100%;
  max-height: 85vh;
  bottom: 0;
  left: 0;
  margin: auto;
  overflow: auto;
  right: 0;
  top: 0;
`;

const events = [
  {
    when: 1514725200000,
    what: when => (
      <Fragment>
        <Title>React Downloads</Title>
        <FullScreenImage src="/static/trends.png" alt="react downloads increasing every month" />
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-09-19')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title>Framer X released</Title>
        <FullScreenVideo src="https://static.framer.com/x/frontpage/layout-video.mp4" alt="Framer X Example" />
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-06-07')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html">You Probably Don't Need Derived State</Link></Title>
        <Blockquote>
          React 16.4 included a bugfix for <Code>getDerivedStateFromProps</Code> which caused some existing bugs in React components to reproduce more consistently.
        </Blockquote>
        <em>Alternates</em>
        <ul>
          <li>Fully Controlled or Uncontrolled</li>
          <li>Memoization</li>
        </ul>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-09-10')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html">React Profiler</Link></Title>
        <FullScreenImage src="/static/profiler.gif" alt="react profiler drill-down" />
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-12-02')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://reactjs.org/blog/2018/11/27/react-16-roadmap.html">React 16.x Roadmap</Link></Title>
        <ul>
          <li>React 16.6 with Suspense for Code Splitting (<em>already shipped</em>)</li>
          <li>A minor 16.x release with React Hooks (~Q1 2019)</li>
          <li>A minor 16.x release with Concurrent Mode (~Q2 2019)</li>
          <li>A minor 16.x release with Suspense for Data Fetching (~mid 2019)</li>
        </ul>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-11-30')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Link href="https://codeheartdesign.com"><FullScreenImage src="/static/chd.svg" alt="Code Heart Design Logo" /></Link>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-09-05')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title>Announcing styled-components v4: Better, Faster, Stronger 💅</Title>
        <ol>
          <li>Smaller (from 16.1kB to &lt;15kB)</li>
          <li>Faster (mounting: +25%, re-rendering: +7.5%)</li>
          <li><Code>createGlobalStyle</Code> API (hot-reloadable and themable)</li>
          <li><Code>"as"</Code> prop (replaces <Code>.withComponent()</Code></li>
          <li><Code>StrictMode</Code> compliance for React v16</li>
          <li>Native <Code>ref</Code> on any styled component (no more <Code>innerRef</Code>)</li>
        </ol>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-06-17')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <FullScreenImage src="/static/react-toast.gif" alt="React Toast component" /><br />
        <Code>yarn add react-toast-notifications</Code>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-10-26')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://github.com/reactjs/rfcs/pull/68">RFC: React Hooks</Link></Title>
        <FullScreenImage src="/static/hooks.png" alt="React Toast component" /><br />
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-11-12')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://github.com/atlassian/react-beautiful-dnd/releases/tag/v10.0.0"><Code>react-beautiful-dnd</Code> 10.0: faster, more powerful</Link></Title>
        <ol>
          <li>🚀 30% faster</li>
          <li>💥 Smarter collision engine</li>
          <li>🎹 More robust keyboard movement system</li>
          <li>🌲 New: tree library @atlaskit/tree by @Confluence</li>
          <li>🎳 New: combine items</li>
          <li>🐣 New: add and remove items during a drag</li>
        </ol>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-05-17')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://mobile.twitter.com/gatsbyjs/status/999684072501792768">Gatsby forms Gatsby Inc, raises 3.8M seed round</Link></Title>
        <FullScreenImage src="/static/gatsby.png" alt="Gatsby's tweet" /><br />
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-02-17')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://github.com/facebook/react-native/commit/26684cf3adf4094eb6c405d345a75bf8c7c0bf88">React Native goes MIT</Link></Title>
        <FullScreenImage src="/static/react-native-mit.png" alt="React Native goes MIT" /><br />
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-10-23')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://reactjs.org/blog/2018/10/23/react-v-16-6.html">React v16.6.0</Link></Title>
        <ol>
          <li><Code>React.memo</Code></li>
          <li><Code>React.lazy</Code>: Code-Splitting with Suspense</li>
          <li><Code>Code-Splitting with Suspense</Code></li>
          <li><Code>static getDerivedStateFromError()</Code></li>
        </ol>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-09-20')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title>Next.js v7</Title>
        <ol>
          <li>57% faster bootup, 42% faster re-compilation</li>
          <li><Code>react-error-overlay</Code></li>
          <li>Webpack 4 and Babel 7</li>
          <li>Standardized Dynamic Imports</li>
          <li>Static CDN support</li>
          <li>Smaller initial HTML payload</li>
          <li>React Context with SSR between App and Pages</li>
        </ol>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-05-18')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://medium.com/material-ui/material-ui-v1-is-out-e73ce13463eb">Material-UI v1 is out 🎉</Link></Title>
        <FullScreenImage src="/static/material-ui-logo.svg" alt="Material UI" /><br />
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-03-29')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link href="https://reactjs.org/blog/2018/03/29/react-v-16-3.html">React v16.3.0: New lifecycles and context API</Link></Title>
        <ol>
          <li><Code>React.createContext()</Code></li>
          <li><Code>React.createRef()</Code></li>
          <li><Code>React.forwardRef()</Code></li>
          <li><Code>getDerivedStateFromProps()</Code></li>
          <li><Code>getSnapshotBeforeUpdate()</Code></li>
          <li><Code>StrictMode</Code></li>
        </ol>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-03-30')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <FullScreenImage src="/static/context.png" alt="React Context Example" /><br />
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-10-02')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title>Create React App v2</Title>
        <ol>
          <li>🎉 Use Sass and CSS Modules out of the box.</li>
          <li>🐠 Babel 7</li>
          <li>📦 Webpack 4</li>
          <li>🃏 Jest 23</li>
          <li>💄 Added PostCSS</li>
          <li>💎 Babel Macros support (Apollo, Relay Modern, MDX)</li>
          <li>🌠 Import an SVG as a React component</li>
          <li>🐈 Yarn Plug’n’Play mode that removes <Code>node_modules</Code>.</li>
          <li>👷‍♀️ Opt-in service workers with Google’s Workbox.</li>
        </ol>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-09-01')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title><Link style={{ fontSize: '1.5em' }} href="https://github.com/facebook/react/issues/13525">🔥 React Fire</Link></Title>
        <em>Blazing</em>
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-04-05')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title>React's Lifecycle methods</Title>
        <FullScreenImage src="/static/lifecycle.jpg" alt="React Lifecycle methods" />
      </Fragment>
    ),
  },
  {
    when: +(new Date('2018-09-18')),
    what: when => (
      <Fragment>
        <When>{format(when, 'MMM Do, YYYY')}</When>
        <Title>Gatsby v2</Title>
        <ol>
          <li>Reduced build times by up to 75%</li>
          <li>Shrunk JavaScript client runtime by 31%</li>
          <li>Webpack 4, Babel 7, React 16.5</li>
        </ol>
      </Fragment>
    ),
  },
];

export default () => {

  const sortedEvents = sortBy(events, 'when');

  return (
    <section>
      <GlobalStyles />
      <Header>
        <Heading>React 2018 in review</Heading>
        <SubHeading>By <a href="https://jes.st/about">Jess Telford</a></SubHeading>
        <Button as="a" href={`#${generateId(sortedEvents[0].when)}`}>Let's go!</Button>
      </Header>
      <List>
        {sortedEvents.map(({ what, when }, index) => (
          <Item key={when} id={generateId(when)}>
            <Content>{what(when)}</Content>
            {index !== sortedEvents.length - 1 ? <Button as="a" style={{ marginTop: '1em' }} href={`#${generateId(sortedEvents[index + 1].when)}`}>Next ></Button> : null}
          </Item>
        ))}
      </List>
    </section>
  );
}
