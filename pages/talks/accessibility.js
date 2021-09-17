import styled from 'styled-components';
import Head from 'next/head';
import HomeLink from '../../components/HomeLink';
import Layout from '../../components/utils/Layout';
import MaxWidthWrapper from '../../components/utils/MaxWidthWrapper';
import PageHeader from '../../components/utils/PageHeader';
import Paragraph from '../../components/utils/Paragraph';
import Spacer from '../../components/utils/Spacer';

const Accessibility = () => {
  return (
    <>
      <Head>
        <title>Peter Millspaugh | Web Accessibility</title>
        <meta
          name='description'
          content='Peter Millspaugh - Web Accessibility for Frontend Developers'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomeLink />
      <Layout>
        <MaxWidthWrapper>
          <PageHeader page='Accessibility' />
          <Spacer size='12px' />
          <ContentWrapper>
            <YouTube
              src='https://www.youtube.com/embed/pPX0Gk0l6Vo'
              title='Peter Millspaugh - Web Accessibility for Frontend Developers'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            />
            <Spacer size='36px' />
            <Transcript id='transcript'>
              <TranscriptSummary>Transcript</TranscriptSummary>
              <TranscriptParagraph>
                <strong>(AKI, host)</strong> Thank you for coming out tonight
                everybody. Tonight we have a tech talk with Peter Millspaugh and
                he&apos;s going to talk to us today about Web Accessibility, so
                without further ado please take it away, Peter.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <strong>(PETER)</strong> Thank you, Aki, for the introduction,
                and thanks to everyone for joining me. My name is Peter, and
                today I&apos;ll be discussing Web Accessibility. Before I get
                started, I&apos;d like to thank Codesmith and Single Sprout for
                sponsoring this talk.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 1: Agenda] </em>So, to set the stage for what
                we&apos;ll be discussing: first I&apos;ll get into what
                Accessibility is and why it&apos;s important; and then I&apos;ll
                talk about some different ways people use computers and access
                websites using assistive technology; then we&apos;ll get in into
                some practical tips and code examples; and lastly, we&apos;ll
                take a look at Accessibility tooling.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 2: What is Accessibility] </em>So, what is
                Accessibility? Just a note, you&apos;ll often see a11y, which is
                shorthand because there are 11 letters between the a and the y
                in &apos;accessibility.&apos; The simplest definition is that
                Web Accessibility means people with disabilities can use the
                web. So, when a website is accessible, any user should be able
                to access its content and use any interactive features. This
                includes people using a keyboard and mouse or touch screen, but
                also screen reader users and people using other assistive
                technologies, which I&apos;ll speak more about in a minute.
                It&apos;s also helpful to recognize the magnitude – about one in
                four adults in the U.S. have some form of disability, and that
                number is actually quite a bit higher if you&apos;re looking at
                the aging population. So for frame of reference, that can be
                thought of in four categories here on the screen: vision would
                cover things like blindness, low vision, and color blindness;
                auditory encompasses deafness and hearing loss; physical would
                be any sort of motor function-related disability, for example
                someone might not be able to use a mouse and they&apos;d have to
                rely on their keyboard alone to navigate a website; and then
                lastly cognitive, and that&apos;s a broad category – it includes
                things like ADHD, dyslexia, and autism. Also, impairments can be
                temporary. So, for example someone might have a broken wrist and
                they&apos;d be unable to use the mouse, and they might rely on a
                keyboard only.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 3: Assistive Technology] </em>As I mentioned people
                use computers and websites in a lot of really different ways,
                and so it&apos;s helpful for you to think about making your user
                experience as flexible as possible to cater to everyone.
                We&apos;ll focus mostly on screen readers and keyboard
                navigation today, but there are a number of different assistive
                technologies that people rely on. And for anyone who&apos;s not
                familiar, a screen reader is a software program that announces
                website content aloud using a text-to-speech synthesizer so that
                way users can actually listen to the content and then navigate
                through a website using their keyboard. Some of the most popular
                screen readers are VoiceOver, which comes built into Mac&apos;s
                operating system; NVDA is a free, open-source Windows screen
                reader, and that&apos;s the one I&apos;ve tested out on my
                computer; and then JAWS is a paid screen reader, and it&apos;s
                actually the most widely used, so that&apos;s a good one to be
                aware of. I&apos;d encourage you to try it yourself. It can
                actually be really interesting to pull up a screen reader and
                see what that experience is like just to get a sense for the
                user experience.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 4: Why Accessibility] </em>The last thing I&apos;ll
                cover before getting into some practical code examples is why we
                should be thinking about Accessibility. So, first and foremost,
                definitely anyone should be able to use any website regardless
                of ability, and that&apos;s sort of driving the conversation
                about why we should be incorporating accessibility into our
                websites. But there are certainly selfish reasons, too. One is
                that if you&apos;re building an accessible user experience,
                different features end up benefiting all users. A really good
                example of this is video captions. For example, if you&apos;re
                adding captions and transcripts to your site for users with
                hearing loss, that can be really handy for someone say on an
                airplane without headphones and they want to watch your video
                and rely on captions. You can also reach a broader user base,
                and then lastly there are some legal issues around this
                accessibility compliance, so that&apos;s another thing to keep
                in mind.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 5: Semantic HTML] </em>Now turning to some code
                examples. The first, and one of the biggest takeaways, is to try
                to use semantic HTML wherever possible. And actually, HTML is
                very accessible by default. Often we get ourselves into trouble
                when we add custom complex styling using using CSS and adding a
                lot of JavaScript to our websites. So, HTML elements like header
                and main contain accessibility information and also convey
                meaning about the content. Then things like buttons and anchor
                links have accessibility information and also some built-in
                functionality like event handlers, styling for hover and focus
                states...things like that. And this semantic HTML is really
                important because a screen reader user, for example, will hear
                the role and name of a button announced when they&apos;re going
                through a website, and they can also navigate by scanning
                through headings or scanning through links. And so it&apos;s
                important to try to avoid use of things like divs and spans and
                always reach for the native semantic HTML when you can. That
                being said, though, if native HTML styling conflicts with your
                brand identity, you can still make custom elements accessible
                using ARIA.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 6: ARIA] </em>ARIA stands for Accessible Rich
                Internet Applications, and it is a spec put out by the W3C for
                adding accessibility information to your markup. That comes in
                the form of HTML attributes. This only affects the accessibility
                tree and not the DOM. And for anyone not familiar, the
                accessibility tree is a browser API pretty similar to the DOM.
                It&apos;s a tree structure, but it only contains accessibility
                content, and that&apos;s actually what screen readers parse
                through to announce the content of a website to a user. So ARIA
                attributes allow you to specify roles, states, and properties. A
                rule would be what the element is or does. For example, a
                button. A state would be related to element life cycle. For
                example, if an input is checked, like an input checkbox is
                checked. And then properties allow you to add any additional
                information. For example, if you have a required form input you
                could add an aria-required attribute. So this code snippet on
                the screen here shows how you might make a custom button using a
                div in JSX. And you&apos;ll notice ARIA attributes for role and
                label, and then also tabindex and a couple event handlers here.
                So it can actually be quite a bit of overhead creating your own
                accessible components, but it definitely is possible.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Demo: ARIA] </em>I also think it&apos;s helpful to see an
                example here, so if I open DevTools – I&apos;m on Canva, which
                is the website i use to create this presentation – and if you
                see on the nav bar here there&apos;s this download button at the
                top. And if we hover over the button you can see some
                accessibility information including a name of Download, a role
                of button, and that it is keyboard-focusable. And these three
                things are really important for screen readers because a screen
                reader will announce the name and role, and it&apos;ll only
                actually be reachable by a user if they can get to it with their
                keyboard, so if it is keyboard-focusable. So if I click that
                element and go to the Accessibility tab in Elements, you can see
                the accessibility tree that I mentioned. So this is what a
                screen reader would traverse and announce to a user, and you can
                also see ARIA attributes and properties, so with this button for
                example, Canva just added an icon to visually indicate that
                it&apos;s a download button, but for anyone who&apos;s not able
                to see that visual cue they would also need to know that
                it&apos;s a download button. So Canva went ahead and added an
                aria-label of download and that way users know that it&apos;s a
                download button.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 7: Keyboard Navigation] </em>On the topic of keyboard
                focus, keyboard navigation is a really big topic in
                accessibility, and the basic premise is that anyone should be
                able to use a website with a keyboard alone. So that means being
                able to tab through and reach any interactive elements, and at
                any given time you should know which element currently has
                focus. And that can be indicated visually with a an outline,
                which is called a focus ring, and that will also be announced to
                a screen reader user. What&apos;s nice is that native HTML
                elements are actually keyboard-focusable by default based on the
                element. So things like buttons and inputs are naturally in the
                tab order, and the order in which you tab through is determined
                by the DOM order. But then again, if you want more control you
                can also specify a tabindex. The code example on this slide
                shows how you can add a tabindex of zero to bring something into
                the tab order, and then conversely you can supply a negative tab
                index to take something out of the tab order. This is a good
                thing to try out on your own if you want to go ahead and tab
                through your own website, or really any website. It can be
                interesting to see what that experience is like. I was actually
                working on a website and trying to tab through, and at a certain
                point it wasn&apos;t obvious which element had current focus. As
                it turned out, I had a mobile menu that was hidden on desktop
                visually so I couldn&apos;t see the mobile menu, but it was
                actually still reachable by keyboard, and so just by tabbing
                through i was able to find that accessibility bug. Another great
                feature to add is keyboard shortcuts. So for example, Twitter
                has some keyboard shortcuts, and if you press the question mark
                key on Twitter&apos;s website it&apos;ll open up a modal with a
                number of keyboard shortcuts. So this is really great for
                keyboard-only users, and it can also be handy really for any
                user who wants to navigate a bit more efficiently. Skip links
                are another great accessibility feature. This just allows you to
                skip past navigation and right to main content.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Demo: Keyboard Navigation] </em>
                And so I&apos;ll show what this looks like in action. I have
                Smashing Magazine&apos;s website open here, and if I start at
                the address bar or if I&apos;ve just loaded up the page and I
                press tab, you can see in the top left corner there&apos;s a
                button &apos;Skip to main content.&apos; And if I press enter
                it&apos;ll bring me right to the main content, and that&apos;s
                really nice because if they didn&apos;t have a skip link I would
                have to tab through all of these items in the nav bar which can
                be really onerous and frustrating if you&apos;re a user who just
                wants to get right to the main content. Also on the topic of
                focus states, if you select an element in DevTools you can
                actually see you can toggle what pseudo classes would look like.
                So you can see that here if I check the :focus pseudo class I
                can see that Smashing Magazine provides an outline – a dotted
                outline – to visually indicate that this current element is in
                focus. So that&apos;s another thing to check out.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 8: Visual Concerns] </em>
                Switching gears a bit to visual concerns – namely color and
                motion – those are some other important things to think about in
                accessibility. Color contrast is actually one of the most common
                problems on websites, and the premise is that any text and its
                background should have a sufficiently high contrast ratio so
                that it is easily perceivable, especially to people with
                different visual impairments. Another thing is that color alone
                shouldn&apos;t convey key information and meaning. So for
                example, if you have a required input field and you put a red
                box around it to show that it&apos;s required, that alone
                wouldn&apos;t be enough, and you&apos;d want to add something
                like a typed indication that it&apos;s required. Reduced motion,
                and tangentially color scheme, is also an interesting
                accessibility aspect. Some users find animation distracting or
                even harmful, and so you can actually add a CSS media query to
                feature detect the OS [Operating System] settings for a user. So
                if someone has set a prefers reduced motion setting on their
                computer, you can hook into that and then adjust your styling
                accordingly. So you might want to provide no animation, or maybe
                just a more subtle animation for those users. And then on a
                similar note, you can feature detect preferred color scheme and
                maybe add a dark mode, which is a bit easier on the eyes.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Demo: Visual Concerns] </em>To show what this looks like in
                DevTools, I&apos;ll go back to Smashing Magazine and open up
                DevTools here, and if we select the Accessibility heading and
                then select its color, the color picker has a contrast ratio
                section. You can see that these check marks for AA and AAA
                conformance – those are standards put together by the Web
                Content Accessibility Guidelines and they&apos;re just standards
                for the contrast ratios that you want to be able to reach. You
                can actually play around with this, and if we make this a
                lighter hue you can see it no longer passes the required
                contrast ratio. Another thing you can do is open up your console
                drawer and open the Rendering tab, and here you can look at a
                few of the things I was just mentioning like prefers color
                scheme and prefers reduced motion. You can also actually emulate
                vision deficiencies, so if i click Protanopia, this is what the
                website might look like for someone with red green
                colorblindness.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 9: Accessibility Tooling] </em>The last thing
                I&apos;ll discuss is accessibility tooling, and there are so
                many great developer tools out there in accessibility, many more
                than I could list on this slide. But just to get you started one
                thing you can do is run a full website audit using something
                like Lighthouse, which I&apos;ll show in a second here. Also you
                can use DevTools. I&apos;ve been demoing in Chrome, but the
                Firefox DevTools are also fantastic. You can also use VS Code
                extensions and browser extensions, and there are linters
                available. And then lastly, component libraries. So if
                you&apos;re using something like Adobe&apos;s React Spectrum to
                style your website, they&apos;ve actually been really thoughtful
                about accessibility, so that&apos;s a good way to get started.
                And even if you&apos;re creating your own custom components,
                component libraries can be a good reference point if you want to
                see how to make something accessible, like for example what an
                accessible modal would look like. So that can be a good thing to
                check out.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Demo: Accessibility Tooling] </em>Just to show you what
                Lighthouse looks like, if I go back here to Smashing Magazine,
                there&apos;s a Lighthouse panel that comes with Chrome DevTools,
                and you can run audits on a number of different dimensions.
                I&apos;ll just generate an accessibility report here, and what
                it does is run a suite of automated tests and gives you an
                accessibility score and a few actionable insights about anything
                you should improve related to your accessibility on your site.
                And so that way you can run these tests and check what are sort
                of the easily fixable features that I can go through on my site.
                And so here you can see Smashing Magazine does quite well on
                this – they&apos;ve been thoughtful about accessibility, but
                they do have a couple pointers here. So for example the color
                contrast is not sufficient on these navbar elements, and
                that&apos;s really helpful because that&apos;s something I
                wouldn&apos;t have been able to pick up on visually, but it
                might be hard for certain users to perceive that. axe DevTools
                is another one you can download. It&apos;s actually what
                Lighthouse uses under the hood and it&apos;s one of the leaders
                in the accessibility tooling space, so that&apos;s another tool
                to keep in mind.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <em>[Slide 10: Learning Resources] </em>If you are interested in
                learning more about accessibility, I&apos;ve listed some
                resources here. There are so many great resources out there if
                you prefer to learn by reading or watching courses or listening
                to podcasts. Meetups are actually another great way to learn. I
                went to a meetup earlier this week and learned a lot about
                screen readers, and that&apos;s a great way to learn and also
                connect with other people who are interested. So if you want
                more resources I&apos;d be glad to send out any more resources,
                or if you have some of your own you&apos;d like to share
                I&apos;d love to hear from you.
              </TranscriptParagraph>
              <TranscriptParagraph>
                So thank you all for joining me today, my contact information is
                listed here if you want to reach out on LinkedIn, GitHub, or via
                email to chat more about accessibility, and at this point I will
                open it up for questions. Hey, Robert, looks like you have a
                question.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <strong>(ROBERT)</strong> Yeah, thank you, Peter. So is web
                accessibility matured to a point where there are industry
                standards or best practices for testing? Because it looked like
                there were a lot of tools and did you just kind of pick and
                choose what works for you or is it done by organization or is
                there a way to kind of make that process more efficient in terms
                of what tools you pick?
              </TranscriptParagraph>
              <TranscriptParagraph>
                <strong>(PETER)</strong> Yeah that&apos;s a really good
                question. So the first piece I guess is around standards, and
                there are guidelines and standards that have been worked on for
                a number of years. So the Web Content Accessibility Guidelines
                you&apos;ll hear referred to as WCAG, and they actually list a
                number of standards that you should follow in terms of
                accessibility patterns to be following on your site. Also WebAIM
                puts out a checklist with things you can go through to see that
                you are capturing common accessibility issues on your site, and
                so that&apos;s a good starting point if you&apos;re thinking
                about standards. And then in terms of testing you can definitely
                start with some of the tools I mentioned like running a
                Lighthouse audit. And then also those automated tools don&apos;t
                cover everything, so you might want to do some manual testing
                like tabbing through your own website. You could even try using
                a screen reader on your own, and I guess the last thing I&apos;d
                mention is that really the best thing to do would be to actually
                test with users. So if you can get your website in the hands of
                people with different disabilities who use different assistive
                technologies, that would certainly be the best way to test out
                your your website. Thanks for the question.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <strong>(ROBERT)</strong> Makes a lot of sense, thank you.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <strong>(PETER)</strong> Abhi?
              </TranscriptParagraph>
              <TranscriptParagraph>
                <strong>(ABHI)</strong> Peter, very interesting talk – thank you
                so much. I was just curious if there is any additional kind of
                considerations you have to think about when talking about mobile
                sites or designing websites for mobile devices?
              </TranscriptParagraph>
              <TranscriptParagraph>
                <strong>(PETER)</strong> sure yeah, mobile is a good question.
                So actually a lot of the same principles still apply – things
                like color contrast will still be important for a mobile user,
                for example. And then there are certain other things to
                consider, things like touch targets – anything like a button or
                a link that is clickable on mobile you want to make sure that is
                sufficiently large and easy to click. The other thing I&apos;d
                say is that if you are responsibly designing your website so
                that it looks good and is coherent and intuitive on different
                viewport sizes, on different device sizes, that actually ends up
                leading to accessible design because certain users might zoom in
                their screen quite a bit and you don&apos;t want your ui to be
                broken when they do that, so that&apos;s a helpful thing. And
                there are also different assistive technologies for mobile. I
                think the screen reader for Android is called TalkBack and then
                VoiceOver is the iOS screen reader, so that&apos;s another thing
                you could check out. Thanks.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <strong>(ABHI)</strong> Great, thank you.
              </TranscriptParagraph>
              <TranscriptParagraph>
                <strong>(AKI)</strong> All right, well if there are no more
                questions, I would like to thank everybody for coming out to
                tonight&apos;s tech talk, and a big thank you to Peter
                Millspaugh. Thanks for coming out, and have a wonderful evening.
              </TranscriptParagraph>
            </Transcript>
            <Spacer size='32px' />
            <Paragraph>
              Thanks for checking out my talk on a11y! The content is meant to
              serve as an introduction to Web Accessibility for frontend
              software engineers.
            </Paragraph>
            <Spacer size='20px' />
            <Paragraph>
              Topics covered include: assistive technologies (e.g. screen
              readers), semantic HTML, ARIA, keyboard navigation, visual
              concerns (e.g. color contrast), and developer tooling for a11y.
            </Paragraph>
          </ContentWrapper>
        </MaxWidthWrapper>
      </Layout>
    </>
  );
};

const ContentWrapper = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    width: 420px;
  }
  @media (min-width: 768px) {
    width: 560px;
  }
  @media (min-width: 992px) {
    width: 700px;
  }
`;

const YouTube = styled.iframe`
  max-width: 100%;

  @media (min-width: 576px) {
    height: 236px;
  }
  @media (min-width: 768px) {
    height: 315px;
  }
  @media (min-width: 992px) {
    height: 394px;
  }
`;

const Transcript = styled.details`
  width: 100%;
  font-family: Ubuntu, sans-serif;
  font-size: 1.25rem;
  color: ${(p) => p.theme.textColor};
`;

const TranscriptSummary = styled.summary`
  font-weight: 600;
  color: ${(p) => p.theme.linkTextColor};

  @media (hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${(p) => p.theme.linkTextColorHover};
    }
  }
`;

const TranscriptParagraph = styled(Paragraph)`
  font-size: 1rem;
  margin-top: 20px;
`;

export default Accessibility;
