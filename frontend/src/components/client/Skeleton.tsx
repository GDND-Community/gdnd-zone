import type { JSX } from 'solid-js';
import { splitProps } from 'solid-js';

interface SkeletonProps {
  class?: string;
  width?: string | number;
  height?: string | number;
  rounded?: string;
  animation?: boolean;
}

const Skeleton = (props: SkeletonProps): JSX.Element => {
  const [local, rest] = splitProps(props, ['class', 'width', 'height', 'rounded', 'animation']);

  const styles = {
    width: typeof local.width === 'number' ? `${local.width}px` : local.width,
    height: typeof local.height === 'number' ? `${local.height}px` : local.height,
  };

  return (
    <div
      class={`bg-gray-200 dark:bg-gray-700 ${
        local.animation !== false ? 'animate-pulse' : ''
      } ${local.rounded || 'rounded'} ${local.class || ''}`}
      style={styles}
      {...rest}
    />
  );
};

export default Skeleton;