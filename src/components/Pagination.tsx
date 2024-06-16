
type Props = {
    page: number;
    onPageChange:(arg:number)=>void;
};
const Pagination: FC<Props>=({
page,
onPageChange,
})=> {

    return (
      <div className="flex justify-between items-center p-5 ">
            <div className='bg-amber-500 p-3 rounded-lg cursor-pointer hover:bg-amber-400 ' onClick={() => onPageChange(1)}>Got To The Frist Page</div>
            <div className='flex justify-center items-center gap-3'>
                <div className='bg-amber-500 p-3 rounded-lg cursor-pointer hover:bg-amber-400 ' onClick={() => onPageChange(page - 1)}>Previous</div>
                <div className='bg-amber-500 p-3 rounded-lg cursor-pointer hover:bg-amber-400 ' onClick={() => onPageChange(page + 1)}>Next</div>
            </div>
      </div>
    );
}
export default Pagination