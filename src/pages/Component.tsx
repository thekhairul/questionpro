import MyComponent from '@/components/MyComponent';
import MyButton from '@/components/ui/MyButton';

function Component() {
  return (
    <div>
      <MyComponent>
        <div className="flex gap-2">
          <MyButton size="lg">Clickable Button</MyButton>
          <MyButton variant="secondary" size="lg" rounded>
            Dumb Button
          </MyButton>
        </div>
      </MyComponent>
    </div>
  );
}

export default Component;
