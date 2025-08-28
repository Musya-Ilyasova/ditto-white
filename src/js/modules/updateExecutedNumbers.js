const updateExecutedNumbers = async () => {
   try {
    const symbioticRes = await fetch("https://app.symbiotic.fi/api/v2/networks/0x8560C667Ae72F28D09465B342A480daB28821f6b");
    const symbioticData = await symbioticRes.json();

    const stakeUsd = symbioticData.stakeUsd;
    const stakedOperators = symbioticData.operatorsCount.staked;

    const stakeInMillions = Math.round(stakeUsd / 1_000_000);

    document.querySelector(".operatorsCount-js").textContent = stakedOperators;
    document.querySelector(".stakeUsd-js").textContent = `$${stakeInMillions}M+`;

    const endpoint = "https://ipfs-service.dittonetwork.io/stats";

    const simulationsRes = await fetch(endpoint);
    const simulationsData = await simulationsRes.json();

    const simulationsCount = simulationsData.count || simulationsData || 0;

    document.querySelector(".reportsCount-js").textContent = simulationsCount.reportsCount;

  } catch (err) {
    console.error("Ошибка при загрузке данных:", err);
  }

}

export default updateExecutedNumbers;
