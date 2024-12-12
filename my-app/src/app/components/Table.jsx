import { Blocks } from '@builder.io/sdk-react';

export const Table = ({column1, column2, column3, builderBlock}) => {
  console.log('Table - builderBlock', builderBlock.id);
  console.log('Table - column1', column1);
  console.log('Table - column1', column2);

  return (
    <div className='grid grid-cols-3 px-20'>
      <Blocks
        index={1}
        blocks={column1.blocks}
        path={`column1.blocks`}
        parent={builderBlock.id}
      />

      <Blocks
        index={2}
        blocks={column2.blocks}
        path={`column2.blocks`}
        parent={builderBlock.id}
      />

      <Blocks
        index={3}
        blocks={column3.blocks}
        path={`column3.blocks`}
        parent={builderBlock.id}
      />
    </div>
  );
};
