import React from 'react';
import appConfig from 'appConfig';

let iconLoader = null;
if (__DEVELOPMENT__) {
  iconLoader = name => function IconSvg() {
    const logo = require(`./svg/${name}.svg`).default;
    const href = __DEVELOPMENT__ ? `#${logo.id}` : logo.url && logo.url.replace(appConfig.assets.cdn, '');
    if (__SERVER__) {
      const regex = /<symbol[^>]*>((.|\s)+?)<\/symbol>/;
      const _svg = logo.content.replace(regex, (match, ...p) => {
        return `${p[0]}`;
      });
      return (
        <svg viewBox={logo.viewBox} className="icon shape-codepen"
             dangerouslySetInnerHTML={{ __html: `${_svg}` }}
        />
      );
    }
    return (
      <svg viewBox={logo.viewBox} className="icon shape-codepen"
           dangerouslySetInnerHTML={{ __html: "<use xlink:href='" + href + "'></use>" }}
      />
    );
  };
} else {
  iconLoader = (name) => {
    return class IconSvg extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          logo: null
        };

        this.loadIcon(name);
      }

      loadIcon = async (name) => {
        try {
          const svg = await import(`./svg/${name}.svg`);
          this.setState({ logo: svg.default });
        } catch(e) {
          console.log(`SVG load error: ${e} \n stack trace is ${e.stack}`);
        }
      };

      render() {
        const { logo } = this.state;
        if (logo) {
          const href = __DEVELOPMENT__ ?
            `#${logo.id}` :
            logo.url && logo.url.replace(appConfig.assets.cdn, '');

          if (__SERVER__) {
            const regex = /<symbol[^>]*>((.|\s)+?)<\/symbol>/;
            const _svg = logo.content.replace(regex, (match, ...p) => {
              return `${p[0]}`;
            });
            return (
              <svg viewBox={logo.viewBox} className="icon shape-codepen"
                   dangerouslySetInnerHTML={{
                     __html: `${_svg}`
                   }}
              />
            );
          }

          return (
            <svg viewBox={logo.viewBox} className="icon shape-codepen"
                 dangerouslySetInnerHTML={{ __html: "<use xlink:href='" + href + "'></use>" }}
            />
          );
        } else {
          return null;
        }
      }
    };
  };
}

export const  ProfileIcon = iconLoader('ProfileIcon');
