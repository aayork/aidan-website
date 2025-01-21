import Link from "next/link";

export default function NewMediaPortfolio() {
  return (
    <div
      className="min-h-screen bg-cover bg-fixed text-white"
      style={{
        backgroundImage: "url('/images/matrix.gif')",
        fontFamily: "'Nanum Gothic Coding', monospace",
        fontSize: "22px",
      }}
    >
      <h1 className="text-center text-4xl font-bold my-8">
        Aidan York&apos;s Portfolio
      </h1>

      <div className="flex justify-center mb-8">
        <Link href="/index.html" className="text-green-400 hover:underline">
          nmc portfolio
        </Link>
      </div>

      <PortfolioSection title="Week 1">
        <PortfolioLink href="week-1/assignmentOne.html">
          Assignment One
        </PortfolioLink>
        <PortfolioLink href="week-1/lists.html">
          Lists, Links, and Fonts
        </PortfolioLink>
        <PortfolioLink href="week-1/form1.html">form 1</PortfolioLink>
        <PortfolioLink href="week-1/form2.html">form 2</PortfolioLink>
        <PortfolioLink href="week-1/form3.html">form 3</PortfolioLink>
        <PortfolioLink href="week-1/form4.html">form 4</PortfolioLink>
        <PortfolioLink href="week-1/jform.html">jform</PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 2">
        <PortfolioLink href="week-2/boxModel.html">box Model</PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 3">
        <PortfolioLink href="week-3/heart.html">heart</PortfolioLink>
        <PortfolioLink href="week-3/textstyling.html">
          text styling
        </PortfolioLink>
        <PortfolioLink href="week-3/boxEx.html">box exercise</PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 4">
        <PortfolioLink href="week-4/flexbox0.html">
          Exercises 0 & 2
        </PortfolioLink>
        <PortfolioLink href="week-4/flexwrap.html">Exercise 1</PortfolioLink>
        <PortfolioLink href="week-4/flex-align0.html">
          Exercises 3 & 4
        </PortfolioLink>
        <PortfolioLink href="week-4/basicJavascript/calculate.html">
          calculate
        </PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 5">
        <PortfolioLink href="week-5/candidiates/candidiates.html">
          Exercise 1
        </PortfolioLink>
        <PortfolioLink href="week-5/candidiates/candidiates2.html">
          Exercise 2
        </PortfolioLink>
        <PortfolioLink href="week-5/fortune/fortune.html">
          Fortune
        </PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Project 1">
        <PortfolioLink href="Project-1/index.html">Project 1</PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 6">
        <PortfolioLink href="week-6/basicJavascript/conditional.html">
          conditional
        </PortfolioLink>
        <PortfolioLink href="week-6/control/index.html">
          control CSS
        </PortfolioLink>
        <PortfolioLink href="week-6/ship/ship.html">spaceship</PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="ChatGPT Activity">
        <PortfolioLink href="chatgpt/starter.html">
          Cali National Parks slideshow
        </PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 7 & Project 2">
        <PortfolioLink href="week-7/objects/classlist.html">
          Object Exercise
        </PortfolioLink>
        <PortfolioLink href="week-7/custom-objects/custom.html">
          Make an Object Assignment (Project 2)
        </PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 8 & Project 3">
        <PortfolioLink href="week-8/corona/corona.html">
          Covid Blues (Project 3)
        </PortfolioLink>
        <PortfolioLink href="week-8/nested/nested.html">
          Nested Exercise
        </PortfolioLink>
        <PortfolioLink href="week-8/cards/cards.html">
          Cards Exercise
        </PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 9">
        <PortfolioLink href="week-9/asteroids/asteroids.html">
          Asteroids
        </PortfolioLink>
        <PortfolioLink href="week-9/trivia/randomTrivia.html">
          Trivia
        </PortfolioLink>
        <PortfolioLink href="week-9/trivia/randomQuestionsTrivia">
          Multiple Random Questions
        </PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 10">
        <PortfolioLink href="week-10/classmates/classmates.html">
          Classmates Assignment
        </PortfolioLink>
        <PortfolioLink href="week-10/jukebox/index.html">
          Jamboree Jukebox
        </PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 11">
        <PortfolioLink href="week-11/vueOne/index.html">
          Vue Assignment One
        </PortfolioLink>
        <PortfolioLink href="week-11/VuePartTwo/newVue.html">
          Vue Part Two
        </PortfolioLink>
        <PortfolioLink href="week-11/VueCats/cats.html">Vue Cats</PortfolioLink>
        <PortfolioLink href="week-11/VuePartThree/youguys.html">
          Vue Part 3
        </PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 12">
        <PortfolioLink href="week-12/toast/component.html">toast</PortfolioLink>
        <PortfolioLink href="week-12/computed/computed.html">
          computed
        </PortfolioLink>
        <PortfolioLink href="week-12/computed2/studentDemo.html">
          computed 2
        </PortfolioLink>
        <PortfolioLink href="week-12/dawgs/dog.html">DAWGS API</PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Week 13 & Project 6">
        <PortfolioLink href="week-13/kitty/kitty.html">cat API</PortfolioLink>
        <PortfolioLink href="week-13/catshow/catshow.html">
          Cat Show
        </PortfolioLink>
      </PortfolioSection>

      <PortfolioSection title="Final Project">
        <PortfolioLink href="final-project/mars.html">
          Mars Rover Images
        </PortfolioLink>
      </PortfolioSection>
    </div>
  );
}

function PortfolioSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-center text-2xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2 text-center">{children}</ul>
    </div>
  );
}

function PortfolioLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-green-400 hover:text-green-500 hover:underline"
      >
        {children}
      </Link>
    </li>
  );
}
