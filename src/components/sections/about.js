import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .highlight {
    color: var(--green);
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Next.js | React.js',
    'TypeScript',
    'Tailwind',
    'React Native',
    'Node.js',
    'AWS',
    'SQL',
    'GraphQL',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I'm a Product-Minded Software Engineer who enjoys building products that are
              intuitive, performant, and genuinely useful. I focus on writing clean, maintainable
              code and delivering solutions that balance technical excellence with great user
              experience.
            </p>
            <p>
              I care about clarity, communication, and collaboration, working best in teams that
              value transparency, curiosity, and honesty.
            </p>

            <p>
              Over the past few years, I’ve contributed to production grade web platforms and large
              scale applications using{' '}
              <span className="highlight">React, Next.js, TypeScript,</span> and{' '}
              <span className="highlight">Node.js</span>, while also exploring mobile development
              with <span className="highlight">React Native</span> and cloud integrations through{' '}
              <span className="highlight">AWS and Docker</span>. My work spans from building dynamic
              CMS-driven systems to optimising performance across multi-brand environments.
            </p>

            <p>
              Before moving into engineering full-time, I spent several years in recruitment
              specialising in software engineering roles. That background gives me a strong
              understanding of business requirements, stakeholder communication, and how technical
              decisions impact real people and organisations, a perspective I bring into every
              product I build.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
