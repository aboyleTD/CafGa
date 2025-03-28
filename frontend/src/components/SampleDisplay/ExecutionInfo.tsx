interface ExecutionInfoProps {
    executionTime: number;
    nSamplesGenerated: number;
    originalPrediction?: any;
}

const ExecutionInfo = (props:ExecutionInfoProps) => {
    const execution_time = props.executionTime;
    const n_samples_generated = props.nSamplesGenerated;
    return (
        <div className="border-2 rounded-lg border-neutral-600 p-2 w-full h-fit bg-white mt-3">
                {/* <div className="font-bold text-xl">Execution Info</div> */}
                <div className="flex flex-col items-start">
                    <div>Execution Time (sec): {execution_time.toFixed(2)}</div>
                    {n_samples_generated && n_samples_generated > 0 && <div>Number of Samples Generated: {n_samples_generated}</div>}
                </div>
            </div>
    );
}
export default ExecutionInfo