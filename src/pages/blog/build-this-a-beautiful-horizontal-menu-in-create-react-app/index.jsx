import { getArticleMetaData } from "@/api/blog";

import BlogPost, {
  Section,
  Heading,
  InlineSnippet,
  BlockSnippet,
  Tip,
} from "@/features/blog/post";

export default function BuildThisHorizontalMenu(props) {
  return (
    <BlogPost {...props}>
      <Section>
        <Heading>First, a mockup to see what we are building</Heading>

        <p>
          It is a best practice to build from a mockup. You can think of it like
          a visual contract. When a boss or client wants you to build a new
          feature, it is easier to build what they want if you work from a
          visual mockup. That way you are sure to give them what they are asking
          for!
        </p>

        <p>
          I have found over my many years of consulting that misunderstandings
          due to poorly defined requirements not only can, but must be avoided
          if you want to get paid, and/or keep your job! So get this step done
          and agreed on first!
        </p>

        <p>
          Here is what we will be building today, first using the React Router
          found in Create React App, and then we will modify it to work with
          NextJS.
        </p>

        <img
          src="/images/learn/react/build-this-a-beautiful-horizontal-menu-in-create-react-app-and-in-nextjs/mockup.png"
          alt=""
        />

        <p>
          The horizontal menu we will be building was inspired by the main menu
          you can see at{" "}
          <a target="_blank" href="https://github.com/devmentorlive">
            DevmentorLive's Github
          </a>
          . I have included a screenshot here in case Github changes it, we can
          still see how it was.
        </p>
      </Section>

      <Section>
        <Heading>Generating our Create React App using my Template</Heading>

        <p>
          If you have been following for very long, you know I ❤️ NextJS, but we
          will first, build this in create-react-app. Let's start by
          bootstrapping the CRA app and install the React Router. We will use my
          own starter template so it already has TailwindCSS and React Router
          installed!
        </p>

        <p>In your terminal:</p>

        <BlockSnippet
          language="bash"
          code={`npx create-react-app your-app-name --template cra-template-dml-tailwind`}
        />

        <p>
          I suggest you take a moment to look at the{" "}
          <a
            target="_blank"
            href="https://github.com/devmentorlive-youtube/cra-tailwind-starter">
            project README found here
          </a>
          . It will explain the folder structure and how to do simple tasks.
        </p>

        <p>
          I have customized the colors for Tailwind to something that I find
          more visually appealing. You can look at the{" "}
          <InlineSnippet>tailwind.config.js</InlineSnippet> to see what colors
          are on offer. I suggest using{" "}
          <a taget="_blank" href="https://javisperez.github.io">
            the Shades Generator for Tailwind CSS by Javis Perez
          </a>{" "}
          to generate your own color hues!
        </p>
      </Section>

      <Section>
        <Heading>Download the SVG components to make things easier</Heading>
        <p>
          You can{" "}
          <a href="https://github.com/devmentorlive-youtube/build-this-a-beautiful-horizontal-menu-in-create-react-app-and-in-nextjs-svgs/blob/main/github-menu-icons.zip?raw=true">
            get the SVGS
          </a>{" "}
          used in the project here. I pulled these out of the Github website
          using the web developer inspector built into all of the browsers, and
          then turned them into React components to make them easier to work
          with in CRA. Otherwise you would need to modify Webpack to allow svgs
          as imports.
        </p>

        <p>
          When you download the archive, unzip it in your project so all of the
          svgs are located in <InlineSnippet>src/ui/icons</InlineSnippet>. Here
          is what they look like in their default color:
        </p>

        <ul className="flex p-4 space-x-4 bg-white">
          {[
            "overview.png",
            "packages.png",
            "people.png",
            "projects.png",
            "repositories.png",
            "settings.png",
            "teams.png",
          ].map((icon) => (
            <li>
              <img
                src={`/images/learn/react/build-this-a-beautiful-horizontal-menu-in-create-react-app/${icon}`}
              />
            </li>
          ))}
        </ul>

        <p>We will be making them white via some simple css.</p>
      </Section>

      <Section>
        <Heading>Changing the the application to a dark theme</Heading>

        <p>
          The first thing we will do is make a couple of css changes to make the
          site use a "dark theme". Since we are using TailwindCSS is is really
          quite simple!
        </p>

        <p>
          Open up the file <InlineSnippet>src/app/globals.css</InlineSnippet>{" "}
          and under the <InlineSnippet>@tailwind</InlineSnippet> directives add
          this code under it.
        </p>

        <BlockSnippet
          language="jsx"
          code={`
:root {
  @apply bg-black-900 text-gray-100;
}
        `}
        />

        <p>
          This just sets the document's background to a dark, dark grey, and the
          text to white(ish). I never use hard black and hard white as I prefer
          a softer look.
        </p>

        <p>
          The <InlineSnippet>@apply</InlineSnippet> is a Tailwind postcss
          directive that essentially adds new functionality to css. In this case
          it allows css to read Tailwind classes and the actual css will get
          inserted there at run-time.
        </p>

        <p></p>
      </Section>

      <Section>
        <Heading>Code as Data, Data as Code</Heading>
        <p>
          One of my favorite things about React and functional programming is
          the concept of <em>code as data</em>. When you can embed code directly
          inside of data structures like <InlineSnippet>Arrays</InlineSnippet>{" "}
          and
          <InlineSnippet>Objects</InlineSnippet>, you get access to an
          incredibly power tool!
        </p>
        <p>
          Open the <InlineSnippet>src/pages/index.jsx</InlineSnippet> file and
          it will look like this:
        </p>
        <BlockSnippet
          language="jsx"
          code={`
export default function Homepage({}) {
  return (
    <div className="container mx-auto mt-8">
      <h1>Hello world.</h1>
    </div>
  );
}
        `}
        />
        <p>
          We are going to replace the <InlineSnippet>&lt;h1&gt;</InlineSnippet>{" "}
          with a <InlineSnippet>&lt;ul&gt;</InlineSnippet>, and add some{" "}
          <InlineSnippet>&lt;li&gt;</InlineSnippet> tags.
        </p>
        <BlockSnippet
          language="jsx"
          code={`
export default function Homepage({}) {
  return (
    <div className="container mx-auto mt-8">
      <ul className="flex space-x-4">
        <li>Overview</li>
        <li>Repositories</li>
        <li>Packages</li>
        <li>People</li>
        <li>Teams</li>
        <li>Projects</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}
        `}
        />
        <p>That seems fine until you add the icons and some classNames...</p>
        <BlockSnippet
          language="jsx"
          code={`
export default function Homepage({}) {
  return (
    <div className="container mx-auto mt-8">
      <ul className="flex space-x-4">
        <li className="flex items-center space-x-4">
          <OverviewIcon />
          <div>Overview</div>
        </li>
        <li className="flex items-center space-x-4">
          <RepositoriesIcon />
          <div>Repositories</div>
        </li>
        <li className="flex items-center space-x-4">
          <PackagesIcon />
          <div>Packages</div>
        </li>
        <li className="flex items-center space-x-4">
          <PeopleIcon />
          <div>People</div>
        </li>
        <li className="flex items-center space-x-4">
          <TeamsIcon />
          <div>Teams</div>
        </li>
        <li className="flex items-center space-x-4">
          <ProjectsIcon />
          <div>Projects</div>
        </li>
        <li className="flex items-center space-x-4">
          <SettingsIcon />
          <div>Settings</div>
        </li>
      </ul>
    </div>
  );
}
        `}
        />
        <p>
          Look at all that <em>code duplication</em> and try not to vomit!
        </p>
        <p>
          This is where code as data comes in. First, we need a data structure
          to hold those values. Lets use an <InlineSnippet>Array</InlineSnippet>{" "}
          of <InlineSnippet>Objects</InlineSnippet>!
        </p>
        <BlockSnippet
          language="jsx"
          code={`

const menuItems = [
  {label: "Overview", icon: <OverviewIcon />},
  {label: "Repositories", icon: <RepositoriesIcon />},
  {label: "Packages", icon: <PackagesIcon />},
  {label: "People", icon: <PeopleIcon />},
  {label: "Teams", icon: <TeamsIcon />},
  {label: "Projects", icon: <ProjectsIcon />},
  {label: "Settings", icon: <SettingsIcon />},
]

export default function Homepage({}) {
  ...
}
        `}
        />
        <p>
          Now that we have turned that code into data that <em>contains</em>{" "}
          code, let's <em>iterate</em> over it and just have a single{" "}
          <InlineSnippet>&lt;li&gt;</InlineSnippet> tag!
        </p>

        <BlockSnippet
          language="jsx"
          code={`
import OverviewIcon from "../ui/icons/overview";
import RepositoriesIcon from "../ui/icons/repositories";
import PackagesIcon from "../ui/icons/packages";
import PeopleIcon from "../ui/icons/people";
import TeamsIcon from "../ui/icons/teams";
import ProjectsIcon from "../ui/icons/projects";
import SettingsIcon from "../ui/icons/settings";

const menuItems = [
  {label: "Overview", icon: <OverviewIcon />},
  {label: "Repositories", icon: <RepositoriesIcon />},
  {label: "Packages", icon: <PackagesIcon />},
  {label: "People", icon: <PeopleIcon />},
  {label: "Teams", icon: <TeamsIcon />},
  {label: "Projects", icon: <ProjectsIcon />},
  {label: "Settings", icon: <SettingsIcon />},
]

export default function Homepage({}) {
  return (
    <div className="container mx-auto mt-8">
      <ul className="flex space-x-4">
      {
        menuItems.map(item => (
          <li className="flex items-center space-x-4">
            {item.icon}
            <div>{item.label}</div>
          </li>
        ))
      }
      </ul>
    </div>
  )
}
        `}
        />

        <p>
          Now we have no code duplication. Being able to embed code inside of
          objects via components is awesome! Now we need to map the url to a
          menu item so we can draw a blue border under the <em>active</em> link!
        </p>
      </Section>

      <Section>
        <Heading>Turning our code into a MainMenu component</Heading>

        <p>
          Right now this code is embedded directly into our{" "}
          <InlineSnippet>Homepage</InlineSnippet> component, but our menu items
          will point to many different pages. So we would end up copying and
          pasting this code into multiple files.
        </p>

        <p>
          The problem with that is that we will then have multiple places to
          make edits if we decide to change the menu or add items to it. So it
          is time to extract this out into it's own <em>feature</em>, and then
          include that feature on the page.
        </p>

        <p>
          Create a new file at{" "}
          <InlineSnippet>src/features/main-menu/index.jsx</InlineSnippet>
          and inside of it, cut and paste the code from the{" "}
          <InlineSnippet>Homepage</InlineSnippet> component and rename it to{" "}
          <InlineSnippet>MainMenu</InlineSnippet>
        </p>

        <BlockSnippet
          language="jsx"
          code={`
import OverviewIcon from "../../ui/icons/overview";
import RepositoriesIcon from "../../ui/icons/repositories";
import PackagesIcon from "../../ui/icons/packages";
import PeopleIcon from "../../ui/icons/people";
import TeamsIcon from "../../ui/icons/teams";
import ProjectsIcon from "../../ui/icons/projects";
import SettingsIcon from "../../ui/icons/settings";

const menuItems = [
  {label: "Overview", icon: <OverviewIcon />},
  {label: "Repositories", icon: <RepositoriesIcon />},
  {label: "Packages", icon: <PackagesIcon />},
  {label: "People", icon: <PeopleIcon />},
  {label: "Teams", icon: <TeamsIcon />},
  {label: "Projects", icon: <ProjectsIcon />},
  {label: "Settings", icon: <SettingsIcon />},
]

export default function MainMenu({}) {
  return (
    <div className="container mx-auto mt-8">
      <ul className="flex space-x-4">
      {
        menuItems.map(item => (
          <li className="flex items-center space-x-4">
            {item.icon}
            <div>{item.label}</div>
          </li>
        ))
      }
      </ul>
    </div>
  )
}
        `}
        />

        <p>
          The <InlineSnippet>Homepage</InlineSnippet> component will now look
          like this:
        </p>

        <BlockSnippet
          language="jsx"
          code={`
export default function Homepage({}) {
  return (
    <div className="container mx-auto mt-8">
      <h1>Hello world</h1>
    </div>
  )
}
        `}
        />
      </Section>

      <Section>
        <Heading>Creating our pages and linking them to the main menu</Heading>

        <p>
          Next we will create pages for our menu items. We will do this in the
          <InlineSnippet>src/pages</InlineSnippet> folder. Let's start with the
          Overview page:
        </p>

        <BlockSnippet
          language="jsx"
          code={`
export default function OverviewPage({}) {
  import MainMenu from "../../features/main-menu";
  return (
    <div className="container mx-auto mt-8">
      <MainMenu />
    </div>
  )
}
        `}
        />

        <p>
          Now that we have the page component, we need to add it to the router.
          We need to do that in the{" "}
          <InlineSnippet>src/app/index.jsx</InlineSnippet>
          file.
        </p>

        <Tip heading="Show the folder containing the file in the tab!">
          <p>
            If you have an aversion to using the default entry point file
            standard, it might be because you think you wont be able to tell one
            index file from another.
          </p>

          <p>
            The answer is not to buck the standard, but to change your habits
            and/or tooling. To do so in Visual Studio Code: do a{" "}
            <InlineSnippet>cmd+,</InlineSnippet> on Mac or
            <InlineSnippet>ctl+,</InlineSnippet> on PC and do a search for
            <em>label</em> and change the option to <em>short</em>.
          </p>
        </Tip>

        <p>The router looks like this right now:</p>

        <BlockSnippet
          language="jsx"
          code={`
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "../pages/";

import "./globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
        `}
        />

        <p>And we will add our route under the homepage route:</p>

        <BlockSnippet
          language="jsx"
          code={`
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "../pages/";
import OverviewPage from "../pages/overview";

import "./globals.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/overview">
          <OverviewPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
        `}
        />

        <p>
          Now do the same thing for pages and routes for Repositories, Packages,
          People, Teams, Projects, Settings.
        </p>
      </Section>

      <Section>
        <Heading>Now let's link our menu items</Heading>

        <p>
          Since our menu item is about to expand in complexity, first we need to
          extract it into it's own component. We will start in the{" "}
          <InlineSnippet>src/features/main-menu/index.jsx</InlineSnippet> and
          cut line <InlineSnippet>25</InlineSnippet> and
          <InlineSnippet>26</InlineSnippet> onto our clipboard and then in the
          same folder, <InlineSnippet>src/features/main-menu</InlineSnippet>, we
          will create a new file for our <InlineSnippet>MenuItem</InlineSnippet>
          , name it{" "}
          <InlineSnippet>src/features/main-menu/menu-item.jsx</InlineSnippet>.
        </p>

        <p>
          This is <em>exactly</em> why I create my components as folders, not as
          files. Files can't have stylesheets, images, and child components, so
          you either end up with huge component files mixed with images, styled
          components, and other artifacts, or a giant flat directory (ie, a
          "components" folder) that provides <em>no organization</em>.
        </p>

        <p>
          In that new component file, create a component, and paste your
          clipboard into a fragment in the <InlineSnippet>return</InlineSnippet>
          .
        </p>

        <BlockSnippet
          language="jsx"
          code={`
export default function MenuItem({icon, label}) {
  return <>
    icon && <span>{icon}</span>}
    <span>{label}</span>
  </>
}
        `}
        />

        <p>
          The reason we use a fragment is in React, you can't have child
          elements without a parent.
        </p>

        <p>
          Now add the newly created <InlineSnippet>MenuItem</InlineSnippet>{" "}
          component to the <InlineSnippet>MainMenu</InlineSnippet> component
          where where you cut the menu item code out before.
        </p>

        <BlockSnippet
          language="jsx"
          code={`
<div className="container mx-auto mt-8">
  <ul className="flex space-x-4">
  {
    menuItems.map(item => (
      <li className="flex items-center space-x-4">
        <MenuItem {...item} />
      </li>
    ))
  }
  </ul>
</div>
        `}
        />

        <p>
          Notice the spread operator here. This is just a shortcut to specifying
          all the props inline. And we also have to add the href prop to the{" "}
          <InlineSnippet>MenuItem</InlineSnippet> component. And throw a{" "}
          <InlineSnippet>Link</InlineSnippet> in there too!
        </p>

        <BlockSnippet
          language="jsx"
          code={`
export default function MenuItem({icon, label, href}) {
  return <Link href={href}>
    icon && <span>{icon}</span>}
    <span>{label}</span>
  </Link>
}
        `}
        />

        <p>
          Next we need to add hrefs to our link data structure. Remember, this
          file is in{" "}
          <InlineSnippet>src/features/main-menu/index.jsx</InlineSnippet>.
          Instead of repeating all the code in this file, I will just do the
          part that will be changing:
        </p>

        <BlockSnippet
          language="jsx"
          code={`
  const menuItems = [
    {label: "Overview", icon: <OverviewIcon />, href: "/overview},
    {label: "Repositories", icon: <RepositoriesIcon />, href: "/repositories},
    {label: "Packages", icon: <PackagesIcon />}, href: "/packages},
    {label: "People", icon: <PeopleIcon />}, href: "/people},
    {label: "Teams", icon: <TeamsIcon />}, href: "/teams},
    {label: "Projects", icon: <ProjectsIcon />}, href: "/projects},
    {label: "Settings", icon: <SettingsIcon />}, href: "/settings},
  ]
`}
        />

        <p></p>
      </Section>

      <Section>
        <Heading>Creating the active link highlight</Heading>

        <p>
          When we are on a page that is linked in our menu, we want an underline
          to show that is the active link. On Github it is orange, but we will
          make it blue, because I prefer blue. 🙂
        </p>

        <p>
          To do this we need to tap into the React Router to find out what the
          current url is, and match it to the link url in the menu. We can get
          this information from <InlineSnippet>useRouteMatch</InlineSnippet>.
        </p>

        <p>
          To see if the href is the same as the current url, we can do this:
        </p>

        <BlockSnippet
          language="jsx"
          code={`
const active = useRouteMatch({
  path: href,
  exact: true,
});
        `}
        />

        <p>
          And here is the code for the whole{" "}
          <InlineSnippet>MenuItem</InlineSnippet>
          component with the styling for the hover and the active link!
        </p>

        <BlockSnippet
          language="jsx"
          code={`
import { useRouteMatch, Link } from "react-router-dom";

export default function MenuLink({ icon, label, href }) {
  const active = useRouteMatch({
    path: href,
    exact: true,
  });
  return (
    <li
      className={\`px-4 cursor-pointer pb-3 border-b-2  relative duration-400 transition menu-link \${
        active
          ? "border-b-2 border-blue-500"
          : "border-transparent hover:border-gray-500"
      }\`}>
      <Link
        to={href}
        className={\`flex space-x-2 items-center hover:text-white hover:font-medium \${
          active ? "font-medium text-white" : "text-gray-300"
        }\`}>
        {icon && <span>{icon}</span>}
        <span>{label}</span>
      </Link>
    </li>
  );
}
        
        `}
        />
      </Section>
    </BlogPost>
  );
}

export async function getServerSideProps({ req }) {
  const props = await getArticleMetaData(
    "build-this-a-beautiful-horizontal-menu-in-create-react-app"
  );

  return {
    props,
  };
}
