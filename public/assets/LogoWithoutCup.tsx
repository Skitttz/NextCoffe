import React from 'react';

import { cn } from '@/lib/utils';
export interface IconProps extends React.SVGProps<SVGSVGElement> {}

const LogoWithoutCup = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      {...props}
      className={cn('', className)}
      width="240"
      height="60"
      viewBox="0 0 384 94"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_102_76)">
        <path
          d="M30.914 86L15.9816 55.5929L15.5823 55.75L16.0614 65.0214V86H6V31H14.0651L28.758 62.5857L29.1573 62.4286L28.2789 52.7643V31H38.3403V86H30.914Z"
          fill="url(#paint0_linear_102_76)"
        />
        <path
          d="M46.0043 86V31H74.6715V40.4286H56.9442V53.55H72.755V62.6643H56.9442V76.8857H74.9909V86H46.0043Z"
          fill="url(#paint1_linear_102_76)"
        />
        <path
          d="M89.9576 31L95.6272 53.3929H95.9466L101.616 31H112.636L104.97 57.2429L113.195 86H101.856L95.9466 62.4286H95.6272L89.7181 86H78.379L86.6038 57.2429L78.938 31H89.9576Z"
          fill="url(#paint2_linear_102_76)"
        />
        <path
          d="M127.082 40.4286H115.025V31H150V40.4286H137.942V86H127.082V40.4286Z"
          fill="url(#paint3_linear_102_76)"
        />
      </g>
      <g filter="url(#filter1_i_102_76)">
        <path
          d="M160 37H308L297 60.3469L308 81H234.454H160L170 60.3469L160 37Z"
          fill="url(#paint4_linear_102_76)"
        />
      </g>
      <path
        d="M160.379 37.25H307.606L296.774 60.2404L296.72 60.3538L296.779 60.4644L307.584 80.75H234.454H160.399L170.225 60.4559L170.275 60.3533L170.23 60.2485L160.379 37.25Z"
        stroke="#876550"
        strokeOpacity="0.2"
        strokeWidth="0.5"
      />
      <path
        d="M199.93 52.528L200.218 50.576C199.727 50.3413 199.204 50.1707 198.65 50.064C198.116 49.936 197.562 49.872 196.986 49.872C195.77 49.872 194.596 50.1067 193.466 50.576C192.335 51.0453 191.322 51.6853 190.426 52.496C189.508 53.328 188.74 54.288 188.122 55.376C187.524 56.464 187.14 57.616 186.97 58.832C186.799 60.048 186.863 61.2 187.162 62.288C187.482 63.376 187.983 64.3147 188.666 65.104C189.348 65.9147 190.18 66.5547 191.162 67.024C192.164 67.4933 193.274 67.728 194.49 67.728C195.279 67.728 196.047 67.632 196.794 67.44C197.562 67.2267 198.308 66.928 199.034 66.544L200.186 68.656C199.247 69.1467 198.276 69.5413 197.274 69.84C196.271 70.1173 195.226 70.256 194.138 70.256C192.559 70.256 191.119 69.9573 189.818 69.36C188.516 68.7627 187.418 67.9413 186.522 66.896C185.626 65.872 184.975 64.6667 184.57 63.28C184.164 61.8933 184.079 60.4107 184.314 58.832C184.527 57.2533 185.028 55.7707 185.818 54.384C186.628 52.976 187.62 51.7493 188.794 50.704C189.967 49.68 191.29 48.8693 192.762 48.272C194.234 47.6533 195.759 47.344 197.338 47.344C198.426 47.344 199.439 47.4827 200.378 47.76C201.316 48.0373 202.18 48.432 202.97 48.944L202.458 52.528H199.93ZM203.845 58.832C204.058 57.2747 204.56 55.8027 205.349 54.416C206.138 53.008 207.13 51.7813 208.325 50.736C209.498 49.6907 210.821 48.8693 212.293 48.272C213.765 47.6533 215.29 47.344 216.869 47.344C218.426 47.344 219.856 47.6533 221.157 48.272C222.48 48.8693 223.589 49.6907 224.485 50.736C225.381 51.7813 226.032 53.008 226.437 54.416C226.864 55.8027 226.97 57.2747 226.757 58.832C226.522 60.4107 226 61.8933 225.189 63.28C224.4 64.6667 223.418 65.872 222.245 66.896C221.05 67.9413 219.706 68.7627 218.213 69.36C216.741 69.9573 215.226 70.256 213.669 70.256C212.09 70.256 210.65 69.9573 209.349 69.36C208.048 68.7627 206.949 67.9413 206.053 66.896C205.157 65.872 204.506 64.6667 204.101 63.28C203.696 61.8933 203.61 60.4107 203.845 58.832ZM206.501 58.832C206.33 60.0693 206.394 61.232 206.693 62.32C207.013 63.3867 207.514 64.3147 208.197 65.104C208.88 65.9147 209.722 66.5547 210.725 67.024C211.728 67.4933 212.837 67.728 214.053 67.728C215.269 67.728 216.442 67.4933 217.573 67.024C218.704 66.5547 219.728 65.9147 220.645 65.104C221.541 64.3147 222.298 63.3867 222.917 62.32C223.536 61.232 223.93 60.0693 224.101 58.832C224.272 57.5947 224.197 56.4427 223.877 55.376C223.578 54.288 223.088 53.3387 222.405 52.528C221.701 51.7173 220.848 51.0773 219.845 50.608C218.864 50.1387 217.765 49.904 216.549 49.904C215.333 49.904 214.16 50.1387 213.029 50.608C211.898 51.0773 210.874 51.7173 209.957 52.528C209.04 53.3387 208.272 54.288 207.653 55.376C207.056 56.4427 206.672 57.5947 206.501 58.832ZM227.753 67.472H229.545L231.977 50.128H230.185L230.537 47.6H246.121L245.417 52.528H242.889L243.241 50.128H234.633L233.609 57.456H243.497L243.113 59.984H233.225L232.201 67.472H235.497L235.145 70H227.401L227.753 67.472ZM245.566 67.472H247.358L249.79 50.128H247.998L248.35 47.6H263.934L263.23 52.528H260.702L261.054 50.128H252.446L251.422 57.456H261.31L260.926 59.984H251.038L250.014 67.472H253.31L252.958 70H245.214L245.566 67.472ZM263.378 67.472H265.17L267.602 50.128H265.81L266.162 47.6H281.746L281.042 52.528H278.514L278.866 50.128H270.258L269.234 57.456H279.122L278.738 59.984H268.85L267.826 67.472H276.882L277.202 65.072H279.73L279.058 70H263.026L263.378 67.472Z"
        fill="url(#paint5_linear_102_76)"
      />
      <path
        d="M38.5 86L32 69.5L24.25 53L10 20L0 12L3.5 20L0 23.5L38.5 86Z"
        fill="url(#paint6_linear_102_76)"
      />
      <defs>
        <filter
          height="59"
          id="filter0_d_102_76"
          width="148"
          x="4"
          y="30"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood result="BackgroundImageFix" floodOpacity="0" />
          <feGaussianBlur stdDeviation="1" />
          <feBlend
            result="effect1_dropShadow_102_76"
            in2="BackgroundImageFix"
          />
          <feBlend
            result="shape"
            in="SourceGraphic"
            in2="effect1_dropShadow_102_76"
          />
        </filter>
        <filter
          height="46"
          id="filter1_i_102_76"
          width="148"
          x="160"
          y="37"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood result="BackgroundImageFix" floodOpacity="0" />
          <feBlend result="shape" in="SourceGraphic" in2="BackgroundImageFix" />
          <feBlend result="effect1_innerShadow_102_76" in2="shape" />
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        <linearGradient
          id="paint0_linear_102_76"
          gradientUnits="userSpaceOnUse"
          x1="77.029"
          x2="77.029"
          y1="28.2992"
          y2="83.5447"
        >
          <stop stopColor="#BB9980" />
          <stop offset="1" stopColor="#73503D" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_102_76"
          gradientUnits="userSpaceOnUse"
          x1="77.029"
          x2="77.029"
          y1="28.2992"
          y2="83.5447"
        >
          <stop stopColor="#BB9980" />
          <stop offset="1" stopColor="#73503D" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_102_76"
          gradientUnits="userSpaceOnUse"
          x1="77.029"
          x2="77.029"
          y1="28.2992"
          y2="83.5447"
        >
          <stop stopColor="#BB9980" />
          <stop offset="1" stopColor="#73503D" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_102_76"
          gradientUnits="userSpaceOnUse"
          x1="77.029"
          x2="77.029"
          y1="28.2992"
          y2="83.5447"
        >
          <stop stopColor="#BB9980" />
          <stop offset="1" stopColor="#73503D" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_102_76"
          gradientUnits="userSpaceOnUse"
          x1="130.945"
          x2="336.147"
          y1="31.3557"
          y2="31.3557"
        >
          <stop stopColor="#ECDBD0" />
          <stop offset="1" stopColor="#E2D9D3" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_102_76"
          gradientUnits="userSpaceOnUse"
          x1="232.454"
          x2="228.592"
          y1="5.52941"
          y2="87.2726"
        >
          <stop stopColor="#E0C1B0" />
          <stop offset="1" stopColor="#3D1D06" />
          <stop offset="1" stopColor="#3D1D06" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_102_76"
          gradientUnits="userSpaceOnUse"
          x1="4.14634"
          x2="14.5997"
          y1="18.8"
          y2="37.2271"
        >
          <stop stopColor="#9D6B46" />
          <stop offset="1" stopColor="#B49279" />
        </linearGradient>
      </defs>
    </svg>
  ),
);

LogoWithoutCup.displayName = 'LogoWithoutCup';
export default LogoWithoutCup;
