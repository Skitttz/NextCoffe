import React from 'react';

import { cn } from '@/lib/utils';
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const Logo = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn('', className)}
      width="384"
      height="94"
      viewBox="0 0 384 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 59L1 45L69 45V59C69 77.7777 53.7777 93 35 93C16.2223 93 1 77.7777 1 59Z"
        fill="#D9D9D9"
        fill-opacity="0.29"
        stroke="url(#paint0_radial_78_32)"
        stroke-width="2"
      />
      <path
        d="M33.558 62.2711L33.571 62.2826L33.5854 62.2923L36.1563 64.008C36.8621 64.479 37.615 64.8754 38.4027 65.1908L39.1755 65.5002C40.3107 65.9547 41.5075 66.2367 42.7262 66.3368L43.7635 66.422C45.7932 66.5887 47.8324 66.2468 49.6966 65.4272L52.9678 63.989C54.0639 63.5071 55.0834 62.8671 55.9938 62.0894L58.3404 60.085C58.5016 59.9473 58.75 60.0618 58.75 60.2738L58.75 64.98C58.75 78.2642 48.2628 89.1793 34.9892 89.7102C20.9434 90.2721 9.25 79.0371 9.25 64.98V62.677C9.25 60.7776 9.84779 58.9263 10.9587 57.3856L12.3113 55.5095C13.4252 53.9645 14.9828 52.7951 16.7772 52.1564L17.3784 51.9425C18.6542 51.4884 20.012 51.3109 21.3616 51.4217L22.0434 51.4777C23.9667 51.6357 25.7625 52.5033 27.0816 53.9118C27.4632 54.3192 27.7998 54.7665 28.0856 55.246L29.8533 58.2121C30.4947 59.2882 31.2973 60.2596 32.2332 61.0923L33.558 62.2711Z"
        fill="url(#paint1_linear_78_32)"
        stroke="url(#paint2_radial_78_32)"
        stroke-width="0.5"
      />
      <path
        d="M71.9613 59.5C71.1329 59.5 70.4613 60.1716 70.4613 61C70.4613 61.8284 71.1329 62.5 71.9613 62.5V59.5ZM70 47H72.25V44H70V47ZM72.25 59.5H71.9613V62.5H72.25V59.5ZM78.5 53.25C78.5 56.7018 75.7018 59.5 72.25 59.5V62.5C77.3586 62.5 81.5 58.3586 81.5 53.25H78.5ZM72.25 47C75.7018 47 78.5 49.7982 78.5 53.25H81.5C81.5 48.1414 77.3586 44 72.25 44V47Z"
        fill="#544111"
      />
      <path
        d="M68 44.0003C68 37.8248 66.0508 38.5 63 38.5L13.0248 38.9715C11.3223 38.9875 9.89858 37.6815 9.768 35.984V35.984C9.62343 34.1046 11.1094 32.5 12.9943 32.5H55.75C57.2688 32.5 58.5 31.2688 58.5 29.75V29.75C58.5 28.2312 57.2688 27 55.75 27H14.25C11.9028 27 10 25.0972 10 22.75V22.75C10 20.4028 11.9028 18.5 14.25 18.5H48.5H59H80.5"
        stroke="url(#paint3_linear_78_32)"
        stroke-width="2"
      />
      <g filter="url(#filter0_d_78_32)">
        <path
          d="M106.914 86L91.9816 55.5929L91.5823 55.75L92.0614 65.0214V86H82V31H90.0651L104.758 62.5857L105.157 62.4286L104.279 52.7643V31H114.34V86H106.914Z"
          fill="url(#paint4_linear_78_32)"
        />
        <path
          d="M122.004 86V31H150.671V40.4286H132.944V53.55H148.755V62.6643H132.944V76.8857H150.991V86H122.004Z"
          fill="url(#paint5_linear_78_32)"
        />
        <path
          d="M165.958 31L171.627 53.3929H171.947L177.616 31H188.636L180.97 57.2429L189.195 86H177.856L171.947 62.4286H171.627L165.718 86H154.379L162.604 57.2429L154.938 31H165.958Z"
          fill="url(#paint6_linear_78_32)"
        />
        <path
          d="M203.082 40.4286H191.025V31H226V40.4286H213.942V86H203.082V40.4286Z"
          fill="url(#paint7_linear_78_32)"
        />
      </g>
      <g filter="url(#filter1_i_78_32)">
        <path
          d="M236 37H384L373 60.3469L384 81H310.454H236L246 60.3469L236 37Z"
          fill="url(#paint8_linear_78_32)"
        />
      </g>
      <path
        d="M236.379 37.25H383.606L372.774 60.2404L372.72 60.3538L372.779 60.4644L383.584 80.75H310.454H236.399L246.225 60.4559L246.275 60.3533L246.23 60.2485L236.379 37.25Z"
        stroke="#876550"
        stroke-opacity="0.2"
        stroke-width="0.5"
      />
      <path
        d="M275.93 52.528L276.218 50.576C275.727 50.3413 275.204 50.1707 274.65 50.064C274.116 49.936 273.562 49.872 272.986 49.872C271.77 49.872 270.596 50.1067 269.466 50.576C268.335 51.0453 267.322 51.6853 266.426 52.496C265.508 53.328 264.74 54.288 264.122 55.376C263.524 56.464 263.14 57.616 262.97 58.832C262.799 60.048 262.863 61.2 263.162 62.288C263.482 63.376 263.983 64.3147 264.666 65.104C265.348 65.9147 266.18 66.5547 267.162 67.024C268.164 67.4933 269.274 67.728 270.49 67.728C271.279 67.728 272.047 67.632 272.794 67.44C273.562 67.2267 274.308 66.928 275.034 66.544L276.186 68.656C275.247 69.1467 274.276 69.5413 273.274 69.84C272.271 70.1173 271.226 70.256 270.138 70.256C268.559 70.256 267.119 69.9573 265.818 69.36C264.516 68.7627 263.418 67.9413 262.522 66.896C261.626 65.872 260.975 64.6667 260.57 63.28C260.164 61.8933 260.079 60.4107 260.314 58.832C260.527 57.2533 261.028 55.7707 261.818 54.384C262.628 52.976 263.62 51.7493 264.794 50.704C265.967 49.68 267.29 48.8693 268.762 48.272C270.234 47.6533 271.759 47.344 273.338 47.344C274.426 47.344 275.439 47.4827 276.378 47.76C277.316 48.0373 278.18 48.432 278.97 48.944L278.458 52.528H275.93ZM279.845 58.832C280.058 57.2747 280.56 55.8027 281.349 54.416C282.138 53.008 283.13 51.7813 284.325 50.736C285.498 49.6907 286.821 48.8693 288.293 48.272C289.765 47.6533 291.29 47.344 292.869 47.344C294.426 47.344 295.856 47.6533 297.157 48.272C298.48 48.8693 299.589 49.6907 300.485 50.736C301.381 51.7813 302.032 53.008 302.437 54.416C302.864 55.8027 302.97 57.2747 302.757 58.832C302.522 60.4107 302 61.8933 301.189 63.28C300.4 64.6667 299.418 65.872 298.245 66.896C297.05 67.9413 295.706 68.7627 294.213 69.36C292.741 69.9573 291.226 70.256 289.669 70.256C288.09 70.256 286.65 69.9573 285.349 69.36C284.048 68.7627 282.949 67.9413 282.053 66.896C281.157 65.872 280.506 64.6667 280.101 63.28C279.696 61.8933 279.61 60.4107 279.845 58.832ZM282.501 58.832C282.33 60.0693 282.394 61.232 282.693 62.32C283.013 63.3867 283.514 64.3147 284.197 65.104C284.88 65.9147 285.722 66.5547 286.725 67.024C287.728 67.4933 288.837 67.728 290.053 67.728C291.269 67.728 292.442 67.4933 293.573 67.024C294.704 66.5547 295.728 65.9147 296.645 65.104C297.541 64.3147 298.298 63.3867 298.917 62.32C299.536 61.232 299.93 60.0693 300.101 58.832C300.272 57.5947 300.197 56.4427 299.877 55.376C299.578 54.288 299.088 53.3387 298.405 52.528C297.701 51.7173 296.848 51.0773 295.845 50.608C294.864 50.1387 293.765 49.904 292.549 49.904C291.333 49.904 290.16 50.1387 289.029 50.608C287.898 51.0773 286.874 51.7173 285.957 52.528C285.04 53.3387 284.272 54.288 283.653 55.376C283.056 56.4427 282.672 57.5947 282.501 58.832ZM303.753 67.472H305.545L307.977 50.128H306.185L306.537 47.6H322.121L321.417 52.528H318.889L319.241 50.128H310.633L309.609 57.456H319.497L319.113 59.984H309.225L308.201 67.472H311.497L311.145 70H303.401L303.753 67.472ZM321.566 67.472H323.358L325.79 50.128H323.998L324.35 47.6H339.934L339.23 52.528H336.702L337.054 50.128H328.446L327.422 57.456H337.31L336.926 59.984H327.038L326.014 67.472H329.31L328.958 70H321.214L321.566 67.472ZM339.378 67.472H341.17L343.602 50.128H341.81L342.162 47.6H357.746L357.042 52.528H354.514L354.866 50.128H346.258L345.234 57.456H355.122L354.738 59.984H344.85L343.826 67.472H352.882L353.202 65.072H355.73L355.058 70H339.026L339.378 67.472Z"
        fill="url(#paint9_linear_78_32)"
      />
      <path
        d="M114.5 86L108 69.5L100.25 53L86 20L76 12L79.5 20L76 23.5L114.5 86Z"
        fill="url(#paint10_linear_78_32)"
      />
      <defs>
        <filter
          id="filter0_d_78_32"
          x="80"
          y="30"
          width="148"
          height="59"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_78_32"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_78_32"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_i_78_32"
          x="236"
          y="37"
          width="148"
          height="46"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_78_32"
          />
        </filter>
        <radialGradient
          id="paint0_radial_78_32"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(20 60.5) rotate(22.4569) scale(40.5771 28.9836)"
        >
          <stop stop-color="#867C62" />
          <stop offset="1" stop-color="#544111" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_78_32"
          x1="10.2538"
          y1="60.6385"
          x2="52.1607"
          y2="77.8906"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0139338" stop-color="#613F24" />
          <stop offset="1" stop-color="#473121" />
        </linearGradient>
        <radialGradient
          id="paint2_radial_78_32"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(27.7405 66.894) rotate(-22.9127) scale(30.451 22.62)"
        >
          <stop stop-color="#644E16" />
          <stop offset="1" stop-color="#544111" />
        </radialGradient>
        <linearGradient
          id="paint3_linear_78_32"
          x1="39.5"
          y1="2.00787e-06"
          x2="39.5"
          y2="44"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C79067" />
          <stop offset="1" stop-color="#613516" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_78_32"
          x1="153.029"
          y1="28.2992"
          x2="153.029"
          y2="83.5447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BB9980" />
          <stop offset="1" stop-color="#73503D" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_78_32"
          x1="153.029"
          y1="28.2992"
          x2="153.029"
          y2="83.5447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BB9980" />
          <stop offset="1" stop-color="#73503D" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_78_32"
          x1="153.029"
          y1="28.2992"
          x2="153.029"
          y2="83.5447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BB9980" />
          <stop offset="1" stop-color="#73503D" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_78_32"
          x1="153.029"
          y1="28.2992"
          x2="153.029"
          y2="83.5447"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BB9980" />
          <stop offset="1" stop-color="#73503D" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_78_32"
          x1="206.945"
          y1="31.3557"
          x2="412.147"
          y2="31.3557"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#ECDBD0" />
          <stop offset="1" stop-color="#E2D9D3" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_78_32"
          x1="308.454"
          y1="5.52941"
          x2="304.592"
          y2="87.2726"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E0C1B0" />
          <stop offset="1" stop-color="#3D1D06" />
          <stop offset="1" stop-color="#3D1D06" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_78_32"
          x1="80.1463"
          y1="18.8"
          x2="90.5997"
          y2="37.2271"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#9D6B46" />
          <stop offset="1" stop-color="#B49279" />
        </linearGradient>
      </defs>
    </svg>
  ),
);

Logo.displayName = 'Logo';
export default Logo;
