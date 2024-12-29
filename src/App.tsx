import styled from '@emotion/styled';

const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 4rem;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-left: 4rem;
  flex: 1;
`;

const ActionItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Hero = styled.div`
  text-align: center;
  padding: 0;
  background: url('/backgorund-top.png') no-repeat top center;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 160px;
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 4rem 0;
  margin-top: -4rem;
`;

const FeatureCard = styled.div`
  background: var(--secondary);
  padding: 2rem;
  border-radius: 2rem;
  text-align: center;
  color: var(--dark-green);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const IconCircle = styled.div`
  width: 120px;
  height: 120px;
  background: var(--light-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`;

const MapSection = styled.div`
  padding: 6rem 0;
  position: relative;
  text-align: right;
`;

const TurkeyMap = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 8rem;
  align-items: center;
  margin-bottom: 8rem;

  img {
    width: 120%;
    height: auto;
    max-width: none;
    margin-left: -10%;
  }
`;

const StatText = styled.div`
  text-align: right;
  color: var(--secondary);
  
  .number {
    font-size: 8rem;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 1.5rem;
    
    .dot {
      color: var(--primary);
    }
  }

  .description {
    font-size: 1.4rem;
    line-height: 1.8;
    
    .highlight {
      color: var(--primary);
    }
  }
`;

const PhotoSection = styled.div`
  background-color: var(--primary);
  padding: 6rem 0;
  margin: 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  .section-title {
    color: var(--secondary);
    font-size: 1.5rem;
    opacity: 0.9;
  }

  .section-heading {
    color: var(--secondary);
    font-size: 5rem;
    margin-bottom: 4rem;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const PhotoCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
`;

const NavLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const MainContent = styled.div`
  background: url('/degrade-yesil-arkaplan.png') no-repeat center;
  background-size: cover;
  padding-top: 4rem;
`;

const SectionTitle = styled.h2`
  font-family: 'SF Pro Display', sans-serif;
  text-align: center;
  color: var(--primary);
  font-size: 1rem;
  margin-bottom: 0.5rem;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const SectionHeading = styled.h1`
  font-family: 'SF Pro Display', sans-serif;
  text-align: center;
  color: var(--secondary);
  font-size: 4rem;
  margin-bottom: 3rem;
  font-weight: bold;
`;

const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;
  position: absolute;
  top: 2rem;
  right: 2rem;

  button {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:first-of-type {
      background: var(--secondary);
      img {
        filter: brightness(0);
      }
    }

    &:last-of-type {
      background: var(--mint);
    }

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const Footer = styled.footer`
  background-color: var(--navy);
  padding: 4rem 0;
`;

const ContactSection = styled.div`
  background-color: var(--navy);
  border-radius: 2rem;
  padding: 3rem;
  margin-bottom: 4rem;

  h2 {
    color: var(--secondary);
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  p {
    color: var(--secondary);
    opacity: 0.8;
    margin-bottom: 2rem;
  }

  .testimonials {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input, textarea {
      width: 100%;
      padding: 1rem;
      border-radius: 0.5rem;
      border: none;
      background: var(--secondary);
      color: var(--navy);
      outline: none;

      &::placeholder {
        color: var(--navy);
        opacity: 0.7;
      }
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }

    button {
      background: var(--mint);
      color: var(--secondary);
      padding: 1rem;
      border: none;
      border-radius: 0.5rem;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

const FooterLogo = styled.div`
  color: var(--mint);
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FooterInput = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 0.5rem;
  margin-top: 1rem;

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: var(--secondary);
    padding: 0.5rem 1rem;
    outline: none;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  button {
    background: var(--mint);
    border: none;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  h3 {
    color: var(--secondary);
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      color: var(--secondary);
      opacity: 0.8;
      margin-bottom: 0.75rem;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--secondary);
  opacity: 0.8;

  .links {
    display: flex;
    gap: 2rem;
  }
`;

const HeroButton = styled.button`
  background-color: var(--primary);
  color: var(--secondary);
  border: none;
  border-radius: 2rem;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0 0.5rem;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const HeaderButton = styled.button`
  background-color: var(--primary);
  color: var(--secondary);
  border: none;
  border-radius: 2rem;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

function App() {
  return (
    <div className="min-h-screen bg-dark-green">
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-6">
        <Container>
          <NavContainer>
            <img src="/logo.png" alt="BGYardım Logo" className="h-12" />
            <MenuItems>
              <NavLink>Projeler</NavLink>
              <NavLink>Biz Kimiz</NavLink>
              <NavLink>Kitap Bağışla</NavLink>
              <NavLink>Burs Al</NavLink>
              <NavLink>Burs Ver</NavLink>
              <NavLink className="text-primary">Ana Sayfa</NavLink>
            </MenuItems>
            <ActionItems>
              <img src="/search-svgrepo-com.svg" alt="Arama" className="h-6 w-6 cursor-pointer" />
              <img src="/person-svgrepo-com.svg" alt="Profil" className="h-6 w-6 cursor-pointer" />
              <HeaderButton>Lorem ipsum dolor sit amet</HeaderButton>
            </ActionItems>
          </NavContainer>
        </Container>
      </nav>

      <Hero>
        <Container>
          <div className="relative z-10">
            <h1 className="text-8xl font-bold mb-6 site-title">BGYardım</h1>
            <div className="flex justify-center gap-4 mb-8">
              <HeroButton>Burs Al / Ver</HeroButton>
              <HeroButton>Kitap Bağışla</HeroButton>
            </div>
            <p className="text-xl mb-3 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua epteur sint occaecat
            </p>
            <p className="text-lg text-gray-300">
              Magna aliqua epteur sint occaecat
            </p>
          </div>
        </Container>
      </Hero>

      <MainContent>
        <Container>
          <SectionTitle>Sample Text</SectionTitle>
          <SectionHeading>Lorem Ipsum</SectionHeading>
          <Features>
            <FeatureCard>
              <IconCircle>
                <img src="/img1.png" alt="Burs Al" />
              </IconCircle>
              <h3 className="text-2xl font-bold">Burs Al</h3>
              <p className="text-gray-600">(Burs Al)</p>
            </FeatureCard>
            <FeatureCard>
              <IconCircle>
                <img src="/img2.png" alt="Burs Ver" />
              </IconCircle>
              <h3 className="text-2xl font-bold">Burs Ver</h3>
              <p className="text-gray-600">(Burs Al)</p>
            </FeatureCard>
            <FeatureCard>
              <IconCircle>
                <img src="/img3.png" alt="Kitap Bağışla" />
              </IconCircle>
              <h3 className="text-2xl font-bold">Kitap Bağışla</h3>
              <p className="text-gray-600">(Kitap Bağışla)</p>
            </FeatureCard>
            <FeatureCard>
              <IconCircle>
                <img src="/logo.png" alt="Biz Kimiz" />
              </IconCircle>
              <h3 className="text-2xl font-bold">Biz Kimiz</h3>
              <p className="text-gray-600">(Biz Kimiz)</p>
            </FeatureCard>
          </Features>

          <SectionTitle>Lorem Ipsum</SectionTitle>
          <MapSection>
            <TurkeyMap>
              <div>
                <img src="/turkiye.png" alt="Türkiye Haritası" />
              </div>
              <StatText>
                <div className="number">15<span className="dot">.</span>672</div>
                <p className="description">
                  Lorem ipsum <span className="highlight">dolor sit amet</span>, consectetur adipiscing elit, sed do <span className="highlight">eiusmod tempor</span> incididunt ut labore et dolore <span className="highlight">magna aliqua epteur</span> sint occaecat
                </p>
              </StatText>
            </TurkeyMap>

            <div className="grid grid-cols-2 gap-16">
              <StatText style={{ textAlign: 'left' }}>
                <div className="number">4<span className="dot">.</span>095</div>
                <p className="description" style={{ textAlign: 'left' }}>
                  Lorem ipsum <span className="highlight">dolor sit amet</span>, consectetur adipiscing elit, sed do <span className="highlight">eiusmod tempor</span> incididunt ut labore et dolore <span className="highlight">magna aliqua epteur</span> sint occaecat
                </p>
              </StatText>
              <div>
                <img src="/istanbul.png" alt="İstanbul Haritası" className="w-[120%] ml-[-10%]" />
              </div>
            </div>
          </MapSection>

          <PhotoSection>
            <Container>
              <NavigationButtons>
                <button>
                  <img src="/left-chevron-svgrepo-com.svg" alt="Önceki" />
                </button>
                <button>
                  <img src="/right-chevron-svgrepo-com.svg" alt="Sonraki" />
                </button>
              </NavigationButtons>
              <SectionTitle className="section-title">Sample Text</SectionTitle>
              <SectionHeading className="section-heading">Lorem Ipsum</SectionHeading>
              <PhotoGrid>
                <PhotoCard>
                  <div className="star-icon">★</div>
                  <h3 className="text-2xl font-bold mb-4">Örnek Fotoğraf</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </PhotoCard>
                <PhotoCard>
                  <div className="star-icon">☆</div>
                  <h3 className="text-2xl font-bold mb-4">Örnek Fotoğraf</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </PhotoCard>
                <PhotoCard>
                  <div className="star-icon">☆</div>
                  <h3 className="text-2xl font-bold mb-4">Örnek Fotoğraf</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </PhotoCard>
                <PhotoCard>
                  <div className="star-icon">☆</div>
                  <h3 className="text-2xl font-bold mb-4">Örnek Fotoğraf</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </PhotoCard>
                <PhotoCard>
                  <div className="star-icon">☆</div>
                  <h3 className="text-2xl font-bold mb-4">Örnek Fotoğraf</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
                </PhotoCard>
              </PhotoGrid>
              <p className="text-center text-secondary mt-12 text-lg max-w-4xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua epteur sint occaecat
              </p>
            </Container>
          </PhotoSection>
        </Container>
      </MainContent>

      <Footer>
        <Container>
          <ContactSection>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <h2>Bize ulaşabilirsiniz!</h2>
                <p>Size yardımcı olmaktan mutluluk duyarız</p>
                <div className="testimonials">
                  <img src="/testimonial1.jpg" alt="Referans 1" className="w-12 h-12 rounded-full" />
                  <img src="/testimonial2.jpg" alt="Referans 2" className="w-12 h-12 rounded-full" />
                  <img src="/testimonial3.jpg" alt="Referans 3" className="w-12 h-12 rounded-full" />
                  <img src="/testimonial4.jpg" alt="Referans 4" className="w-12 h-12 rounded-full" />
                </div>
              </div>
              <div>
                <form>
                  <input type="email" placeholder="Email" />
                  <textarea placeholder="Mesaj" rows={4} />
                  <button type="submit">Mesaj Gönder</button>
                </form>
              </div>
            </div>
          </ContactSection>

          <FooterLogo>BGY Yardım</FooterLogo>
          <p className="text-secondary opacity-80">Şimdi giriş yapın.</p>
          <FooterInput>
            <input type="email" placeholder="Email adresini gir." />
            <button>
              <img src="/right-chevron-svgrepo-com.svg" alt="Gönder" />
            </button>
          </FooterInput>

          <FooterLinks>
            <div>
              <h3>Yardım</h3>
              <ul>
                <li>Yardım Merkezi</li>
                <li>Hesap</li>
                <li>Hakkımızda</li>
                <li>Takip Et</li>
              </ul>
            </div>
            <div>
              <h3>Kategoriler</h3>
              <ul>
                <li>Burs Al</li>
                <li>Burs Ver</li>
                <li>Kitap Bağışla</li>
                <li>Projeler</li>
              </ul>
            </div>
            <div>
              <h3>İletişim</h3>
              <ul>
                <li>xxxx@gmail.com</li>
                <li>+90 XXX XXX XX XX</li>
                <li>Sosyal Medya</li>
                <li>Bize Yazın</li>
              </ul>
            </div>
          </FooterLinks>

          <FooterBottom>
            <p>© 2025 BGY Tüm hakları saklıdır.</p>
            <div className="links">
              <span>Şartlar ve Koşullar</span>
              <span>•</span>
              <span>Gizlilik Politikası</span>
            </div>
          </FooterBottom>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
