import React from "react";

import { useState } from 'react';
import axios from 'axios'
import Button from '../Button';
import Input from '../Input';
function Content() {
    const [textareaValue, setTextareaValue] = useState('');
    const [data, setData] = useState([])

    const API = "http://localhost:8000/api/predict"

    function removeEmptyLines(text1) {
        const result = text1.replace(/^\s*\n/gm, '');
        return result;
    }

    const handleChangeTextArea = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        if (event.target.value.length === 0) {
            setData([])
        }
        setTextareaValue(removeEmptyLines(event.target.value));
    };
    const fetchDataFromApi = async () => {
        console.log(1)
        const datasend = {
            "domain": textareaValue
        }
        await axios.post(API, datasend, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <>
            <div className='min-h-0 overflow-hidden mb-2'>
                <div className='grid gap-10 mx-36 my-10 justify-items-center  pb-10'>
                    <div className='w-3/5 h-3/5'>
                        <div className=" block w-full h-fit">
                            <Input text={textareaValue} onChange={handleChangeTextArea} ></Input>
                        </div>
                        <div className='mt-5 inline-block '>
                            <Button content={"Phân loại"} onClick={fetchDataFromApi} ></Button>
                        </div>
                    </div>
                    <div className='w-full h-full justify-items-center'>
                        <h2 className="text-3xl ">Kết quả đánh giá</h2>
                        <div class="relative overflow-x-auto mb-5">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            URL
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Length
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Entropy
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Percent number
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Number of Special character
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Result
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {data.domain}
                                        </th>
                                        <td class="px-6 py-4">
                                            {data.domainLength}
                                        </td>
                                        <td class="px-6 py-4">
                                            {data.entropy}
                                        </td>
                                        <td class="px-6 py-4">
                                            {data.percentageDigits}
                                        </td>
                                        <td class="px-6 py-4">
                                            {data.specialChars}
                                        </td>
                                        <td class="px-6 py-4">
                                            {data.result}
                                        </td>
                                    </tr>


                                </tbody>
                            </table>
                        </div>
                        <i>*Entropy là một thước đo mức độ ngẫu nhiên hoặc phức tạp của chuỗi ký tự.</i>
                        <br />
                        <i>*Kết quả dự đoán từ model ngôn ngữ có tính chất kham khảo</i>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content