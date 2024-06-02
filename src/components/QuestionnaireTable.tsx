"use client";
import { questionnaireAtom } from "@/app/data/questionnaireStore";
import { ReportMetaProps } from "@/types/ReportMeta";
import { Input } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import TextArea from "antd/es/input/TextArea";
import { useAtom } from "jotai";
import React, { useEffect } from "react";

const QuestionnaireTable = ({ data }: ReportMetaProps) => {
  const [result, setResult] = useAtom(questionnaireAtom);

  const handleSingleChoiceChange = (questionKey: string, option: any) => {
    setResult((prev) => ({ ...prev, [questionKey]: option }));
  };

  const handleMultiChoiceChange = (questionKey: string, option: any) => {
    setResult((prev) => {
      const currentValues = (prev as Record<string, any>)[questionKey] || [];
      const newValues = currentValues.includes(option)
        ? currentValues.filter((value: string) => value !== option)
        : [...currentValues, option];
      return { ...prev, [questionKey]: newValues };
    });
  };

  const handleInputChange = (questionKey: string, value: string) => {
    setResult((prev) => ({ ...prev, [questionKey]: value }));
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "200px",
      }}
    >
      <table style={{ width: "100%", height: "90%" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "#E6A2A7",
              color: "#fff",
            }}
          >
            <th>보호자 성함</th>
            <th>동물이름</th>
            <th>품종</th>
            <th>성별</th>
            <th>중성화 유무</th>
            <th>
              출산유무 <br />
              (암컷만 해당)
            </th>
          </tr>
          <tr
            style={{
              backgroundColor: "#F9EDED",
              color: "#46162F",
              borderBottom: "3px solid #E6A2A7",
            }}
          >
            <th>{data?.parentName}</th>
            <th>{data?.name}</th>
            <th>{data?.breed}</th>
            <th>{data?.gender}</th>
            <th>{data?.isNeutered ? "예" : "아니오"}</th>
            <th>{data?.hasGivenBirth ? "예" : "아니오"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>건강검진 해본적이 있나요?</td>
            {[
              "없음",
              "최근 6개월 이내",
              "최근 1-2년 이내",
              "2년 이상 경과",
            ].map((option, index) => (
              <td key={index}>
                <Checkbox
                  checked={result.healthCheckCycle === option}
                  onChange={() =>
                    handleSingleChoiceChange("healthCheckCycle", option)
                  }
                >
                  {option}
                </Checkbox>
              </td>
            ))}
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>진단된 병명이 있나요?</td>
            <td>
              <Checkbox
                checked={result.hasDiagnosedDiseases === false}
                onChange={() =>
                  handleSingleChoiceChange("hasDiagnosedDiseases", false)
                }
              >
                없음
              </Checkbox>
            </td>
            <td colSpan={4}>
              <Checkbox
                checked={result.hasDiagnosedDiseases === true}
                onChange={() =>
                  handleSingleChoiceChange("hasDiagnosedDiseases", true)
                }
              >
                있음
              </Checkbox>
              <span>
                (진단명:
                <Input
                  size="large"
                  variant="borderless"
                  style={{ textAlign: "center", width: "30%" }}
                  value={result.diagnosedDiseasesName}
                  onChange={(e) =>
                    handleInputChange("diagnosedDiseasesName", e.target.value)
                  }
                />
                ) <br />
                언제 진단 되었나요? (
                <Input
                  size="large"
                  variant="borderless"
                  style={{ textAlign: "center", width: "15%" }}
                  value={result.diagnosedDiseasesStartDay}
                  onChange={(e) =>
                    handleInputChange(
                      "diagnosedDiseasesStartDay",
                      e.target.value
                    )
                  }
                />
                ) 관리중인가요? (
                <Input
                  size="large"
                  variant="borderless"
                  style={{ textAlign: "center", width: "15%" }}
                  value={result.isTakingCareDiagnosedDiseases}
                  onChange={(e) =>
                    handleInputChange(
                      "isTakingCareDiagnosedDiseases",
                      e.target.value
                    )
                  }
                />
                )
              </span>
            </td>
          </tr>
          <tr>
            <td>복용중인 처방약이 있나요?</td>
            <td>
              <Checkbox
                checked={result.isMedicationTaken === false}
                onChange={() =>
                  handleSingleChoiceChange("isMedicationTaken", false)
                }
              >
                없음
              </Checkbox>
            </td>
            <td colSpan={4}>
              <Checkbox
                checked={result.isMedicationTaken === true}
                onChange={() =>
                  handleSingleChoiceChange("isMedicationTaken", true)
                }
              >
                있음
              </Checkbox>
              <span>
                (
                <Input
                  size="large"
                  variant="borderless"
                  style={{ textAlign: "center", width: "30%" }}
                  value={result.medicationTakenDetail}
                  onChange={(e) =>
                    handleInputChange("medicationTakenDetail", e.target.value)
                  }
                />
                )
              </span>
            </td>
          </tr>
          <tr>
            <td>수술이력이 있나요?</td>
            <td>
              <Checkbox
                checked={result.hasMedicalHistory === false}
                onChange={() =>
                  handleSingleChoiceChange("hasMedicalHistory", false)
                }
              >
                없음
              </Checkbox>
            </td>
            <td colSpan={4}>
              <Checkbox
                checked={result.hasMedicalHistory === true}
                onChange={() =>
                  handleSingleChoiceChange("hasMedicalHistory", true)
                }
              >
                있음
              </Checkbox>
              (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
                value={result.medicalHistoryDetail}
                onChange={(e) =>
                  handleInputChange("medicalHistoryDetail", e.target.value)
                }
              />
              )
            </td>
          </tr>

          <tr>
            <td>주사나 약 부작용이 있나요?</td>
            <td>
              <Checkbox
                checked={result.hasMedicationSideEffects === false}
                onChange={() =>
                  handleSingleChoiceChange("hasMedicationSideEffects", false)
                }
              >
                없음
              </Checkbox>
            </td>
            <td colSpan={4}>
              <Checkbox
                checked={result.hasMedicationSideEffects === true}
                onChange={() =>
                  handleSingleChoiceChange("hasMedicationSideEffects", true)
                }
              >
                있음
              </Checkbox>
              (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
                value={result.medicationSideEffectsDetail}
                onChange={(e) =>
                  handleInputChange(
                    "medicationSideEffectsDetail",
                    e.target.value
                  )
                }
              />
              )
            </td>
          </tr>

          <tr>
            <td>동거중인 다른 동물이 있나요?</td>
            <td>
              <Checkbox
                checked={result.hasOtherPets === false}
                onChange={() => handleSingleChoiceChange("hasOtherPets", false)}
              >
                없음
              </Checkbox>
            </td>
            <td colSpan={4}>
              <Checkbox
                checked={result.hasOtherPets === true}
                onChange={() => handleSingleChoiceChange("hasOtherPets", true)}
              >
                있음
              </Checkbox>
              (개 수:
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "15%" }}
                value={result.numberOfDogs}
                onChange={(e) =>
                  handleInputChange("numberOfDogs", e.target.value)
                }
              />
              고양이 수:
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "15%" }}
                value={result.numberOfCats}
                onChange={(e) =>
                  handleInputChange("numberOfCats", e.target.value)
                }
              />
              )
            </td>
          </tr>

          <tr>
            <td>
              호흡기 증상이 있나요? <br />
              (복수 선택 가능)
            </td>
            {["없음", "재채기", "맑은콧물", "농성콧물", "기침"].map(
              (option, index) => (
                <td key={index}>
                  <Checkbox
                    checked={result.respiratorySymptoms?.includes(option)}
                    onChange={() =>
                      handleMultiChoiceChange("respiratorySymptoms", option)
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              )
            )}
          </tr>

          <tr>
            <td>산책은 얼마나 하나요?</td>
            <td colSpan={5}>
              산책횟수 1주일에 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "10%" }}
                value={result.frequencyOfWalksPerWeek}
                onChange={(e) =>
                  handleInputChange("frequencyOfWalksPerWeek", e.target.value)
                }
              />
              )번 산책시간 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "10%" }}
                value={result.walkingHour}
                onChange={(e) =>
                  handleInputChange("walkingHour", e.target.value)
                }
              />
              )
            </td>
          </tr>
          <tr>
            <td rowSpan={3}>예방접종을 하고 있나요?</td>
            <td>예방접종주사</td>
            {["한적없음", "어렸을 때만", "간혹", "매년"].map(
              (option, index) => (
                <td key={index}>
                  <Checkbox
                    checked={result.vaccinationInjection === option}
                    onChange={() =>
                      handleSingleChoiceChange("vaccinationInjection", option)
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              )
            )}
          </tr>
          <tr>
            <td>심장사상충</td>
            {["한적없음", "간혹", "여름에만", "매달"].map((option, index) => (
              <td key={index}>
                <Checkbox
                  checked={result.heartwormVaccinationInjection === option}
                  onChange={() =>
                    handleSingleChoiceChange(
                      "heartwormVaccinationInjection",
                      option
                    )
                  }
                >
                  {option}
                </Checkbox>
              </td>
            ))}
          </tr>
          <tr
            style={{
              borderBottom: "3px solid #E6A2A7",
            }}
          >
            <td>외부기생충</td>
            {["한적없음", "간혹", "여름에만", "매달"].map((option, index) => (
              <td key={index}>
                <Checkbox
                  checked={
                    result.ExternalParasitesVaccinationInjection === option
                  }
                  onChange={() =>
                    handleSingleChoiceChange(
                      "ExternalParasitesVaccinationInjection",
                      option
                    )
                  }
                >
                  {option}
                </Checkbox>
              </td>
            ))}
          </tr>
          <tr>
            <td rowSpan={2}>물은 어느정도 마시나요?</td>
            {[
              "잘 안 마시는 편",
              "잘 마시는 편",
              "많이 마시는 편",
              "강제로 추가음수중",
              "피하수액중",
            ].map((option, index) => (
              <td key={index}>
                <Checkbox
                  checked={result.drinkingHabit === option}
                  onChange={() =>
                    handleSingleChoiceChange("drinkingHabit", option)
                  }
                >
                  {option}
                </Checkbox>
              </td>
            ))}
          </tr>
          <tr>
            <td colSpan={5}>
              대략 하루에 종이컵 기준 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "10%" }}
                value={result.cupsPerDay}
                onChange={(e) =>
                  handleInputChange("cupsPerDay", e.target.value)
                }
              />
              )컵
            </td>
          </tr>
          <tr>
            <td>식욕은 어떤가요?</td>
            {["원래 입이 짧음", "보통", "식탐 있는 편"].map((option, index) => (
              <td key={index}>
                <Checkbox
                  checked={result.appetiteLevel === option}
                  onChange={() =>
                    handleSingleChoiceChange("appetiteLevel", option)
                  }
                >
                  {option}
                </Checkbox>
              </td>
            ))}
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>식욕의 변화가 있나요?</td>
            {["변화없음", "최근 줄었음", "최근 늘었음"].map((option, index) => (
              <td key={index}>
                <Checkbox
                  checked={result.appetiteChange === option}
                  onChange={() =>
                    handleSingleChoiceChange("appetiteChange", option)
                  }
                >
                  {option}
                </Checkbox>
              </td>
            ))}
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td rowSpan={3}>사료 종류/급여량을 알려주세요</td>
            {["건식", "습식", "반습식", "화식", "생식"].map((option, index) => (
              <td key={index}>
                <Checkbox
                  checked={result.foodType === option}
                  onChange={() => handleSingleChoiceChange("foodType", option)}
                >
                  {option}
                </Checkbox>
              </td>
            ))}
          </tr>
          <tr>
            {["자율급식", "제한 급식", "강제 급여"].map((option, index) =>
              option === "자율급식" ? (
                <td key={index}>
                  <Checkbox
                    checked={result.feedingType === option}
                    onChange={() =>
                      handleSingleChoiceChange("feedingType", option)
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              ) : (
                <td key={index} colSpan={2}>
                  <Checkbox
                    checked={result.feedingType === option}
                    onChange={() =>
                      handleSingleChoiceChange("feedingType", option)
                    }
                  >
                    {option}
                  </Checkbox>
                  (
                  <Input
                    size="large"
                    variant="borderless"
                    style={{ textAlign: "center", width: "50%" }}
                    value={
                      option === "제한 급식"
                        ? result.restrictedFeedingDetail
                        : result.forcedFeedingDetail
                    }
                    onChange={(e) =>
                      option === "제한 급식"
                        ? handleInputChange(
                            "restrictedFeedingDetail",
                            e.target.value
                          )
                        : handleInputChange(
                            "forcedFeedingDetail",
                            e.target.value
                          )
                    }
                  />
                  )
                </td>
              )
            )}
          </tr>
          <tr>
            {
              <td colSpan={2}>
                사료이름 (
                <Input
                  size="large"
                  variant="borderless"
                  style={{ textAlign: "center", width: "50%" }}
                  value={result.foodName}
                  onChange={(e) =>
                    handleInputChange("foodName", e.target.value)
                  }
                />
                )
              </td>
            }
            {
              <td colSpan={3}>
                하루주는양/종이컵기준 (
                <Input
                  size="large"
                  variant="borderless"
                  style={{ textAlign: "center", width: "50%" }}
                  value={result.dailyAmount}
                  onChange={(e) =>
                    handleInputChange("dailyAmount", e.target.value)
                  }
                />
                )
              </td>
            }
          </tr>
          <tr>
            <td rowSpan={2}>간식 종류/급여량을 알려주세요</td>
            <td colSpan={5}>
              간식 종류 (
              <Input
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "30%" }}
                value={result.snackType}
                onChange={(e) => handleInputChange("snackType", e.target.value)}
              />
              )
            </td>
          </tr>
          <tr>
            {["2주 이상에 한 번", "1주에 2-3번", "매일"].map(
              (option, index) => (
                <td key={index}>
                  <Checkbox
                    checked={result.treatFrequency === option}
                    onChange={() =>
                      handleSingleChoiceChange("treatFrequency", option)
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              )
            )}
          </tr>
          <tr>
            <td>영양제를 먹고 있나요?</td>
            {
              <td colSpan={5}>
                영양제 이름 (
                <Input
                  size="large"
                  variant="borderless"
                  style={{ textAlign: "center", width: "30%" }}
                  value={result.supplements}
                  onChange={(e) =>
                    handleInputChange("supplements", e.target.value)
                  }
                />
                )
              </td>
            }
          </tr>
          <tr>
            <td>구토를 하는 편인가요?</td>
            {["거의 안함", "1달에 1~2회", "1-2주에 1회", "2-3일에 한 번"].map(
              (option, index) => (
                <td key={index}>
                  <Checkbox
                    checked={result.vomitingFrequency === option}
                    onChange={() =>
                      handleSingleChoiceChange("vomitingFrequency", option)
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              )
            )}
          </tr>
          <tr>
            <td>양치를 하고 있나요?</td>
            {["거의 안함", "1달에 1~2회", "1-2주에 3번 이내", "매일"].map(
              (option, index) => (
                <td key={index}>
                  <Checkbox
                    checked={result.teethCleaningFrequency === option}
                    onChange={() =>
                      handleSingleChoiceChange("teethCleaningFrequency", option)
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              )
            )}
          </tr>
          <tr>
            <td rowSpan={2}>소변은 어떤가요?</td>
            <td>배뇨양상:</td>
            {["묽은 편", "정상", "진한 편", "간혹 혈뇨"].map(
              (option, index) => (
                <td key={index}>
                  <Checkbox
                    checked={result.urineTexture === option}
                    onChange={() =>
                      handleSingleChoiceChange("urineTexture", option)
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              )
            )}
          </tr>
          <tr>
            <td>배뇨횟수:</td>
            {["1일 1-2회", "1일 3-4회", "1일 5회 이상"].map((option, index) => (
              <td key={index}>
                <Checkbox
                  checked={result.urinationFrequency === option}
                  onChange={() =>
                    handleSingleChoiceChange("urinationFrequency", option)
                  }
                >
                  {option}
                </Checkbox>
              </td>
            ))}
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td rowSpan={2}>배변 양상 / 횟수를 알려주세요</td>
            {["묽은 편", "가끔 점액변", "정상변", "딱딱한 변"].map(
              (option, index) => (
                <td key={index}>
                  <Checkbox
                    checked={result.stoolTexture === option}
                    onChange={() =>
                      handleSingleChoiceChange("stoolTexture", option)
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              )
            )}
            <td>&nbsp;</td>
          </tr>
          <tr>
            {["1일 3회 이상", "1일 1-2회", "2일 1회", "3-4일 1회"].map(
              (option, index) => (
                <td key={index}>
                  <Checkbox
                    checked={result.defecationFrequency === option}
                    onChange={() =>
                      handleSingleChoiceChange("defecationFrequency", option)
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              )
            )}
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>혈액형 검사 시 추가비용 6만원 발생합니다</td>
            {["검사를 원합니다", "검사를 원치 않습니다"].map(
              (option, index) => (
                <td key={index} colSpan={2}>
                  <Checkbox
                    checked={
                      result.wantsBloodTypeTest ===
                      (option === "검사를 원합니다")
                    }
                    onChange={() =>
                      handleSingleChoiceChange(
                        "wantsBloodTypeTest",
                        option === "검사를 원합니다"
                      )
                    }
                  >
                    {option}
                  </Checkbox>
                </td>
              )
            )}
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>검진 시 특히 자세히 보고 싶은 부분이 있다면 적어주세요</td>
            <td colSpan={5}>
              <TextArea
                size="large"
                variant="borderless"
                style={{ textAlign: "center", width: "100%" }}
                value={result.additionalExamRequests}
                onChange={(e) =>
                  handleInputChange("additionalExamRequests", e.target.value)
                }
                rows={4}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuestionnaireTable;
