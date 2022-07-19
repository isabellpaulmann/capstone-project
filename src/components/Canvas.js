import {forwardRef, useEffect, useRef, useImperativeHandle} from 'react';
import styled, {css} from 'styled-components';

const StyledCanvasWrapper = styled.div`
  position: relative;
  width: 236px;
  margin: 0 -3px;
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 0 0;
  touch-action: none;
  ${props => css`
    transform: scale(${props.scale});
    width: ${100 / props.scale}%;
    height: ${100 / props.scale}%;
  `};
`;

function getPointer(event, el, dpr) {
  const {top, left} = el.getBoundingClientRect();
  const scrollY = window.scrollY;
  const x = ((event.touches && event.touches[0].pageX) ?? event.pageX) - left;
  const y = ((event.touches && event.touches[0].pageY) ?? event.pageY) - top - scrollY;
  return {x: x * dpr, y: y * dpr};
}

const Canvas = forwardRef(({image, lineWidth, color, dpr = 2}, outerRef) => {
  const ref = useRef(null);
  const wrapperRef = useRef(null);
  const contextRef = useRef(null);
  const imageRef = useRef(null);
  const configRef = useRef({
    color,
    lineWidth,
    image,
    dpr,
    isActive: false,
  });
  const mouseRef = useRef({x: 0, y: 0, down: false});
  const api = useRef({
    clear() {
      const context = contextRef.current;
      context.clearRect(0, 0, ref.current.width, ref.current.height);
      context.drawImage(imageRef.current, 0, 0, ref.current.width, ref.current.height);
    },
    download() {
      const dataUrl = ref.current.toDataURL();
      const link = document.createElement('a');
      link.download = 'wallpaper.png';
      link.href = dataUrl;
      link.click();
    },
    set(prop, value) {
      configRef.current[prop] = value;
    },
    setFilter(filter) {
      const context = contextRef.current;
      context.filter = filter;
      context.clearRect(0, 0, ref.current.width, ref.current.height);
      context.drawImage(imageRef.current, 0, 0, ref.current.width, ref.current.height);
    },
    clearFilter() {
      const context = contextRef.current;
      context.filter = 'none';
    },
    config: configRef.current,
  });
  useImperativeHandle(outerRef, () => api.current);

  useEffect(() => {
    const width = wrapperRef.current.offsetWidth;
    const canvas = ref.current;
    const context = ref.current.getContext('2d');
    contextRef.current = context;

    function handleLoad() {
      const aspect = imageRef.current.height / imageRef.current.width;
      wrapperRef.current.style.height = `${width * aspect}px`;
      canvas.width = width * configRef.current.dpr;
      canvas.height = canvas.width * aspect;
      context.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = configRef.current.image;
    img.addEventListener('load', handleLoad);
    imageRef.current = img;

    return () => {
      img.removeEventListener('load', handleLoad);
      context.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, []);

  function handleDown(event) {
    const {x, y} = getPointer(event, ref.current, configRef.current.dpr);
    mouseRef.current.x = x;
    mouseRef.current.y = y;
    mouseRef.current.down = true;
    const context = ref.current.getContext('2d');
    context.beginPath();
  }

  function handleUp() {
    mouseRef.current.down = false;
  }

  function handleMove(event) {
    if (mouseRef.current.down && configRef.current.isActive) {
      const {x, y} = getPointer(event, ref.current, configRef.current.dpr);
      const context = contextRef.current;
      context.strokeStyle = configRef.current.color;
      context.lineWidth = configRef.current.lineWidth * configRef.current.dpr;
      context.lineCap = 'round';
      context.moveTo(mouseRef.current.x, mouseRef.current.y);
      context.lineTo(x, y);
      context.stroke();
      mouseRef.current.x = x;
      mouseRef.current.y = y;
    }
  }

  return (
    <StyledCanvasWrapper ref={wrapperRef}>
      <StyledCanvas
        ref={ref}
        scale={1 / dpr}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        onMouseLeave={handleUp}
        onMouseMove={handleMove}
        onTouchStart={handleDown}
        onTouchEnd={handleUp}
        onTouchMove={handleMove}
      />
    </StyledCanvasWrapper>
  );
});
Canvas.displayName = Canvas;

export default Canvas;
